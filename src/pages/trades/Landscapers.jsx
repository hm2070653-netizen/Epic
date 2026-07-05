import { Link } from 'react-router-dom'

export default function Landscapers() {
  return (
    <div className="plumbing-page">
      <section className="plumbing-hero">
        <div className="hero-wrap">
          <div className="hero-left">
            <span className="hero-tag">FAST. RELIABLE. PROFESSIONAL.</span>
            <h1>
              LANDSCAPING SERVICES<br />
              <span className="orange-text">THAT TRANSFORM OUTDOORS</span>
            </h1>
            <p className="hero-desc">
              Expert landscaping solutions for gardens, lawns, and outdoor spaces.
              We design, build, and maintain beautiful landscapes that impress.
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
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  </svg>
                </div>
                <div className="badge-text"><span className="badge-bold">Bespoke</span><span className="badge-small">Design</span></div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQmaeNwmrG6gLQUc-6kqVBW8woeHwKIluFo4UGYyEcyplvm0nfEcIcfC8&s=10" alt="Professional landscaper" />
          </div>
        </div>
      </section>

      <section className="plumbing-services">
        <div className="services-wrap">
          <span className="section-label">OUR SERVICES</span>
          <h2>Complete Landscaping Solutions</h2>
          <div className="services-underline"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsZWpti5FUJwaNKk-SWFH2duWgKYX7DetAZf17ZkdWGBPEtJu4GQq0jh6&s=10" alt="Garden Design" />
                
              </div>
              <h3>Garden Design</h3>
              <p>Custom garden designs tailored to your style, space, and budget.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszvGxQxNX05i_A9jkhKBiMG_TKBbYmOPgKEaYRqrXJJHWssVlQQT86gVg&s=10" alt="Lawn Care" />
                
              </div>
              <h3>Lawn Care & Maintenance</h3>
              <p>Regular mowing, fertilising, and turf laying for a lush green lawn.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQZ_VlBpplSvdgqeWC1kdYKUZp8y2Y1RgC68p656UxCWfl9UY0VmS0Mb_&s=10" alt="Paving & Patios" />
                
              </div>
              <h3>Paving & Patios</h3>
              <p>Stylish patios, driveways, and pathways built with premium materials.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
            <div className="service-card">
              <div className="service-img-wrap">
                <img src="https://images.squarespace-cdn.com/content/v1/5d387bba609d5700010c823f/1570013200572-2X04TD5SC23COQE1NU6F/tree+trimming+service" alt="Tree Surgery" />
                
              </div>
              <h3>Tree Surgery & Pruning</h3>
              <p>Safe tree removal, pruning, and hedge trimming by certified arborists.</p>
              <a href="#" className="learn-more">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="plumbing-why">
        <div className="why-wrap">
          <div className="why-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTGoHJy87sMI5YtY07GKj-28FCjtG0R7otBpfrdY8IQZwKUMS8p_guEbg&s=10" alt="Trusted landscaper" />
          </div>
          <div className="why-right">
            <span className="section-label">WHY CHOOSE US</span>
            <h2>Your Trusted Landscaping Experts</h2>
            <p className="why-desc">
              We deliver high-quality landscaping services with creativity, integrity, and professional workmanship that transforms your outdoor space into a stunning retreat.
            </p>
            <ul className="why-list">
              <li><span className="check-circle">✓</span>24/7 Emergency Landscaping Service</li>
              <li><span className="check-circle">✓</span>Upfront Pricing, No Hidden Fees</li>
              <li><span className="check-circle">✓</span>Licensed & Insured Landscapers</li>
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