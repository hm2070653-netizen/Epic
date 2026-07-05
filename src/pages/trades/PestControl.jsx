import { Link } from 'react-router-dom'

export default function PestControl() {
  return (
    <div className="plumbing-page">
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              PEST CONTROL SERVICES<br />
              <span className="orange-text">THAT ELIMINATE PESTS</span>
            </h1>
            <p className="hero-desc">
              Expert pest control solutions for homes and businesses.
              We identify, treat, and prevent infestations with safe and effective methods.
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg> </div>
                
                <div className="badge-text"><span className="badge-bold">Satisfaction</span><span className="badge-small">Guaranteed</span></div>
              </div>
              <div className="badge">
                <div className="badge-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M7 13l3 3 7-7"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Safe &</span><span className="badge-small">Eco-Friendly</span></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIWj_qXhX4kJe45AylHmT2ECgcIbRcTS0yGuotj17xfeiFD6Es1x3cp4&s=10" alt="Professional pest control technician" />
          </div>
        </div>
      </section>

      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Pest Control Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OWnc9q9SfJSdBtixiXp78BIGBVeEaoPRFPN8ma3lX7r-irm90tvZo8YR&s=10" alt="Rodent Control" />
                
              </div>
              <h3>Rodent Control</h3>
              <p>Effective rat and mice removal with proofing to prevent future infestations.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KdTprRdK8PXmZKr56RDXF_ELuP6OmXVyVkV-9giVcah_KhxvkJatal8&s=10" alt="Insect Control" />
                
              </div>
              <h3>Insect Control</h3>
              <p>Ants, wasps, bed bugs, fleas, and cockroach treatment and removal.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTI8vUEsy4H4p5uANCweoCX2zPUlMk6vZvhe8_1TyfE9VzV_1oBEDWiCM&s=10" alt="Bird Proofing" />
                
              </div>
              <h3>Bird Proofing</h3>
              <p>Humane bird control with netting, spikes, and deterrent installations.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvyJbUcKV4RB66Mr6y2bcGLeY9WYVPG2B1pJhU_UBW3y4AprXcUiFfSM&s=10" alt="Pest Prevention" />
               
              </div>
              <h3>Pest Prevention Plans</h3>
              <p>Regular inspections and treatments to keep your property pest-free year-round.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyqzHpd__cBAN5gqhJcxAnMxMUjDhYUNZH0a8TRjJzuMf9FKbQEQ-sji4&s=10" alt="Trusted pest control specialist" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Pest Control Experts</h2>
            <p className="why-desc">
              We deliver high-quality pest control services with honesty, integrity, and professional workmanship that protects your home and health.
            </p>
            <ul className="why-list">
              <li><span className="check-circle">✓</span>24/7 Emergency Pest Control Service</li>
              <li><span className="check-circle">✓</span>Upfront Pricing, No Hidden Fees</li>
              <li><span className="check-circle">✓</span>Licensed & Insured Pest Controllers</li>
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