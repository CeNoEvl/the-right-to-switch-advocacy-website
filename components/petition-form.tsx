import { ArrowUpRight, Mail, PenLine } from 'lucide-react'
import { contactEmail, contactHref, petitionStatement, submissionEndpoint } from '@/lib/contact'
import { SubmissionFields, SubmissionNotice } from '@/components/submission-fields'

export function PetitionForm() {
  return (
    <div className="story-panel petition-panel" id="sign-petition" aria-labelledby="petition-title">
      <div>
        <p className="eyebrow">Add your support</p>
        <h3 id="petition-title">Sign for adult choice.<br />Ask for the evidence.</h3>
        <p>{petitionStatement}</p>
        <p className="form-note">Your signature is emailed to the project organizer. Sharing your support with officials is optional below. To send your own message directly, use the FDA and lawmaker contact options above.</p>
        <div className="contact-card">
          <h4>Prefer to email directly?</h4>
          <a className="text-link contact-email" href={contactHref}><Mail size={16} aria-hidden="true" /> {contactEmail} <ArrowUpRight size={14} aria-hidden="true" /></a>
          <p className="form-note">Opens your email app. You can also copy the address into your preferred mail service.</p>
        </div>
      </div>
      <form action={submissionEndpoint} method="POST" className="story-form" aria-label="Sign the petition">
        <SubmissionFields subject="The Right to Switch — Petition signature" kind="Petition signature" />
        <input type="hidden" name="petition_statement" value={petitionStatement} />
        <label htmlFor="petition-name">Your name</label>
        <input id="petition-name" name="name" autoComplete="name" required maxLength={100} />
        <label htmlFor="petition-email">Your email</label>
        <input id="petition-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        <label htmlFor="petition-location">City and state (optional)</label>
        <input id="petition-location" name="location" maxLength={120} />
        <label htmlFor="petition-message">Why this matters to you (optional)</label>
        <textarea id="petition-message" name="message" rows={4} maxLength={3000} />
        <label className="checkbox-label"><input type="checkbox" name="adult_confirmation" value="I confirm I am 21 or older" required /> I am 21 or older.</label>
        <label className="checkbox-label"><input type="checkbox" name="signature_consent" value="I support the petition statement and consent to send my details through FormSubmit to the project organizer, who may reply about this submission" required /> I support the statement above and agree to send my signature and details through FormSubmit to the organizer, who may reply about this submission.</label>
        <label className="checkbox-label"><input type="checkbox" name="government_sharing_permission" value="I permit the organizer to share my name, city/state, petition support, and optional message with FDA and elected officials, including in a public submission. Keep my email address private." /> Optional: include my name, city/state, support, and message in a submission to FDA or elected officials. I understand a public filing may be published. Keep my email address private.</label>
        <SubmissionNotice />
        <button className="button button--ink" type="submit"><PenLine size={16} aria-hidden="true" /> Sign and send my support</button>
      </form>
    </div>
  )
}
