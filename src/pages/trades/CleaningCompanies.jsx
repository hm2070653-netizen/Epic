import { Link } from 'react-router-dom'

export default function CleaningCompanies() {
  return (
    <div className="plumbing-page">
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              CLEANING SERVICES<br />
              <span className="orange-text">THAT SPARKLE & SHINE</span>
            </h1>
            <p className="hero-desc">
              Expert cleaning solutions for homes, offices, and commercial spaces.
              We deliver spotless results with eco-friendly products and trained professionals.
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M7 13l3 3 7-7"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Eco-Friendly</span><span className="badge-small">Products</span></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B1ZSHsxg3kbTK2N9RbhlBIRTAFDngnF7W1nZ8iFAQMJwnPH0w_xFP-s&s=10" alt="Professional cleaner" />
          </div>
        </div>
      </section>

      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Cleaning Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop" alt="Domestic Cleaning" />
                
                
              </div>
              <h3>Domestic Cleaning</h3>
              <p>Regular and one-off house cleaning services tailored to your schedule.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbP31KaQA1uXWpLgmLnZfISnrE2y7EDBPk1rhvJbjz1BDGsMo8BAgmX5Y-&s=10" alt="Commercial Cleaning" />
                </div>
              <h3>Commercial Cleaning</h3>
              <p>Office, retail, and industrial cleaning with flexible out-of-hours schedules.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLY6G_3lJKH4uhoRZqt25BgwdYRAKXRjDJoPWs61UiKc8hV1cIEG0-2Q_&s=10" alt="Deep Cleaning" />
                
              </div>
              <h3>Deep & End of Tenancy</h3>
              <p>Thorough deep cleans and move-in/move-out cleaning for landlords and tenants.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZYVcIAUYVUnkAEHWBG1hcX4JpkvbH9cY9JltzDFuVA9p_2MiayAzRUdd&s=10" alt="Carpet & Upholstery" />
                 <div>
                </div>
              </div>
              <h3>Carpet & Upholstery</h3>
              <p>Professional steam cleaning for carpets, sofas, and upholstery restoration.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://images.squarespace-cdn.com/content/v1/611b3a86fb6a226aadffcf79/189e3263-a711-40ca-aaac-1d4d49e29fba/Professional+Cleaning+Services.png" alt="Trusted cleaning professional" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Cleaning Experts</h2>
            <p className="why-desc">
              We deliver high-quality cleaning services with honesty, integrity, and professional workmanship that leaves every space spotless and fresh.
            </p>
            <ul className="why-list">
              <li><span className="check-circle">✓</span>24/7 Emergency Cleaning Service</li>
              <li><span className="check-circle">✓</span>Upfront Pricing, No Hidden Fees</li>
              <li><span className="check-circle">✓</span>Licensed & Insured Cleaners</li>
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