import { Link } from 'react-router-dom'

export default function Electrician() {
  return (
    <div className="plumbing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              ELECTRICAL SERVICES<br />
              <span className="orange-text">YOU CAN TRUST</span>
            </h1>
            <p className="hero-desc">
              Expert electrical solutions for your home or business.
              We fix problems fast and keep your power safe.
            </p>
            <div className="hero-buttons">
              <a href="tel:+447544058348" className="btn-phone">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +44 75440 58348
              </a>
              <Link to="/contact" className="btn-orange">Get Free Quote</Link>
            </div>
            <div className="hero-badges">
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">24/7</span>
                  <span className="badge-small">Emergency Service</span>
                </div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">Licensed &</span>
                  <span className="badge-small">Insured</span>
                </div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">Satisfaction</span>
                  <span className="badge-small">Guaranteed</span>
                </div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">Safe & Code</span>
                  <span className="badge-small">Compliant</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://www.qanmos.com/wp-content/uploads/2024/09/electrica1.jpg" alt="Professional electrician" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Electrical Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WxgwV7rF71HzX9-QiS8sloDqE1wcWurvge9YnWmtH-D62neSLzr8APg&s=10" alt="Electrical Repairs" />
              </div>
              <h3>Electrical Repairs</h3>
              <p>Fast and reliable repair services for all electrical issues.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjii5cCZ8t4xAIVAvVlKrZAGO-2wUM-Qb1RvZNK0s7ICCGOkC1mhwHTKDC&s=10" alt="Lighting Solutions" />
              </div>
              <h3>Lighting Solutions</h3>
              <p>Indoor, outdoor, and LED lighting solutions to brighten your space.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://expertelectric.ca/wp-content/uploads/Professional-Wiring-and-Rewiring-for-Energy-Efficiency-image-003.jpg" alt="Wiring & Rewiring" />
              </div>
              <h3>Wiring & Rewiring</h3>
              <p>Safe and efficient wiring and rewiring services.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://mgmotor.scene7.com/is/image/mgmotor/evpedia-bn-0060?$mg-rgb-4k-image-responsive$" alt="EV Charging" />
              </div>
              <h3>EV Charging</h3>
              <p>Home and commercial EV charger installation.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpL3YNgYo-JFtPSxn1IFygHIlv3pEtrS-zhQR_wI8GcLKoR7MtVg-vAQw&s=10" alt="Trusted electrician" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Electrical Experts</h2>
            <p className="why-desc">
              We deliver high-quality electrical services with honesty, integrity, and professional workmanship you can rely on.
            </p>
            <ul className="why-list">
              <li>
                <span className="check-circle">✓</span>
                24/7 Emergency Electrical Service
              </li>
              <li>
                <span className="check-circle">✓</span>
                Upfront Pricing, No Hidden Fees
              </li>
              <li>
                <span className="check-circle">✓</span>
                Licensed & Insured Electricians
              </li>
              <li>
                <span className="check-circle">✓</span>
                100% Customer Satisfaction
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="plumbing-cta">
        <div className="cta-wrap">
          <h2>Ready to own your <span className="orange-text">local market?</span></h2>
          <p>Book a free audit and we'll show you where you stand against competitors on Google and in AI answers.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-orange">Book a Demo ↗</Link>
            <Link to="/services" className="btn-outline">See How We Work</Link>
          </div>
        </div>
      </section>
    </div>
  )
}