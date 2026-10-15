export const checkedDate = 'October 14, 2026'

export const sources = [
  {
    id: 'cochrane',
    type: 'Research',
    title: 'Nicotine e-cigarettes and smoking cessation',
    publisher: 'Cochrane',
    date: '2026 review',
    summary: 'A living review finds high-certainty evidence of higher quit rates with nicotine e-cigarettes than with nicotine replacement therapy. It does not establish the effectiveness of every flavor or brand.',
    url: 'https://www.cochrane.org/evidence/CD010216_can-electronic-cigarettes-help-people-stop-smoking-and-do-they-have-any-unwanted-effects-when-used',
  },
  {
    id: 'flavor-study',
    type: 'Research',
    title: 'Flavor restrictions and tobacco-product sales',
    publisher: 'American Journal of Health Economics',
    date: 'March 23, 2026',
    summary: 'This observational policy analysis estimates lower e-cigarette sales and higher cigarette sales following flavor restrictions in the markets studied, using data through March 2023. Effects may differ across policies and places.',
    url: 'https://www.journals.uchicago.edu/doi/full/10.1086/734689',
  },
  {
    id: 'altria-policy',
    type: 'Industry statement',
    title: 'Altria: enforcement and product-directory legislation',
    publisher: 'Altria',
    date: 'Describes 2025 activities',
    summary: 'Altria describes supporting state product-directory laws and stronger enforcement against unauthorized vape products. This is the company’s account of its own policy activity.',
    url: 'https://www.altria.com/about-altria/government-affairs/public-policy-positions/combatting-illicit-markets-through-effective-enforcement',
  },
  {
    id: 'altria-lobbying',
    type: 'Industry disclosure',
    title: 'Altria federal lobbying disclosures',
    publisher: 'Altria Client Services',
    date: '2025 reporting year',
    summary: 'Reports $12,370,000 in total federal lobbying expenses for 2025. This is an all-issues total, not an amount attributed specifically to vape restrictions.',
    url: 'https://www.altria.com/about-altria/government-affairs/lobbying-disclosures',
  },
  {
    id: 'reynolds-comment',
    type: 'Industry statement',
    title: 'Reynolds comment on flavored-product guidance',
    publisher: 'Reynolds American',
    date: 'May 14, 2026',
    summary: 'Reynolds criticizes a flavor-prohibition approach in its FDA comment. Company positions on flavors, product authorization, and enforcement must be examined separately.',
    url: 'https://www.reynoldsamerican.com/news/reynolds-submits-comment-on-fda-draft-guidance-for-flavored-ends/',
  },
  {
    id: 'pa-enforcement',
    type: 'Public record',
    title: 'Pennsylvania Act 57 enforcement announcement',
    publisher: 'Pennsylvania Office of Attorney General',
    date: 'October 8, 2026',
    summary: 'The Attorney General states that enforcement of Pennsylvania’s ENDS directory law may begin October 19, 2026. Check the official source for subsequent changes.',
    url: 'https://www.attorneygeneral.gov/taking-action/enforcement-of-act-57-which-prohibits-pa-sales-of-unapproved-vape-and-e-cigarette-products-can-begin-october-19/',
  },
  {
    id: 'pa-directory',
    type: 'Public record',
    title: 'Pennsylvania ENDS product directory',
    publisher: 'Pennsylvania Office of Attorney General',
    date: 'Check the live official directory',
    summary: 'The state’s directory and certification information. State listing and federal marketing authorization are distinct questions; consult both relevant authorities.',
    url: 'https://www.attorneygeneral.gov/businesses-and-organizations/electronic-nicotine-delivery-system-laws-forms-directory/ends-directory/',
  },
  {
    id: 'fda-guidance',
    type: 'Public record',
    title: 'FDA explanation of enforcement priorities',
    publisher: 'U.S. Food and Drug Administration',
    date: 'May 8, 2026',
    summary: 'Explains enforcement priorities for unauthorized ENDS and nicotine-pouch products. Enforcement prioritization is not marketing authorization.',
    url: 'https://www.fda.gov/tobacco-products/ctp-newsroom/fda-issues-guidance-enforcement-priorities-unauthorized-ends-and-nicotine-pouch-products',
  },
] as const

export function sourceById(id: (typeof sources)[number]['id']) {
  return sources.find((source) => source.id === id)!
}
