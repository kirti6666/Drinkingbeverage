'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';

export default function SiteHeader({ brand, nav, contact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A route change should always close the drawer, and the page behind it
  // must not scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = nav?.links || [];

  return (
    <>
      <div className="hidden bg-navy-deep py-2 text-[12.5px] text-white/75 lg:block">
        <div className="shell flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Icon name="certificate" className="h-4 w-4 text-orange" />
            FSSAI certified packaged drinking water
          </span>
          <span className="flex items-center gap-6">
            <a className="flex items-center gap-1.5 hover:text-white" href={`tel:${contact?.phone}`}>
              <Icon name="phone" className="h-4 w-4" />
              {contact?.phone}
            </a>
            <a className="flex items-center gap-1.5 hover:text-white" href={`mailto:${contact?.email}`}>
              <Icon name="mail" className="h-4 w-4" />
              {contact?.email}
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-navy/10 bg-white/95 shadow-[0_10px_30px_-24px_rgba(13,26,46,.7)] backdrop-blur'
            : 'border-transparent bg-white'
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
          <Link href="/" aria-label={brand?.name}>
            <Logo brand={brand} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href || '/'}
                  className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                    active ? 'bg-mist text-navy' : 'text-ink/70 hover:text-navy'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {nav?.ctaLabel ? (
              <Link href={nav.ctaHref || '/contact'} className="btn btn-primary ml-3">
                {nav.ctaLabel}
              </Link>
            ) : null}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all ${
                  open ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-5 rounded bg-current transition-all ${
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-x-0 top-[68px] origin-top bg-white px-5 pb-8 pt-4 shadow-2xl transition-transform duration-300 sm:top-[76px] ${
            open ? 'translate-y-0' : '-translate-y-[120%]'
          }`}
        >
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={`m-${link.href}-${link.label}`}
                href={link.href || '/'}
                className="flex items-center justify-between border-b border-navy/10 py-4 font-display text-lg font-semibold text-navy"
              >
                {link.label}
                <Icon name="arrow" className="h-4 w-4 text-orange" />
              </Link>
            ))}
          </nav>
          <div className="mt-6 grid gap-3">
            {nav?.ctaLabel ? (
              <Link href={nav.ctaHref || '/contact'} className="btn btn-primary w-full">
                {nav.ctaLabel}
              </Link>
            ) : null}
            <a href={`tel:${contact?.phone}`} className="btn btn-outline w-full">
              <Icon name="phone" className="h-4 w-4" /> {contact?.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
