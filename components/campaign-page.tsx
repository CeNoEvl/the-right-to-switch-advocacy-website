import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Scale } from 'lucide-react'
import { EvidenceSection } from '@/components/evidence-section'
import { FollowMoneySection } from '@/components/follow-money-section'
import { StatePolicySection } from '@/components/state-policy-section'
import { PeopleSection } from '@/components/people-section'
import { ActionSection } from '@/components/action-section'
import { PublicRecordSection } from '@/components/public-record-section'
import { SiteHeader } from '@/components/site-header'
import { ShareBrief } from '@/components/share-brief'
import { NewsletterForm } from '@/components/newsletter-form'
import { contactEmail, contactHref } from '@/lib/contact'
import { PageViewCounter } from '@/components/page-view-counter'

export function CampaignPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero__image"
            src="/images/advocacy-hero.png"
            alt="Editorial illustration of an adult standing in the doorway of a neighborhood shop"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__shade" />
          <div className="hero__content page-wrap">
            <p className="eyebrow hero__eyebrow"><span className="signal-dot" /> A public-interest investigation</p>
            <h1 id="hero-title">WHO GETS TO DECIDE HOW ADULTS LEAVE CIGARETTES BEHIND?</h1>
            <p className="hero__intro">Adults who have stopped smoking deserve to be heard. Independent businesses deserve clear, workable rules. Policies that change people's choices deserve public scrutiny. Explore the research, examine corporate influence, and hear from the people affected.</p>
            <div className="hero__actions">
              <a className="button button--orange" href="#evidence">Explore the evidence <ArrowDown size={16} aria-hidden="true" /></a>
              <a className="button button--outline-light" href="#tell-your-story">Tell your story <ArrowUpRight size={16} aria-hidden="true" /></a>
              <a className="button button--outline-light" href="#sign-petition">Sign the petition <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero__note">Adult choice. Public evidence. Real accountability.</p>
          </div>
          <div className="hero__folio" aria-hidden="true">FIELD NOTES&nbsp; / &nbsp;01</div>
        </section>

        <div className="ticker" aria-label="Editorial principles">
          <span>Follow the evidence</span><i aria-hidden="true">/</i><span>Protect young people</span><i aria-hidden="true">/</i><span>Hear adults out</span><i aria-hidden="true">/</i><span>Show the original record</span>
        </div>

        <section className="intro-band page-wrap" aria-label="Our approach">
          <div className="intro-band__mark"><Scale size={30} strokeWidth={1.5} aria-hidden="true" /></div>
          <p>Nicotine is addictive. Vaping is not risk-free. And decisions about tobacco rules still need <em>honest evidence</em>, youth protections, and a seat at the table for adults whose lives are affected.</p>
          <a className="text-link" href="#standards">How we report <ArrowUpRight size={15} aria-hidden="true" /></a>
        </section>

        <EvidenceSection />
        <FollowMoneySection />
        <StatePolicySection />
        <PeopleSection />
        <ActionSection />
        <PublicRecordSection />

        <section className="newsletter-band" aria-labelledby="newsletter-title">
          <div className="page-wrap newsletter-band__inner">
            <div>
              <p className="eyebrow eyebrow--light">A better-informed public</p>
              <h2 id="newsletter-title">Evidence worth<br />passing along.</h2>
              <p className="newsletter-band__copy">Occasional updates when a record changes, a new brief is checked, or a public meeting needs your attention.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-wrap site-footer__top">
          <a className="wordmark wordmark--footer" href="#top" aria-label="The Right to Switch, back to top"><span className="wordmark__symbol">R/S</span><span>THE RIGHT<br />TO SWITCH</span></a>
          <p>Adult choice.<br />Public evidence.<br />Real accountability.</p>
          <nav aria-label="Footer navigation" className="site-footer__links">
            <a href="#evidence">Evidence</a><a href="#state-policy">Pennsylvania</a><a href="#public-record">Public record</a><a href="#standards">About this project</a>
            <a className="contact-email" href={contactHref}>Email: {contactEmail}</a>
          </nav>
          <div className="site-footer__share"><ShareBrief /><span>Share a sourced finding</span></div>
        </div>
        <div className="page-wrap"><PageViewCounter /></div>
        <div className="page-wrap site-footer__bottom"><span>© 2026 The Right to Switch</span><span>Independent civic information. Not medical or legal advice.</span><a href="#standards">Editorial standards</a></div>
      </footer>
    </>
  )
}
