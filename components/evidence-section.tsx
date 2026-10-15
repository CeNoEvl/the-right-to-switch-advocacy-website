import { ArrowUpRight } from 'lucide-react'
import { sourceById } from '@/lib/campaign-data'

const cards = [
  { id: 'cochrane', heading: 'Quitting deserves an honest discussion.', detail: 'The finding concerns smoking cessation at six months or longer. It does not make vaping risk-free, or prove that a specific liquid is an effective treatment.' },
  { id: 'flavor-study', heading: 'Measure what happens after a restriction.', detail: 'This is an observational retail-sales analysis. Sales estimates are not a direct count of people quitting or starting, and one study does not settle every policy question.' },
  { id: 'altria-policy', heading: 'Corporate involvement is on the record.', detail: 'A company’s position is evidence of its stated activity. Assessing its effects or motives requires additional records and independent scrutiny.' },
] as const

export function EvidenceSection() {
  return (
    <section className="section section--paper" id="evidence" aria-labelledby="evidence-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">01 / The evidence</p><span className="small-note">Sources first. Claims second.</span></div>
        <div className="section-intro"><h2 id="evidence-title">Start with what<br /><em>we can show.</em></h2><p>Adult experiences matter. Independent research matters. A useful debate makes room for both—and is clear about what each can establish.</p></div>
        <div className="evidence-grid">
          {cards.map((card, index) => {
            const source = sourceById(card.id)
            return <article className="evidence-card" key={card.id}>
              <div className="card-topline"><span className="record-number">0{index + 1}</span><span className="badge">{source.type}</span></div>
              <h3>{card.heading}</h3><p>{source.summary}</p>
              <details className="evidence-detail"><summary>What this finding means</summary><p>{card.detail}</p></details>
              <a className="text-link" href={source.url}>Read the original <ArrowUpRight size={15} aria-hidden="true" /></a>
              <p className="source-note">{source.publisher} / {source.date}</p>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
