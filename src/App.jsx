import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Industries from './pages/Industries.jsx'
import Results from './pages/Results.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Plumbing from './pages/trades/Plumbing.jsx'     
import Electricians from './pages/trades/Electricians'   
import Roofers from './pages/trades/Roofers.jsx'
import HeatingAndHVAC from './pages/trades/HeatingAndHVAC.jsx'
import DrainageCompanies from './pages/trades/DrainageCompanies.jsx'
import Landscapers from './pages/trades/Landscapers.jsx'
import Builders from './pages/trades/Builders.jsx'
import Locksmiths from './pages/trades/Locksmiths.jsx'
import PestControl from './pages/trades/PestControl.jsx'
import CleaningCompanies from './pages/trades/CleaningCompanies.jsx'

// Scroll to top on route change
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/plumbers" element={<Plumbing />} />
          <Route path="/industries/electricians" element={<Electricians />} />
          <Route path="/industries/Roofers" element={<Roofers />} />
          <Route path="/industries/heating-and-hvac" element={<HeatingAndHVAC />} />
          <Route path="/industries/drainage-companies" element={<DrainageCompanies />} />
          <Route path="/industries/landscapers" element={<Landscapers />} />
          <Route path="/industries/builders" element={<Builders />} />
          <Route path="/industries/locksmiths" element={<Locksmiths />} />
          <Route path="/industries/pest-control" element={<PestControl />} />
          <Route path="/industries/cleaning-companies" element={<CleaningCompanies />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Blog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}