import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface NavbarProps {
  onTrial: () => void
  onMembership: () => void
}

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Pricing',  to: '/pricing' },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
]

export function Navbar({ onTrial, onMembership }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gym-navy/95 dark:bg-gym-navy/98 backdrop-blur border-b border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="text-2xl font-heading font-black italic uppercase text-white hover:opacity-80 transition-opacity">
          GYM<span className="text-gym-orange">FIT</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-heading font-bold uppercase tracking-wider transition-colors ${
                isActive(link.to) ? 'text-gym-orange' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <motion.button
            onClick={onMembership}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 text-white font-heading font-bold uppercase tracking-wider text-sm transform -skew-x-12 border-2 border-white/30 hover:border-white transition-colors"
          >
            <span className="block skew-x-12">Join Now</span>
          </motion.button>

          <motion.button
            onClick={onTrial}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 text-white font-heading font-bold uppercase tracking-wider text-sm transform -skew-x-12 bg-gym-orange"
          >
            <span className="block skew-x-12">Free Trial</span>
          </motion.button>
        </div>

        {/* Mobile: Theme + Hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-gym-navy border-b-2 border-gym-orange px-6 py-4 flex flex-col gap-3"
          >
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-xl font-heading font-black italic uppercase py-2 border-b border-white/10 ${
                  isActive(link.to) ? 'text-gym-orange' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => { onMembership(); setMobileOpen(false) }}
                className="flex-1 py-3 text-white font-heading font-black uppercase tracking-wider border-2 border-white/30 transform -skew-x-6"
              >
                <span className="block skew-x-6">Join Now</span>
              </button>
              <button
                onClick={() => { onTrial(); setMobileOpen(false) }}
                className="flex-1 py-3 text-white font-heading font-black uppercase tracking-wider bg-gym-orange transform -skew-x-6"
              >
                <span className="block skew-x-6">Free Trial</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}