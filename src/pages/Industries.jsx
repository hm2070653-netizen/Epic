import { Link } from 'react-router-dom'
import { CtaButtons, SecHead } from '../components/Shared.jsx'
import { Check } from '../components/Icons.jsx'

const industries = [
  { 
    title: 'Plumbers', 
    slug: 'plumbers',
    desc: 'Emergency leak repairs, installations & drain cleaning — rank when homeowners need help fast.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 2a5 5 0 0 0-5 5c0 5-2 6-2 9h14c0-3-2-4-2-9a5 5 0 0 0-5-5zM9 21h6" /></svg> 
  },
  { 
    title: 'Electricians', 
    slug: 'electricians',
    desc: 'Panel upgrades, rewiring & emergency calls — be the first name when sparks fly.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg> 
  },
  { 
    title: 'Roofers', 
    slug: 'roofers',
    desc: 'Storm damage, replacements & repairs — capture high-intent searches when leaks happen.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg> 
  },
  { 
    title: 'Heating & HVAC', 
    slug: 'hvac',
    desc: 'Furnace repair, AC install & seasonal maintenance — own the emergency search moment.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> 
  },
  { 
    title: 'Drainage Companies', 
    slug: 'drainage',
    desc: 'Blocked drains, sewer lines & gutter solutions — show up when water won\'t go down.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> 
  },
  { 
    title: 'Landscapers', 
    slug: 'landscapers',
    desc: 'Lawn care, hardscaping & seasonal cleanups — win the "near me" search all year round.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 22V8" /><path d="M5 12c0-4.4 3.1-8 7-8s7 3.6 7 8" /><path d="M5 12h14" /></svg> 
  },
  { 
    title: 'Builders', 
    slug: 'builders',
    desc: 'Renovations, extensions & new builds — get found by homeowners ready to invest.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M13 9h.01M13 13h.01" /></svg> 
  },
  { 
    title: 'Locksmiths', 
    slug: 'locksmiths',
    desc: 'Emergency lockouts, rekeying & security installs — be the 24/7 answer they search for.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><circle cx="12" cy="16" r="1" /></svg> 
  },
  { 
    title: 'Pest Control', 
    slug: 'pest-control',
    desc: 'Termites, rodents & seasonal infestations — rank when pests invade and panic sets in.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12z" /><path d="M12 12c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11z" /><path d="M12 12V2" /><path d="M12 12v10" /></svg> 
  },
  { 
    title: 'Cleaning Companies', 
    slug: 'cleaning',
    desc: 'Residential, commercial & deep cleans — win recurring bookings through local search.', 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#0A4488" strokeWidth="1.7"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M10 11v6" /><path d="M14 11v6" /></svg> 
  },
]

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/">Home</Link> / <span>Industries</span></div>
          <h1>Local visibility for <span className="hl">service businesses</span>.</h1>
          <p>If your customers search before they buy, we can put you in front of them — on Google and in AI answers. Here\'s where we go deep.</p>
          <div className="ph-cta">
            <a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a>
            <Link to="/services" className="btn btn-ghost">See How We Work</Link>
          </div>
        </div>
      </section>

      <section className="section"><div className="wrap">
        <SecHead eyebrow="Who we serve" title="Marketing experts for local & service businesses">
          We specialize so we can out-execute generalist agencies in your specific market.
        </SecHead>
        <div className="ind-detail">
          {industries.map((ind) => (
            <Link to={`/industries/${ind.slug}`} className="ind-card reveal" key={ind.title} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="ic">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
              <span className="mini">
                See our approach <span className="arr">↗</span>
              </span>
            </Link>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 34, color: 'var(--muted)', fontSize: 15 }}>
          Don\'t see your industry? If customers search for you, we can help. 
          <Link to="/contact" style={{ color: 'var(--orange)', fontWeight: 600 }}>Let\'s talk ↗</Link>
        </p>
      </div></section>

      <section className="section dark"><div className="wrap split">
        <div className="reveal">
          <span className="eyebrow">Why specialization wins</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.3vw,38px)', margin: '14px 0 14px' }}>
            We learn your market once — then compound it
          </h2>
          <p style={{ color: '#bdcce4', fontSize: 17 }}>
            Because we focus on a handful of industries, we already know the searches that convert, 
            the questions buyers ask AI, and the trust signals that move rankings. You skip the expensive learning curve.
          </p>
          <div className="shift-list" style={{ marginTop: 20 }}>
            <div className="shift-item">
              <span className="ic"><Check /></span>
              <div><h4>Faster wins</h4><p>Proven playbooks per industry, not guesswork.</p></div>
            </div>
            <div className="shift-item">
              <span className="ic"><Check /></span>
              <div><h4>Content that ranks & gets cited</h4><p>We know the questions your buyers and the AI engines ask.</p></div>
            </div>
          </div>
        </div>
        <div className="split-media reveal" style={{ background: 'linear-gradient(150deg,var(--g1),var(--g3))', borderColor: 'var(--line-dark)' }}>
          <span className="ph-tag" style={{ color: 'var(--muted-light)' }}>
            <svg viewBox="0 0 24 24" stroke="#A8BBD6"><path d="M3 3v18h18" /><path d="m7 14 3-4 3 2 5-6" /></svg>
            Image placeholder<br />industry results chart
          </span>
          <img className="media-img" src="/images/industries-results-chart.png" alt="Industry results growth chart" />
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <div className="cta-band reveal"><div className="wrapper">
          <h2>Ready to own your <span className="hl">local market?</span></h2>
          <p>Book a free audit and we\'ll show you where you stand against competitors on Google and in AI answers.</p>
          <div className="ph-cta">
            <a href="https://calendly.com/maaz-epicagencyllc/15min?month=2026-06" className="btn btn-primary">Book a Demo <span className="arr">↗</span></a>
            <Link to="/services" className="btn btn-ghost">See How We Work</Link>
          </div>
        </div></div>
      </div></section>
    </>
  )
}