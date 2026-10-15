import { ArrowUpRight } from 'lucide-react'
import { sourceById } from '@/lib/campaign-data'

export function FollowMoneySection() {
  return (
    <section className="section section--ink" id="follow-the-money" aria-labelledby="money-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow eyebrow--light">02 / Follow the money</p><span className="small-note">Document the action. Test the motive.</span></div>
        <div className="money-intro"><div><h2 id="money-title">Influence should<br />leave a <em>paper trail.</em></h2><p>Which policies did a company support? What did it disclose? Who is affected? Start with original documents, and keep the questions specific.</p></div><aside className="money-stat"><span className="money-stat__value">$12.37M</span><p>Altria Client Services’ reported total federal lobbying expenses in 2025.</p><strong>All issues combined. Not a total for vape restrictions.</strong><a className="text-link" href={sourceById('altria-lobbying').url}>Open the disclosure <ArrowUpRight size={15} aria-hidden="true" /></a></aside></div>
        <div className="record-table-wrap" tabIndex={0} role="region" aria-label="Corporate policy documents; scroll horizontally on small screens">
          <table className="record-table"><caption>Two company positions, described in their own words and documents</caption><thead><tr><th scope="col">Company</th><th scope="col">Documented position</th><th scope="col">Original record</th></tr></thead><tbody>
            <tr><th scope="row">Altria</th><td>Describes supporting state vape-product directories and enforcement against unauthorized products.</td><td><a href={sourceById('altria-policy').url}>Policy statement <ArrowUpRight size={14} aria-hidden="true" /></a></td></tr>
            <tr><th scope="row">Reynolds American</th><td>Criticizes a flavor-prohibition approach in its May 2026 FDA comment. That position is distinct from product-authorization enforcement.</td><td><a href={sourceById('reynolds-comment').url}>FDA comment <ArrowUpRight size={14} aria-hidden="true" /></a></td></tr>
          </tbody></table>
        </div>
        <div className="investigation-note"><span className="badge badge--outline">A question to investigate</span><h3>Do tobacco revenues create competing incentives?</h3><p>Tax receipts and tobacco-settlement payments deserve examination alongside budgets and lobbying records. A financial incentive alone does not establish why an official supported a particular restriction. The tax-motive claim remains an investigation, not a verified conclusion.</p></div>
      </div>
    </section>
  )
}
