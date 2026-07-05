import './style.css'  
import { Link } from 'react-router-dom'

export default function Plumbing() {
  return (
    <div className="plumbing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              PLUMBING SOLUTIONS<br />
              <span className="orange-text">YOU CAN TRUST</span>
            </h1>
            <p className="hero-desc">
              Expert plumbing services for your home or business.
              We fix problems fast and keep everything flowing.
            </p>
            <div className="hero-buttons">
              <a href="tel:+447544058348" className="btn-phone">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +44 75440 58348
              </a>
              <Link to="/contact" className="btn-orange">Start Getting Leads</Link>
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
            </div>
          </div>
          <div className="hero-right">
            <img src="https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/1699943779857-WABF397IMIPDHLDQHEW7/Can+A+Handyman+Do+Plumbing.png" alt="Professional plumber" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Plumbing Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://osicomfort.com/wp-content/uploads/2022/08/Plumbing.jpg" alt="Leak Repair" />
                
              </div>
              <h3>Leak Repair</h3>
              <p>Fast detection and repair of all types of leaks.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://www.milwaukeetool.com/--/web-images/sc/baff42e25ecf459da3b41e3a82b1f666?hash=aa9e0b29435b87fef5611f7f2cd1e156&lang=en" alt="Drain Cleaning" />
                
              </div>
              <h3>Drain Cleaning</h3>
              <p>Remove blockages and restore smooth drainage.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://mustafaashkar.com/wp-content/uploads/2023/12/blog3.png" alt="Pipe Installation" />
                
              </div>
              <h3>Pipe Installation</h3>
              <p>Expert installation of pipes and fixtures.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://www.delcohvac.com/wp-content/uploads/2024/10/Glenolden-1.jpg" alt="Water Heater" />
                
              </div>
              <h3>Water Heater</h3>
              <p>Installation, repair and maintenance services.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://lirp.cdn-website.com/7d1e2469/dms3rep/multi/opt/Aurora+Plumbing+and+Electric+Supply-+Inc-Blog+Title+Plumbing+Pipe+Relining+What+You+Need+to+Know-640w.jpg" alt="Trusted plumber" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Plumbing Experts</h2>
            <p className="why-desc">
              We deliver high-quality plumbing solutions with honesty, integrity, and professional service you can rely on.
            </p>
            <ul className="why-list">
              <li>
                <span className="check-circle">✓</span>
                24/7 Emergency Plumbing
              </li>
              <li>
                <span className="check-circle">✓</span>
                Upfront Pricing
              </li>
              <li>
                <span className="check-circle">✓</span>
                Licensed & Insured Professionals
              </li>
              <li>
                <span className="check-circle">✓</span>
                100% Satisfaction Guarantee
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