import { Link } from 'react-router-dom'

export default function DrainageCompanies() {
  return (
    <div className="plumbing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              DRAINAGE SERVICES<br />
              <span className="orange-text">THAT FLOW SMOOTHLY</span>
            </h1>
            <p className="hero-desc">
              Expert drainage solutions for residential, commercial, and industrial properties.
              We clear blockages, repair drains, and prevent flooding with lasting results.
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
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">Flood</span>
                  <span className="badge-small">Prevention</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54rES8rcvDINrD9ctTfIdzL4G9gaZgODyI1ORVyKCHHbdzPvW1BX0eth_&s=10" alt="Professional drainage engineer" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Drainage Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBtBo7Q-XMw5kudDHk-FuBeZDyu3euMTBK09bjJ_PwXCR5EIheMMXJaY&s=10" alt="Drain Unblocking" />
                
            
              </div>
              <h3>Drain Unblocking</h3>
              <p>Fast and effective drain clearing for sinks, toilets, and main sewer lines.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://westwaleswaste.com/wp-content/uploads/2021/07/CCTV-1024x683-1.png" alt="CCTV Drain Surveys" />
                
              </div>
              <h3>CCTV Drain Surveys</h3>
              <p>High-tech camera inspections to diagnose drainage issues accurately.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMn2VU8cyhKj2AuUum13AwRlB0IGj9d0q00BQptj27hpz6b_ensu5PnVk&s=10" alt="Drain Repairs" />
                
                  
              </div>
              <h3>Drain Repairs & Relining</h3>
              <p>No-dig drain repairs and relining to fix cracks and leaks permanently.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLrQJd5JBHxj2wtSSc3QSQ6oxPKhcX0gvBKNs5jlxYVyAnMYY0ZnUp4E&s=10" alt="Septic Tank Services" />
                
              </div>
              <h3>Septic Tank Services</h3>
              <p>Installation, emptying, and maintenance of septic tanks and soakaways.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt7iJe6bdW3pznF4OdS72jt13kBOIETfgq3EM2tx4nAbDFAcEb5G0Rh8&s=10" alt="Trusted drainage specialist" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Drainage Experts</h2>
            <p className="why-desc">
              We deliver high-quality drainage services with honesty, integrity, and professional workmanship that keeps your property safe from water damage.
            </p>
            <ul className="why-list">
              <li>
                <span className="check-circle">✓</span>
                24/7 Emergency Drainage Service
              </li>
              <li>
                <span className="check-circle">✓</span>
                Upfront Pricing, No Hidden Fees
              </li>
              <li>
                <span className="check-circle">✓</span>
                Licensed & Insured Drainage Engineers
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