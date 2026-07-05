import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const close = () => {
    setOpen(false)
    setIndustriesOpen(false)
  }

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
    <header id="hdr" className={open ? 'open' : ''}>
      <div className="wrap nav">
        <Link to="/" className="brand" onClick={close}>
          <img className="logo-real" src="/images/epic-logo.png" alt="Epic Agency" />
        </Link>
        <nav className="nav-links">
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          
          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <NavLink 
              to="/industries" 
              onClick={close}
              className="dropdown-trigger"
            >
              Industries
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ 
                  marginLeft: '4px', 
                  transform: industriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 1s ease'
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </NavLink>
            
            {industriesOpen && (
              <div className="dropdown-menu">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.path}
                    className="dropdown-item"
                    onClick={close}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <NavLink to="/results" onClick={close}>Results</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>
        <div className="nav-cta">
          <a href="tel:+447544058348" className="nav-phone btn-blue-border">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="var(--orange)">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +44 75440 58348
          </a>
          <Link to="/contact" className="btn btn-dark" onClick={close}>Start Getting Leads</Link>
        </div>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}