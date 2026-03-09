import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'

export function BlogPreview() {
  const navigate = useNavigate()
  const posts = blogPosts.slice(0, 3)

  return (
    <section className="py-24 bg-white dark:bg-gym-navy/30 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-black italic uppercase text-gym-navy dark:text-white">
              From The <span className="text-gym-orange">Blog</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 font-body mt-2">Training knowledge. No fluff.</p>
          </div>
          <button onClick={() => navigate('/blog')}
            className="hidden md:flex items-center gap-2 font-heading font-bold text-gym-navy dark:text-white hover:text-gym-orange transition-colors uppercase tracking-wider text-sm">
            View All Posts <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div key={post.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="cursor-pointer group bg-white dark:bg-white/5 overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:border-gym-orange transition-all"
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
                  <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}