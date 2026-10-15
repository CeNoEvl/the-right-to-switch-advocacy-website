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

## Reaching FDA and elected officials

The action section offers separate editable drafts for FDA's Center for Tobacco
Products and Pennsylvania lawmakers. Switching recipients preserves each draft.
The FDA button opens the visitor's email app addressed to **AskCTP@fda.hhs.gov**;
the visitor reviews and sends it. A copy button supports webmail and official
contact forms. No email to government is sent by the website automatically.

Official recipient sources, checked October 15, 2026:
- FDA contact: https://www.fda.gov/tobacco-products/about-center-tobacco-products-ctp/contact-ctp
- Pennsylvania lawmakers: https://www.palegis.us/find-my-legislator
- Citizen petition filing: https://www.fda.gov/regulatory-information/dockets-management/instructions-submitting-citizen-petitions-cps-electronically
- Docket comments: https://www.fda.gov/regulatory-information/federal-register-fr-notices/how-use-regulationsgov

The support form emails the organizer separately. An optional, unchecked
`government_sharing_permission` checkbox allows the organizer to include that
signer's name, city/state, support, and optional message in a government submission,
which could be public. Do not include their email address. If that field is
absent, including for all signatures submitted before this option was added,
do not share their identifiable support without obtaining separate permission.
Stories still require separate publication permission.

The site does not claim a formal FDA petition has been filed or a docket
comment submitted. Follow FDA's instructions to prepare any formal request,
use the relevant official filing route, and retain its tracking confirmation.


## Public footer page-view counter

The footer displays a cumulative **page-view estimate**, starting October 15,
2026, using VisitorBadge.io's shared counter. The total is stored by that
service, not in browser storage or a serverless function's memory.
No Vercel dashboard authorization or additional environment variables are needed.

On page mount, the client posts once to `/api/page-views`. The server makes
one uncached request to the fixed VisitorBadge endpoint and returns only
the validated numeric total. It does not forward visitor cookies, client
IP headers, form entries, or email addresses. The upstream SVG is never
inserted into the page or served as executable content.

Repeat page loads, bot requests, and setup/verification requests may increase
this public count. Script blockers and network errors may omit views. It is
not a count of unique people and cannot recover historical or daily Vercel
Analytics totals. Keep the upstream `path` identifier stable to retain the
same counter.

The footer displays an unavailable message if the service fails, rather than
a fabricated number. The internal POST rejects an explicitly different
Origin, but this is a public counter and must not be used as fraud-resistant
or independently verified analytics.

Counter service: https://www.visitorbadge.io/
Provider reference: https://github.com/estruyf/github-visitors-badge
