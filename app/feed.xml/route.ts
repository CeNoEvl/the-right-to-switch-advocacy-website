import { sources } from '@/lib/campaign-data'

export const dynamic = 'force-dynamic'

function xml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

export function GET(request: Request) {
  const siteUrl = new URL('/', request.url).href
  const items = sources.map((source) => `<item><title>${xml(source.title)}</title><link>${xml(source.url)}</link><guid isPermaLink="true">${xml(source.url)}</guid><description>${xml(`${source.publisher}. ${source.summary}`)}</description><pubDate>Wed, 14 Oct 2026 12:00:00 GMT</pubDate></item>`).join('')
  const content = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>The Right to Switch — Public Record</title><link>${xml(siteUrl)}</link><description>A source-linked reading list on adult smoking cessation and vaping policy.</description><language>en-us</language><lastBuildDate>Wed, 14 Oct 2026 12:00:00 GMT</lastBuildDate>${items}</channel></rss>`
  return new Response(content, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
