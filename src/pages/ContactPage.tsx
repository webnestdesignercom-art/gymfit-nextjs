import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gym-navy dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none focus:border-gym-orange transition-colors font-body"

  return (
    <div className="min-h-screen bg-white dark:bg-gym-navy/30 transition-colors pt-24 pb-20">
      {/* Header */}
      <div className="bg-gym-navy py-20 px-4 text-center mb-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black italic uppercase text-white mb-3">
          Get In <span className="text-gym-orange">Touch</span>
        </motion.h1>
        <p className="text-gray-400 font-body max-w-xl mx-auto">
          Questions? Ready to start? We respond within 24 hours. No Excuses.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Info Cards */}
          <div className="space-y-5">
            {[
              { icon: MapPin, label: 'Location', value: '123 Iron Street\nMakati City, Metro Manila' },
              { icon: Phone, label: 'Phone', value: '+63 917 123 4567\n+63 917 765 4321' },
              { icon: Mail, label: 'Email', value: 'hello@gymfit.ph\nsupport@gymfit.ph' },
              { icon: Clock, label: 'Hours', value: 'Mon–Fri: 5AM – 11PM\nSat–Sun: 6AM – 10PM' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 p-5 bg-gray-50 dark:bg-white/5 border-l-4 border-gym-orange">
                <div className="p-2 bg-gym-orange text-white shrink-0 h-fit transform -skew-x-6">
                  <Icon size={18} className="skew-x-6" />
                </div>
                <div>
                  <p className="text-xs font-heading font-bold uppercase tracking-wider text-gym-orange mb-1">{label}</p>
                  <p className="text-sm font-body text-gray-700 dark:text-gray-300 whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-white/5 p-8 border border-gray-100 dark:border-white/10">
                <h2 className="text-3xl font-heading font-black italic uppercase text-gym-navy dark:text-white mb-6">
                  Send a <span className="text-gym-orange">Message</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider block mb-1">Full Name *</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Juan dela Cruz" className={inputClass} required />
                  </div>
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider block mb-1">Email *</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="juan@example.com" className={inputClass} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider block mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+63 912 345 6789" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider block mb-1">Subject</label>
                    <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                      className={inputClass + ' bg-gray-50 dark:bg-gym-navy'}>
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="programs">Programs</option>
                      <option value="corporate">Corporate Wellness</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider block mb-1">Message *</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..." rows={5}
                    className={inputClass + ' resize-none'} required />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-gym-navy dark:bg-gym-orange text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 text-lg">
                  <span className="block skew-x-12">Send Message →</span>
                </motion.button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-gym-navy p-12 text-center border-4 border-gym-orange">
                <CheckCircle size={60} className="text-gym-orange mx-auto mb-5" />
                <h3 className="text-4xl font-heading font-black italic uppercase text-white mb-3">
                  Message <span className="text-gym-orange">Sent!</span>
                </h3>
                <p className="text-gray-400 font-body mb-2">Thanks, <strong className="text-white">{form.name}</strong>!</p>
                <p className="text-gray-500 text-sm font-body mb-8">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border-2 border-gym-orange text-white font-heading font-bold uppercase tracking-wider hover:bg-gym-orange transition-colors">
                  Send Another
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}