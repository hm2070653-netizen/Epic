import { Link } from 'react-router-dom'

export default function HeatingAndHVAC() {
  return (
    <div className="plumbing-page">
      {/* ===== HERO SECTION ===== */}
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              HEATING & HVAC<br />
              <span className="orange-text">COMFORT ALL YEAR ROUND</span>
            </h1>
            <p className="hero-desc">
              Expert heating and cooling solutions for your home or business.
              We keep you warm in winter and cool in summer with reliable HVAC systems.
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
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div className="badge-text">
                  <span className="badge-bold">NATE</span>
                  <span className="badge-small">Certified</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AGepcmJvj5voaTw3XQ46jUVNObho3-gxoOx-lybL1AgeUrL4z_LgVH8B&s=10" alt="Professional HVAC technician" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Heating & HVAC Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bet854cfq8hJpfTPsgQzm8bHa4nQ8or4ZNsfYt0a_w&s=10" alt="Heating Repairs" />
               
              </div>
              <h3>Heating Repairs</h3>
              <p>Fast and reliable heating repairs for boilers, furnaces, and heat pumps.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-LX4xUH6Tt3iDCus6ivrjGlcV078BciMbKeXCLue9d7_li0Eyigrd-drp&s=10" alt="AC Installation" />
                
                
              </div>
              <h3>AC Installation & Repair</h3>
              <p>Complete air conditioning installation, maintenance, and repair services.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqG8gkbDgdhx4TTPnLOl-YT7gucEYh_l8eJoQNzHFrQuWbDrT3iGT2NM-m&s=10" alt="HVAC Maintenance" />
                
              </div>
              <h3>HVAC Maintenance</h3>
              <p>Regular maintenance plans to keep your system running efficiently year-round.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9Ofn8rTLbSMHDhK3dfko1vVfihxjKZQlTn82qExJM48UyibN7IgWAEzL&s=10" alt="Ductwork & Ventilation" />
                
              </div>
              <h3>Ductwork & Ventilation</h3>
              <p>Professional duct cleaning, repair, and ventilation system installation.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhGPjezgQgw8BJ4yIEeWr2Yuo-EzKLgxQi-jP-m38bk3G6E6kxrnTyYc&s=10" alt="Trusted HVAC technician" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Heating & HVAC Experts</h2>
            <p className="why-desc">
              We deliver high-quality heating and cooling services with honesty, integrity, and professional workmanship that keeps your home comfortable in every season.
            </p>
            <ul className="why-list">
              <li>
                <span className="check-circle">✓</span>
                24/7 Emergency Heating & AC Service
              </li>
              <li>
                <span className="check-circle">✓</span>
                Upfront Pricing, No Hidden Fees
              </li>
              <li>
                <span className="check-circle">✓</span>
                Licensed & Insured HVAC Technicians
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