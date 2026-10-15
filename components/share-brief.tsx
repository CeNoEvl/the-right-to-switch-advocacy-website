'use client'

import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'

export function ShareBrief() {
  const [status, setStatus] = useState('')
  async function share() {
    const url = `${window.location.origin}${window.location.pathname}#evidence`
    try {
      if (navigator.share) {
        await navigator.share({ title: 'The Right to Switch — The evidence', text: 'Adult choice. Public evidence. Real accountability.', url })
        setStatus('Share dialog completed.')
      } else {
        await navigator.clipboard.writeText(url)
        setStatus('Evidence link copied.')
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return
      setStatus('Copy this page’s address from your browser to share it.')
    }
  }
  return <div className="share-control"><button className="share-button" type="button" onClick={share}>{status === 'Evidence link copied.' ? <Check size={17} aria-hidden="true" /> : <Share2 size={17} aria-hidden="true" />} Share the evidence</button><span className="form-status" role="status">{status}</span></div>
}
