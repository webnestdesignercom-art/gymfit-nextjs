import { Link } from 'react-router-dom'
import { Instagram, Youtube, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gym-navy dark:bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-3xl font-heading font-black italic uppercase text-white">
              GYM<span className="text-gym-orange">FIT</span>
            </Link>
            <p className="text-gray-400 text-sm mt-3 font-body leading-relaxed">
              No Excuses. Just Results. The most results-driven fitness community in the city.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Youtube, Facebook].map((Icon, i) => (
                <button key={i} className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-gym-orange hover:text-gym-orange transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-black italic uppercase text-white mb-4 tracking-wider">Programs</h4>
            <ul className="space-y-2">
              {['Hypertrophy', 'Endurance', 'PowerLift', 'Shred'].map(p => (
                <li key={p}>
                  <Link to={`/programs/${p.toLowerCase()}`} className="text-gray-400 hover:text-gym-orange text-sm font-body transition-colors">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-black italic uppercase text-white mb-4 tracking-wider">Company</h4>
            <ul className="space-y-2">
              {[['About Us', '/about'], ['Blog', '/blog'], ['Pricing', '/pricing'], ['Contact', '/contact']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-gym-orange text-sm font-body transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-black italic uppercase text-white mb-4 tracking-wider">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-body">
              <li>📍 123 Iron Street, Makati City</li>
              <li>📞 +63 917 123 4567</li>
              <li>✉️ hello@gymfit.ph</li>
              <li className="text-gym-orange font-bold">Open 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-body">
            © {new Date().getFullYear()} GymFit. All rights reserved.
          </p>
          <p className="font-heading font-bold uppercase tracking-widest text-xs text-gray-600">
            No Excuses. Just Results.
          </p>
        </div>
      </div>
    </footer>
  )
}