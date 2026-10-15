export const dynamic = 'force-dynamic'

const badgeUrl = new URL('https://api.visitorbadge.io/api/visitors')
badgeUrl.search = new URLSearchParams({
  path: 'https://the-right-to-switch-advocacy-websit.vercel.app/',
  label: 'Page views',
  labelColor: '#18211e',
  countColor: '#b84427',
  locale: 'en-US',
}).toString()

const responseHeaders = { 'Cache-Control': 'no-store' }

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ error: 'Origin not allowed' }, { status: 403, headers: responseHeaders })
  }

  try {
    const response = await fetch(badgeUrl, {
      headers: { 'Accept-Language': 'en-US,en;q=0.9' },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) throw new Error('Counter service unavailable')
    const svg = await response.text()
    const count = svg.match(/aria-label="PAGE VIEWS: ([0-9,]+)"/)?.[1]
    if (!count) throw new Error('Counter response did not contain a total')
    const views = Number(count.replaceAll(',', ''))
    if (!Number.isSafeInteger(views) || views < 0) throw new Error('Invalid counter total')
    return Response.json({ views }, { headers: responseHeaders })
  } catch {
    return Response.json({ error: 'Counter temporarily unavailable' }, { status: 503, headers: responseHeaders })
  }
}
