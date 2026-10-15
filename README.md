# The Right to Switch

An independent civic information website about adult vaping choices, public evidence, tobacco policy, and Pennsylvania's ENDS product directory.

Live website: https://the-right-to-switch-advocacy-websit.vercel.app/

## Development

Use the pnpm version declared in package.json.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

See REPAIR-NOTES.md for source provenance, validation history, and features still requiring external services.

## Petition, story submissions, and contact

The petition and story forms POST directly to FormSubmit at
`https://formsubmit.co/mind.box11@gmail.com`. Direct email links use the same address.
Visitors do not need an account. No Gmail password or API token is included in the site.

### Activate delivery before inviting visitors

1. Open the deployed site and send one clearly labeled test petition signature using an email address you control.
2. Check **mind.box11@gmail.com**, including Spam, for FormSubmit's activation email.
3. Click the activation link. FormSubmit requires this before it forwards submissions.
4. Submit another labeled test and verify that the email arrives with the name, email, petition statement, optional message, and consent fields.
5. Repeat the story test and check that replying addresses the submitter. Check the direct email link as well.

Native form POSTs leave the site for FormSubmit's CAPTCHA and confirmation.
CAPTCHA remains enabled by default; both forms also include a honeypot.
The site does not display a local success message or signature total.
A provider confirmation is not proof of inbox delivery; verify delivery in Gmail.

Only clicking **Send my story** transmits the story. **Download a private draft**
creates a local text file and works without the email or consent fields.
Submitted details are processed by FormSubmit and emailed to the organizer;
the site does not maintain a signature database or automatically publish entries.
Do not publish stories without separate permission or treat submitted names as verified identities.
No mailing-list enrollment or automated reply is configured.

Provider documentation: https://formsubmit.co/documentation
Activation help: https://formsubmit.co/help
