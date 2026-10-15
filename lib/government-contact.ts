export const fdaEmail = 'AskCTP@fda.hhs.gov'
export const fdaContactUrl = 'https://www.fda.gov/tobacco-products/about-center-tobacco-products-ctp/contact-ctp'
export const paLegislatorUrl = 'https://www.palegis.us/find-my-legislator'
export const citizenPetitionUrl = 'https://www.fda.gov/regulatory-information/dockets-management/instructions-submitting-citizen-petitions-cps-electronically'
export const commentInstructionsUrl = 'https://www.fda.gov/regulatory-information/federal-register-fr-notices/how-use-regulationsgov'

export type GovernmentRecipient = 'fda' | 'pa'

export const governmentDrafts: Record<GovernmentRecipient, string> = {
  fda: `Dear Center for Tobacco Products,

I am writing about vaping policy and its effects on adults who smoke or formerly smoked, young people, and independent businesses.

I support protecting young people, preserving meaningful choices for affected adults, and transparent, evidence-based decisions. Please explain how FDA considers evidence about adult smoking cessation, youth access, and the effects of product availability in its tobacco regulatory decisions.

Please identify the current opportunities for public participation, including any relevant open dockets, and explain how adults and independent retailers can provide evidence or request agency action.

My experience: [Add your own account here.]

Sincerely,
[Your name and city/state]`,
  pa: `Dear Pennsylvania Legislator,

I am writing about Pennsylvania's vaping policy and its effects on adults who smoke or formerly smoked, young people, and independent businesses.

I support protecting young people, preserving meaningful adult choices, and transparent, evidence-based policy. Please explain the evidence considered for Pennsylvania's ENDS product-directory requirements and how affected adults and independent retailers can participate in review of the policy.

Please identify any relevant legislation, public hearings, or opportunities for constituents to be heard.

My experience: [Add your own account here.]

Sincerely,
[Your name and constituency]`,
}

export function fdaEmailHref(message: string) {
  return `mailto:${fdaEmail}?subject=${encodeURIComponent('Public input on adult choice and vaping policy')}&body=${encodeURIComponent(message)}`
}
