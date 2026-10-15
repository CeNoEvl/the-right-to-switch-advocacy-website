'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowDown, Download, Send } from 'lucide-react'
import { submissionEndpoint } from '@/lib/contact'
import { SubmissionFields, SubmissionNotice } from '@/components/submission-fields'

export function PeopleSection() {
  const [kind, setKind] = useState('adult')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [story, setStory] = useState('')
  const [adult, setAdult] = useState(false)
  const [status, setStatus] = useState('')
  function downloadStory(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (!story.trim()) {
      setStatus('Write your experience before downloading a draft.')
      return
    }
    const text = `THE RIGHT TO SWITCH — PERSONAL DRAFT\n\nPerspective: ${kind === 'adult' ? 'Adult personal account' : 'Shop-owner account'}\nName: ${name.trim() || 'Not provided'}\nState: ${location.trim() || 'Not provided'}\n\n${story.trim()}\n\nThis draft has not been submitted or published.`
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'my-right-to-switch-account.txt'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setStatus('Your draft was prepared for download. Nothing was submitted or published.')
  }
  return (
    <section className="section section--paper" id="people" aria-labelledby="people-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">04 / The people behind the policy</p><span className="small-note">Experiences belong in the conversation.</span></div>
        <div className="people-grid"><figure className="shop-portrait"><Image src="/images/shop-owner.png" alt="Editorial illustration of an adult reviewing paperwork behind a shop counter" width={1200} height={896} sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>Illustrative image. This is not a published interview or testimonial.</figcaption></figure><div className="people-copy"><p className="eyebrow">Behind the counter</p><h2 id="people-title">There is a person<br />on the other side<br /><em>of every policy.</em></h2><p>A customer with a history of smoking. An owner checking inventory. A family weighing the next step. Their accounts can show how a rule is experienced, alongside the research that tests its outcomes.</p><p>Our standard: authentic accounts, clear attribution, and permission before publication. No interviews or testimonials have been published in this edition.</p><a className="text-link" href="#tell-your-story">Prepare your own account <ArrowDown size={15} aria-hidden="true" /></a></div></div>
        <div className="story-panel" id="tell-your-story">
          <div>
            <p className="eyebrow">Your words / Your decision</p>
            <h3>Put your experience<br />into words.</h3>
            <p>Send your story privately to the project organizer, or download a draft to keep. Entries stay in this page’s memory until you send, leave, or reload.</p>
            <p className="form-note">Sending does not automatically publish your story. Avoid including sensitive details you do not want to share. Downloading creates a file on your device without sending your entries.</p>
          </div>
          <form action={submissionEndpoint} method="POST" className="story-form" aria-label="Send your story">
            <SubmissionFields subject="The Right to Switch — Personal story" kind="Personal story" />
            <div className="form-row">
              <div><label htmlFor="story-kind">Your perspective</label><select id="story-kind" name="perspective" value={kind} onChange={(event) => setKind(event.target.value)}><option value="adult">Adult personal account</option><option value="shop">Independent shop owner</option></select></div>
              <div><label htmlFor="story-state">State (optional)</label><input id="story-state" name="state" autoComplete="address-level1" maxLength={60} value={location} onChange={(event) => setLocation(event.target.value)} /></div>
            </div>
            <label htmlFor="story-name">Your name (optional)</label>
            <input id="story-name" name="name" autoComplete="name" maxLength={100} value={name} onChange={(event) => setName(event.target.value)} />
            <label htmlFor="story-email">Your email (required to send)</label>
            <input id="story-email" name="email" type="email" autoComplete="email" required maxLength={254} />
            <label htmlFor="story-text">Your experience</label>
            <textarea id="story-text" name="story" rows={5} required maxLength={6000} value={story} onChange={(event) => setStory(event.target.value)} placeholder={kind === 'adult' ? 'What did you try? What changed? What do you want policymakers to understand?' : 'What guidance have you received? What has changed for your business and customers?'} />
            <label className="checkbox-label"><input type="checkbox" name="adult_confirmation" value="I confirm I am 21 or older" checked={adult} onChange={(event) => setAdult(event.target.checked)} required /> I am 21 or older.</label>
            <label className="checkbox-label"><input type="checkbox" name="submission_consent" value="I consent to send my story and contact details through FormSubmit to the project organizer, who may reply; publication requires separate permission" required /> I agree to send my story and contact details through FormSubmit to the organizer, who may reply. Publication requires my separate permission.</label>
            <SubmissionNotice />
            <div className="form-actions">
              <button className="button button--ink" type="submit"><Send size={16} aria-hidden="true" /> Send my story</button>
              <button className="button button--secondary" type="button" onClick={downloadStory}><Download size={16} aria-hidden="true" /> Download a private draft</button>
            </div>
            <p className="form-status" role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
