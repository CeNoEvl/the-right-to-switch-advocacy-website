'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { PetitionForm } from '@/components/petition-form'
import { citizenPetitionUrl, commentInstructionsUrl, fdaContactUrl, fdaEmail, fdaEmailHref, governmentDrafts, paLegislatorUrl, type GovernmentRecipient } from '@/lib/government-contact'

export function ActionSection() {
  const [recipient, setRecipient] = useState<GovernmentRecipient>('fda')
  const [drafts, setDrafts] = useState(governmentDrafts)
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')
  const message = drafts[recipient]

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setStatus('Copied. Paste into your email or the official contact page, review it, and send when ready.')
    } catch {
      setStatus('Select the message below and copy it using your device’s copy command.')
    }
  }

  return (
    <section className="section section--orange" id="take-action" aria-labelledby="action-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">05 / Make your voice useful</p><span className="small-note">Read. Personalize. Send.</span></div>
        <div className="action-grid">
          <div>
            <h2 id="action-title">Put your words<br /><em>in the right hands.</em></h2>
            <p>Contact FDA about federal tobacco policy or your Pennsylvania lawmakers about state policy. Choose a recipient, personalize your message, and send it yourself.</p>
            <div className="official-links">
              <a className="text-link" href={fdaContactUrl}>FDA’s official contact details <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="text-link" href={paLegislatorUrl}>Find your Pennsylvania lawmakers <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="text-link" href="https://www.usa.gov/elected-officials">Find other elected officials <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
            <p className="form-note">FDA lists {fdaEmail} for consumer inquiries and formal correspondence. An email does not itself file a formal citizen petition or a comment in a specific regulatory docket.</p>
          </div>
          <div className="message-panel">
            <label htmlFor="government-recipient">Who do you want to contact?</label>
            <select id="government-recipient" value={recipient} onChange={(event) => { setRecipient(event.target.value as GovernmentRecipient); setCopied(false); setStatus('') }}>
              <option value="fda">FDA — Center for Tobacco Products</option>
              <option value="pa">Pennsylvania state lawmakers</option>
            </select>
            <label className="government-message-label" htmlFor="civic-message">Personalize your message</label>
            <textarea id="civic-message" rows={14} maxLength={5000} value={message} onChange={(event) => { setDrafts((previous) => ({ ...previous, [recipient]: event.target.value })); setCopied(false); setStatus('') }} />
            <div className="form-actions">
              <button className="button button--ink" type="button" onClick={copyMessage}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} {copied ? 'Message copied' : 'Copy my message'}</button>
              {recipient === 'fda' ? <a className="button button--ink" href={fdaEmailHref(message)}><Mail size={16} aria-hidden="true" /> Open email to FDA</a> : <a className="button button--ink" href={paLegislatorUrl}>Find my lawmakers <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
            <p className="form-note">{recipient === 'fda' ? `Opens your email app addressed to ${fdaEmail} with your draft. Review it and press Send there. If your mail app does not open, copy the message into your preferred email service.` : 'Copy your draft, use the official lookup to find your lawmakers, and paste it into their contact form. You choose whom to contact and when to send.'}</p>
            <p className="form-status" role="status">{status || 'No message is sent automatically. Drafts stay in this page’s memory until you leave or reload.'}</p>
          </div>
        </div>
        <div className="government-filing">
          <h3>Want your request in the official record?</h3>
          <p>A formal FDA citizen petition needs a specific request and supporting material prepared to FDA’s requirements. To comment on an existing proposal, use its topic-specific docket while comments are open.</p>
          <div className="official-links">
            <a className="text-link" href={citizenPetitionUrl}>FDA citizen-petition instructions <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a className="text-link" href={commentInstructionsUrl}>How to submit an official docket comment <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <p className="form-note">Review the official site’s publication and privacy notice before filing. Save the confirmation or tracking number after submission.</p>
        </div>
        <PetitionForm />
      </div>
    </section>
  )
}
