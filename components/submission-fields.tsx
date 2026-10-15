export function SubmissionFields({ subject, kind }: { subject: string; kind: string }) {
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="submission_type" value={kind} />
      <input className="submission-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    </>
  )
}

export function SubmissionNotice() {
  return <p className="form-note submission-notice">Sending opens FormSubmit for a spam check and confirmation. FormSubmit processes your entries and emails them to the project organizer. Your details are not automatically published or added to a mailing list. This is a message to the project, not an official government filing.</p>
}
