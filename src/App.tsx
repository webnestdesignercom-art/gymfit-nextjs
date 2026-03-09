import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/navbar'
import { Footer } from './components/Footer'
import { TrialModal } from './components/TrialModal'
import { MembershipModal } from './components/MembershipModal'

// Pages
import { HomePage } from './pages/HomePage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ProgramDetailPage } from './pages/ProgramDetailPage'
import { PricingPage } from './pages/PricingPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'

export function App() {
  const [showTrial, setShowTrial] = useState(false)
  const [showMembership, setShowMembership] = useState(false)

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gym-navy transition-colors duration-300 selection:bg-gym-orange selection:text-white">
          <Navbar
            onTrial={() => setShowTrial(true)}
            onMembership={() => setShowMembership(true)}
          />

          <main>
            <Routes>
              <Route path="/" element={<HomePage onTrial={() => setShowTrial(true)} onMembership={() => setShowMembership(true)} />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/programs/:slug" element={<ProgramDetailPage onMembership={() => setShowMembership(true)} />} />
              <Route path="/pricing" element={<PricingPage onMembership={() => setShowMembership(true)} />} />
              <Route path="/about" element={<AboutPage onMembership={() => setShowMembership(true)} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Modals */}
          {showTrial && <TrialModal onClose={() => setShowTrial(false)} />}
          {showMembership && <MembershipModal onClose={() => setShowMembership(false)} />}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}