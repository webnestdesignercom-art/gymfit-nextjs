import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
function Counter({
  end,
  suffix = '',
  duration = 2000,
}: {
  end: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-50px',
  })
  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
export function Stats() {
  const stats = [
    {
      value: 1500,
      suffix: '+',
      label: 'Active Members',
    },
    {
      value: 50,
      suffix: 'k',
      label: 'Pounds Lost',
    },
    {
      value: 120,
      suffix: '',
      label: 'Weekly Classes',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Commitment',
    },
  ]
  return (
    <section className="py-20 bg-gym-navy text-white relative z-10 border-y-8 border-gym-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.1,
              }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-6xl font-heading font-black italic text-stroke mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gym-orange font-montserrat font-bold uppercase tracking-widest text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
