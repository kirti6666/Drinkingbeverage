import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';

export default function SiteFooter({ brand, footer, contact, certifications, seo }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-deep pt-10 text-white/70">
      <div className="shell grid gap-x-8 gap-y-8 pb-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(2,1fr)_1.3fr]">
        <div>
          <Logo brand={brand} tone="light" />
          <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed">{footer?.blurb}</p>
          {certifications?.fssaiNumber ? (
            <p className="mt-3 text-[12px] text-white/50">
              {certifications.fssaiLabel} {certifications.fssaiNumber}
            </p>
          ) : null}
        </div>

        {(footer?.columns || []).map((column, i) => (
          <nav key={i}>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              {column.title}
            </h3>
            <ul className="mt-3 space-y-2 text-[0.9rem]">
              {(column.links || []).map((link, j) => (
                <li key={j}>
                  <Link href={link.href || '/'} className="transition-colors hover:text-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Reach us</h3>
          <ul className="mt-3 space-y-2.5 text-[0.9rem]">
            {contact?.phone ? (
              <li>
                <a href={`tel:${contact.phone}`} className="flex items-start gap-2.5 hover:text-orange">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {contact.phone}
                </a>
              </li>
            ) : null}
            {contact?.email ? (
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-2.5 break-all hover:text-orange">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                  {contact.email}
                </a>
              </li>
            ) : null}
            {contact?.address ? (
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span>{contact.address}</span>
              </li>
            ) : null}
          </ul>
          {footer?.social?.some((s) => s.href) ? (
            <ul className="mt-4 flex gap-2">
              {footer.social
                .filter((s) => s.href)
                .map((s, i) => (
                  <li key={i}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-3 py-1.5 text-[12px] hover:border-orange hover:text-orange"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
            </ul>
          ) : null}
        </div>
      </div>

      {seo?.areasServed?.length ? (
        <div className="shell pb-6 text-[12px] leading-relaxed text-white/45">
          Delivering packaged drinking water in {seo.areasServed.join(', ')}.
        </div>
      ) : null}

      <div className="border-t border-white/10 py-4 text-[12px]">
        {/* The admin panel is reached by typing /admin directly — it is
            deliberately not linked from any public page. */}
        <div className="shell flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p>&copy; {year} {footer?.copyright}</p>
          {contact?.website ? <p className="text-white/45">{contact.website}</p> : null}
        </div>
      </div>
    </footer>
  );
}
