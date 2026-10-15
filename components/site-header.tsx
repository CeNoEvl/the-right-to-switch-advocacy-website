'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['Evidence', '#evidence'],
  ['Follow the money', '#follow-the-money'],
  ['State rules', '#state-policy'],
  ['People', '#people'],
  ['Public record', '#public-record'],
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-wrap site-header__inner">
        <a className="wordmark" href="#top" aria-label="The Right to Switch home">
          <span className="wordmark__symbol">R/S</span>
          <span>THE RIGHT<br />TO SWITCH</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`site-nav${open ? ' site-nav--open' : ''}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button--orange site-nav__action" href="#sign-petition" onClick={() => setOpen(false)}>Sign the petition <ArrowUpRight size={15} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  )
}
