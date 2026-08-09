import Link from 'next/link';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="section bg-mist">
      <div className="shell max-w-xl text-center">
        <span className="eyebrow">404</span>
        <h1 className="h-section ripple ripple-center mt-3 text-navy">This page has run dry.</h1>
        <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/70">
          The page you asked for is not here. The product range and contact details are a click away.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
