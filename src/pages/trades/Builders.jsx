import { Link } from 'react-router-dom'

export default function Builders() {
  return (
    <div className="plumbing-page">
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              BUILDING SERVICES<br />
              <span className="orange-text">BUILT TO LAST</span>
            </h1>
            <p className="hero-desc">
              Expert building solutions for homes, extensions, and commercial projects.
              We bring your vision to life with quality craftsmanship and attention to detail.
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
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">24/7</span><span className="badge-small">Emergency Service</span></div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Licensed &</span><span className="badge-small">Insured</span></div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Satisfaction</span><span className="badge-small">Guaranteed</span></div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">NHBC</span><span className="badge-small">Registered</span></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=520&fit=crop" alt="Professional builder" />
          </div>
        </div>
      </section>

      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Building Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1o12gFlsWk3YPyLxYNvyDbWHT2b5-AOKvZaRscL66fk3cO1jxNT2QPCD&s=10" alt="Home Extensions" />
                
              </div>
              <h3>Home Extensions</h3>
              <p>Single and double-storey extensions to add space and value to your home.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqmA-1gjJoM9g-Oo-7l1sICj2KVPWZKhTIPLuXaPirFXFeWFe34wy6Ik&s=10" alt="Renovations" />
                
              </div>
              <h3>Property Renovations</h3>
              <p>Full property refurbishments from kitchens and bathrooms to complete overhauls.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-he_CYiR3uISUZ1cwudl83uau7BuIIrIROlI9WLPWFF1-u8Mun1xVy7&s=10" alt="New Builds" />
                
                
              </div>
              <h3>New Build Construction</h3>
              <p>Custom new builds from the ground up with premium materials and modern design.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkvsZt4nRhfyX8ZtcSj6f74Yzq7OyBGHxsStTUQCw2-1tQgOUD3XLybI&s=10" alt="Loft Conversions" />
                
              </div>
              <h3>Loft Conversions</h3>
              <p>Transform your unused loft into a stunning bedroom, office, or living space.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://cdn.prod.website-files.com/64410f25532729fc6f592c77/680d3ebfc5f382c83fca28f7_check-builders-reputation-credibility-bangalore.webp" alt="Trusted builder" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Building Experts</h2>
            <p className="why-desc">
              We deliver high-quality building services with honesty, integrity, and professional craftsmanship that turns your dream project into reality.
            </p>
            <ul className="why-list">
              <li><span className="check-circle">✓</span>24/7 Emergency Building Service</li>
              <li><span className="check-circle">✓</span>Upfront Pricing, No Hidden Fees</li>
              <li><span className="check-circle">✓</span>Licensed & Insured Builders</li>
              <li><span className="check-circle">✓</span>100% Customer Satisfaction</li>
            </ul>
          </div>
        </div>
      </section>

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