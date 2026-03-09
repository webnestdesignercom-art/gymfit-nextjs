import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock} from 'lucide-react'
import { blogPosts } from '../data'

const categories = ['All', 'Training', 'Cardio', 'Nutrition', 'Recovery', 'Beginner']

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  const [featured, ...rest] = filtered

  return (
    <div className="min-h-screen bg-white dark:bg-gym-navy/30 transition-colors pt-24 pb-20">
      {/* Header */}
      <div className="bg-gym-navy py-20 px-4 text-center mb-12">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black italic uppercase text-white mb-3">
          The <span className="text-gym-orange">Blog</span>
        </motion.h1>
        <p className="text-gray-400 font-body max-w-xl mx-auto">
          Training knowledge, nutrition science, and mindset shifts. No fluff.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-heading font-bold uppercase tracking-wider transform -skew-x-6 transition-all ${
                activeCategory === cat ? 'bg-gym-orange text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/20'
              }`}>
              <span className="block skew-x-6">{cat}</span>
            </button>
          ))}
        </div>

        {featured && (
          <>
            {/* Featured Post */}
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate(`/blog/${featured.slug}`)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-10 cursor-pointer group overflow-hidden bg-gym-navy"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img src={featured.image} alt={featured.title}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase">
                  {featured.category}
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-gym-orange text-xs font-heading font-bold uppercase tracking-wider mb-3">Featured</span>
                <h2 className="text-2xl md:text-3xl font-heading font-black italic uppercase text-white mb-3 group-hover:text-gym-orange transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-400 font-body text-sm mb-5 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <img src={featured.authorImg} alt={featured.author} className="w-8 h-8 rounded-full object-cover" />
                  <span className="text-white text-sm font-body">{featured.author}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-500 text-xs flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Rest of Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <motion.div key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="cursor-pointer group bg-white dark:bg-white/5 overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-lg dark:hover:border-gym-orange transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-gym-orange text-white text-xs font-heading font-bold uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-black italic uppercase text-gym-navy dark:text-white mb-2 group-hover:text-gym-orange transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-body mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={post.authorImg} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{post.author}</span>
                      </div>
                      <span className="text-gray-400 text-xs flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-body">No posts in this category yet.</div>
        )}
      </div>
    </div>
  )
}