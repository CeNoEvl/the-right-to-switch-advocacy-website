'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { PetitionForm } from '@/components/petition-form'

const initialMessage = `Dear Representative,\n\nI am writing about vaping policy and its effects on adults who smoke or formerly smoked, young people, and independent businesses.\n\nPlease explain how the policy you support distinguishes youth-access protections, flavor restrictions, FDA authorization, and product-directory requirements. What evidence has been considered about smoking cessation, changes in cigarette purchasing, and the impact on small businesses?\n\nI support protecting young people, transparent decision-making, and a meaningful opportunity for affected adults and retailers to be heard. Please identify the relevant proposal, its supporting evidence, and how constituents can participate.\n\nMy experience: [Add your own account here.]\n\nSincerely,\n[Your name and constituency]`

export function ActionSection() {
  const [message, setMessage] = useState(initialMessage)
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('')
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
      setStatus('Copied. Review your message and send it through your representative’s official contact page.')
    } catch {
      setStatus('Select the message below and copy it using your device’s copy command.')
    }
  }
  return (
    <section className="section section--orange" id="take-action" aria-labelledby="action-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">05 / Make your voice useful</p><span className="small-note">Read. Personalize. Decide.</span></div>
        <div className="action-grid"><div><h2 id="action-title">A clear question.<br /><em>A real next step.</em></h2><p>Ask for the evidence behind a policy and describe your own experience. A thoughtful message gives your elected officials something specific to answer.</p><a className="button button--ink" href="https://www.usa.gov/elected-officials">Find your elected officials <ArrowUpRight size={16} aria-hidden="true" /></a><p className="form-note">Opens the U.S. government’s official lookup. You choose whom to contact and whether to send a message.</p></div><div className="message-panel"><label htmlFor="civic-message">Personalize your message</label><textarea id="civic-message" rows={14} value={message} onChange={(event) => { setMessage(event.target.value); setCopied(false) }} /><button className="button button--ink" type="button" onClick={copyMessage}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} {copied ? 'Message copied' : 'Copy my message'}</button><p className="form-status" role="status">{status || 'This tool does not send messages or collect your entries.'}</p></div></div>
        <PetitionForm />
      </div>
    </section>
  )
}
