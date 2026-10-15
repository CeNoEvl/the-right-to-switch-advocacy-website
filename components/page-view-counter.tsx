'use client'

import { useEffect, useState } from 'react'

export function PageViewCounter() {
  const [views, setViews] = useState<number | null>(null)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    async function recordView() {
      try {
        const response = await fetch('/api/page-views', {
          method: 'POST',
          cache: 'no-store',
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Counter unavailable')
        const data = await response.json()
        if (!Number.isSafeInteger(data.views) || data.views < 0) throw new Error('Invalid count')
        if (!controller.signal.aborted) setViews(data.views)
      } catch {
        if (!controller.signal.aborted) setUnavailable(true)
      }
    }
    void recordView()
    return () => controller.abort()
  }, [])

  return (
    <div className="page-view-counter" aria-label="Website page views">
      <span className="page-view-counter__total" role="status">
        {views !== null ? <><strong>{views.toLocaleString('en-US')}</strong> page views</> : unavailable ? 'Counter temporarily unavailable' : 'Loading view count…'}
      </span>
      <span className="page-view-counter__note">Since Oct 15, 2026 · repeat views included</span>
    </div>
  )
}
