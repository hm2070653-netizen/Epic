import { Link } from 'react-router-dom'

export default function Locksmiths() {
  return (
    <div className="plumbing-page">
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              LOCKSMITH SERVICES<br />
              <span className="orange-text">THAT KEEP YOU SECURE</span>
            </h1>
            <p className="hero-desc">
              Expert locksmith solutions for homes, businesses, and vehicles.
              We unlock, repair, and install locks with speed and precision.
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
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Police</span><span className="badge-small">Approved</span></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF756NA9snnxxuGaOk_CNo0T2ec4TZ6HnJcDtIeXtNWbSQKZcgGDPo9pRP&s=10" alt="Professional locksmith" />
          </div>
        </div>
      </section>

      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Locksmith Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/77806a62-36d9-4253-83f9-4add861d376f/97e5c76f-8f61-4ca8-8ee4-e3cbfab96e9d.webp" alt="Emergency Lockout" />
                
              </div>
              <h3>Emergency Lockout</h3>
              <p>Fast 24/7 emergency unlock services for homes, cars, and businesses.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUaj9BVOu6JYGGsXCf1Ok5IY38xgm30OYgvnf8ee7Mx6KVQeU7SjMy3SU&s=10" alt="Lock Replacement" />
                
              </div>
              <h3>Lock Replacement</h3>
              <p>High-security lock upgrades and replacements for doors and windows.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://lirp.cdn-website.com/0003b210/dms3rep/multi/opt/Keys+Cutting-640w.jpg" alt="Key Cutting" />
                
              </div>
              <h3>Key Cutting & Duplication</h3>
              <p>Precision key cutting for standard, high-security, and specialist keys.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj98TCShK_wLWLKBn1X787TTU0ULHlqtVKlMR8IZZ9QJ7SY7wXhtGDzzLC&s=10" alt="Security Systems" />
                
              </div>
              <h3>Security Systems</h3>
              <p>CCTV, alarm systems, and access control installation and maintenance.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04UBtuweoGZJD9dTM0xanRSKG0LOfZD4hJQyWMFtSU7z8P1dv-zsJdNsD&s=10" alt="Trusted locksmith" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Locksmith Experts</h2>
            <p className="why-desc">
              We deliver high-quality locksmith services with honesty, integrity, and professional workmanship that keeps your property safe and secure.
            </p>
            <ul className="why-list">
              <li><span className="check-circle">✓</span>24/7 Emergency Locksmith Service</li>
              <li><span className="check-circle">✓</span>Upfront Pricing, No Hidden Fees</li>
              <li><span className="check-circle">✓</span>Licensed & Insured Locksmiths</li>
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