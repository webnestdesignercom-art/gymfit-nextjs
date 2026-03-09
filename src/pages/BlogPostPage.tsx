import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '../data'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.slug === slug)
  const related = blogPosts.filter(p => p.slug !== slug && p.category === post?.category).slice(0, 2)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black italic text-gym-navy dark:text-white mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/blog')} className="text-gym-orange font-bold uppercase">← Back to Blog</button>
        </div>
      </div>
    )
  }

  // Convert markdown-ish content to paragraphs
  const paragraphs = post.content.split('\n\n').map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <h3 key={i} className="text-2xl font-heading font-black italic uppercase text-gym-navy dark:text-white mt-8 mb-3">{p.replace(/\*\*/g, '')}</h3>
    }
    if (p.startsWith('1.') || p.startsWith('-')) {
      const items = p.split('\n').filter(Boolean)
      return (
        <ul key={i} className="space-y-2 my-4 pl-4">
          {items.map((item, j) => (
            <li key={j} className="text-gray-700 dark:text-gray-300 font-body flex gap-3">
              <span className="text-gym-orange shrink-0">→</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/^[\d\-\*\.]+\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gym-navy dark:text-white">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="text-gray-700 dark:text-gray-300 font-body leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gym-navy dark:text-white font-bold">$1</strong>') }} />
    )
  })

  return (
    <div className="min-h-screen bg-white dark:bg-gym-navy/30 transition-colors">
      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden bg-gym-navy pt-16">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gym-navy to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 max-w-4xl mx-auto w-full">
          <button onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-wider font-heading font-bold transition-colors mb-4 w-fit">
            <ArrowLeft size={16} /> Back to Blog
          </button>
          <div className="inline-block px-3 py-1 bg-gym-orange text-white text-xs font-heading font-bold uppercase mb-3 w-fit">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-black italic uppercase text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4 py-5 border-b border-gray-100 dark:border-white/10 mb-10">
          <div className="flex items-center gap-2">
            <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-heading font-bold text-gym-navy dark:text-white uppercase">{post.author}</span>
          </div>
          <span className="text-gray-400 flex items-center gap-1 text-sm"><Calendar size={14} /> {post.date}</span>
          <span className="text-gray-400 flex items-center gap-1 text-sm"><Clock size={14} /> {post.readTime}</span>
          <div className="flex gap-2 ml-auto">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 font-body">{tag}</span>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl prose-lg mb-16"
        >
          {paragraphs}
        </motion.article>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="border-t border-gray-100 dark:border-white/10 pt-12 pb-16">
            <h3 className="text-2xl font-heading font-black italic uppercase text-gym-navy dark:text-white mb-6">
              Related <span className="text-gym-orange">Posts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map(p => (
                <div key={p.slug} onClick={() => navigate(`/blog/${p.slug}`)}
                  className="cursor-pointer group flex gap-4 p-4 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <img src={p.image} alt={p.title} className="w-20 h-20 object-cover shrink-0" />
                  <div>
                    <p className="text-gym-orange text-xs font-heading font-bold uppercase mb-1">{p.category}</p>
                    <h4 className="font-heading font-black italic uppercase text-gym-navy dark:text-white text-sm group-hover:text-gym-orange transition-colors">{p.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{p.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}