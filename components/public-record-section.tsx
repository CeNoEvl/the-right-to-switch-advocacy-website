'use client'

import { useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { checkedDate, sources } from '@/lib/campaign-data'

export function PublicRecordSection() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  const filtered = sources.filter((source) => (type === 'All' || source.type === type) && `${source.title} ${source.publisher} ${source.summary}`.toLowerCase().includes(query.toLowerCase()))
  return (
    <section className="section section--white" id="public-record" aria-labelledby="records-title">
      <div className="page-wrap">
        <div className="section-heading"><p className="eyebrow">06 / The public record</p><span className="small-note">Checked {checkedDate}</span></div>
        <div className="section-intro"><h2 id="records-title">Don’t take our word.<br /><em>Open the record.</em></h2><p>Read the research, regulator notices, and company statements for yourself. Every source has a role—and a limit.</p></div>
        <div className="record-filters"><div className="search-field"><label className="sr-only" htmlFor="source-search">Search sources</label><Search size={18} aria-hidden="true" /><input id="source-search" type="search" placeholder="Search the evidence and public record" value={query} onChange={(event) => setQuery(event.target.value)} /></div><div><label className="sr-only" htmlFor="source-type">Filter by source type</label><select id="source-type" value={type} onChange={(event) => setType(event.target.value)}><option>All</option>{Array.from(new Set(sources.map((source) => source.type))).map((item) => <option key={item}>{item}</option>)}</select></div></div>
        <p className="results-count" role="status">{filtered.length} {filtered.length === 1 ? 'source' : 'sources'}</p>
        <div className="source-list">{filtered.map((source) => <article className="source-row" key={source.id}><div><span className="badge">{source.type}</span><p className="source-note">{source.publisher} / {source.date}</p></div><div><h3><a href={source.url}>{source.title} <ArrowUpRight size={17} aria-hidden="true" /></a></h3><p>{source.summary}</p></div></article>)}{filtered.length === 0 && <p className="empty-state">No sources match. Try a different search or choose “All”.</p>}</div>
        <div className="standards-panel" id="standards"><p className="eyebrow">How we report</p><h3>Conviction, with a way to check it.</h3><div className="standards-grid"><div><h4>Evidence and attribution</h4><p>Research, public records, industry statements, and personal accounts are labeled separately. Company claims are attributed, and uncertain motives remain questions.</p></div><div><h4>Images and stories</h4><p>Editorial images are illustrative. No invented personal testimony, shop interview, petition count, or quitting total is presented as real.</p></div><div><h4>Funding and data</h4><p>No sponsorship or industry funding arrangement is represented in this edition. Forms do not submit or store entries on a server. Downloaded drafts stay on your device.</p></div><div><h4>Corrections and updates</h4><p>Sources were checked on {checkedDate}. Rules and evidence change. Consult current primary documents and the publication feed before relying on an earlier summary.</p><a className="text-link" href="/feed.xml">Open the publication feed <ArrowUpRight size={14} aria-hidden="true" /></a></div></div></div>
      </div>
    </section>
  )
}
