'use client'

import { useState } from 'react'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { checkedDate, sourceById } from '@/lib/campaign-data'

export function StatePolicySection() {
  const [state, setState] = useState('PA')
  return (
    <section className="section section--white" id="state-policy" aria-labelledby="policy-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">03 / Know the rule</p><span className="small-note">Last checked {checkedDate}</span></div>
        <div className="section-intro"><h2 id="policy-title">Your state.<br /><em>Your questions.</em></h2><div><p>A flavor restriction, a product-directory law, and a federal authorization decision are different things. Find the actual rule before drawing a conclusion.</p><label className="field-label" htmlFor="policy-state">Choose a jurisdiction</label><select id="policy-state" value={state} onChange={(event) => setState(event.target.value)}><option value="PA">Pennsylvania</option><option value="other">Another U.S. state</option></select></div></div>
        {state === 'PA' ? <div className="policy-grid"><div className="policy-card"><p className="eyebrow"><MapPin size={16} aria-hidden="true" /> Pennsylvania / Act 57</p><h3>A directory law.<br />A date worth checking.</h3><p>Pennsylvania’s Attorney General states that enforcement of its ENDS directory law may begin on October 19, 2026. Use the live official directory and announcement for the latest status.</p><div className="policy-date"><span>Enforcement may begin</span><strong>OCT 19, 2026</strong></div><a className="text-link" href={sourceById('pa-enforcement').url}>Read the announcement <ArrowUpRight size={15} aria-hidden="true" /></a></div><div className="policy-steps"><h3>Before you act, check:</h3><ol><li><strong>The state directory</strong><p>Confirm the current listing with the Pennsylvania Attorney General.</p><a className="text-link" href={sourceById('pa-directory').url}>Open the live directory <ArrowUpRight size={14} aria-hidden="true" /></a></li><li><strong>The federal position</strong><p>State listing and FDA marketing authorization are separate questions. Enforcement priorities also have their own meaning.</p><a className="text-link" href={sourceById('fda-guidance').url}>Read FDA’s explanation <ArrowUpRight size={14} aria-hidden="true" /></a></li><li><strong>The date and scope</strong><p>Check amendments, court orders, and regulator updates. This page records information checked on {checkedDate}.</p></li></ol></div></div> : <div className="empty-state" role="status"><p className="eyebrow">Research pending</p><h3>One verified jurisdiction at a time.</h3><p>Only Pennsylvania has been researched for this edition. This page makes no claim about the rules in another state. Check your state legislature and regulator for current information.</p><a className="text-link" href="https://www.usa.gov/state-governments">Find your state government <ArrowUpRight size={15} aria-hidden="true" /></a></div>}
      </div>
    </section>
  )
}
