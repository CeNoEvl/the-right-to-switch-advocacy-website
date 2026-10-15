import { ArrowUpRight, Rss } from 'lucide-react'

export function NewsletterForm() {
  return <div className="updates-panel"><Rss size={26} strokeWidth={1.5} aria-hidden="true" /><h3>Keep the sources close.</h3><p>Email signups are not open in this edition. Follow the publication’s RSS feed with your preferred reader, or bookmark the source library.</p><a className="button button--outline-light" href="/feed.xml">Open the RSS feed <ArrowUpRight size={16} aria-hidden="true" /></a><a className="text-link" href="#public-record">Browse the source library <ArrowUpRight size={15} aria-hidden="true" /></a><p className="source-note">No email address is collected.</p></div>
}
