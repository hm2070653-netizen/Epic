import { Link } from 'react-router-dom'

export default function Roofers() {
  return (
    <div className="plumbing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              ROOFING SERVICES<br />
              <span className="orange-text">THAT PROTECT YOUR HOME</span>
            </h1>
            <p className="hero-desc">
              Expert roofing solutions for residential and commercial properties.
              We repair, replace, and install roofs that last for decades.
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">20+ Year</span>
                  <span className="badge-small">Warranty</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LRzxpnot2wSOQPlfp2U44UStVHxwjx2DobSY01BpFk3PUoIEL8IAXxI&s=10" alt="Professional roofer" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Roofing Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcm0UQWtSfBKW61bhUsf2W8pt8lufM7rxvvSiDr99-TSFKz9mISZSdSQQQ&s=10" alt="Roof Repairs" />
                
              </div>
              <h3>Roof Repairs</h3>
              <p>Fast and reliable roof repairs for leaks, storm damage, and wear.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzwNslIGna_rm2hmHoVuppnoQ5Tzg42LiUDK885jI85jT1ZlaYsOhvmn0&s=10" alt="Roof Replacement" />
                
              </div>
              <h3>Roof Replacement</h3>
              <p>Full roof replacement with premium materials and expert installation.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuSPEXQqM8uzDmMEsTaE5NT27YL-BV9EPYo2275O37pwVuNgSPR1t6KUX&s=10" alt="New Roof Installation" />
                
              </div>
              <h3>New Roof Installation</h3>
              <p>Custom roof installations for new builds and extensions.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6xki8ocrfIghWDwMvvlGk_NPpOePo2SkMrgrq3i2iudFyjaTSIX98P4-&s=10" alt="Guttering & Fascias" />
                
              </div>
              <h3>Guttering & Fascias</h3>
              <p>Complete guttering, soffits, and fascia board installation and repair.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjGWD7Dj99odG3dXsKId-01OCWv30qyO4NhQsxjanaaCx2OsTLI9t1GY&s=10" alt="Trusted roofer" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Roofing Experts</h2>
            <p className="why-desc">
              We deliver high-quality roofing services with honesty, integrity, and professional workmanship that protects your biggest investment.
            </p>
            <ul className="why-list">
              <li>
                <span className="check-circle">✓</span>
                24/7 Emergency Roofing Service
              </li>
              <li>
                <span className="check-circle">✓</span>
                Upfront Pricing, No Hidden Fees
              </li>
              <li>
                <span className="check-circle">✓</span>
                Licensed & Insured Roofers
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