import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn } from './Icons.jsx'

export default function Footer() {
  const industries = [
    { name: 'Plumbers', path: '/industries/plumbers' },
    { name: 'Electricians', path: '/industries/electricians' },
    { name: 'Roofers', path: '/industries/roofers' },
    { name: 'Heating & HVAC', path: '/industries/heating-and-hvac' },
    { name: 'Drainage companies', path: '/industries/drainage-companies' },
    { name: 'Landscapers', path: '/industries/landscapers' },
    { name: 'Builders', path: '/industries/builders' },
    { name: 'Locksmiths', path: '/industries/locksmiths' },
    { name: 'Pest control', path: '/industries/pest-control' },
    { name: 'Cleaning companies', path: '/industries/cleaning-companies' },
  ]

  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <Link to="/" className="brand" style={{ color: '#fff' }}>
              <img className="logo-real" src="/images/epic-logo-white.png" alt="Epic Agency" />
            </Link>
            <p>We increase your local presence on Google and your visibility across AI assistants — so you're the answer when customers search.</p>
            <div className="fsoc">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </div>

          <div className="f-col">
            <h5>INDUSTRIES</h5>
            {industries.map((industry) => (
              <Link key={industry.name} to={industry.path}>
                {industry.name}
              </Link>
            ))}
          </div>

          <div className="f-col">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/results">Results</Link>
            {/* Insights link hidden */}
            <Link to="/contact">Contact</Link>
          </div>
          <div className="f-col">
            <h5>Contact</h5>
            <a href="tel:+447544058348">+44 75440 58348</a>
            <a href="mailto:support@epicagency.co.uk"> support@epicagency.co.uk</a>

            <Link to="/contact">Free Visibility Audit</Link>
          </div>
        </div>
        <div className="f-bot">
          <span>© 2026 Epic Agency. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href="#">Sitemap</a></span>
        </div>
      </div>
    </footer>
  )}