import { motion } from 'framer-motion'
import { Dumbbell, HeartPulse, Zap, Flame } from 'lucide-react'
export function FloatingIcons() {
  const icons = [
    {
      Icon: Dumbbell,
      top: '15%',
      left: '5%',
      delay: 0,
      size: 48,
    },
    {
      Icon: Zap,
      top: '25%',
      right: '10%',
      delay: 1,
      size: 64,
    },
    {
      Icon: HeartPulse,
      top: '60%',
      left: '8%',
      delay: 2,
      size: 56,
    },
    {
      Icon: Flame,
      top: '75%',
      right: '5%',
      delay: 0.5,
      size: 40,
    },
    {
      Icon: Dumbbell,
      top: '45%',
      right: '15%',
      delay: 1.5,
      size: 32,
    },
    {
      Icon: Zap,
      top: '85%',
      left: '15%',
      delay: 2.5,
      size: 50,
    },
  ]
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-[0.03]">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-gym-navy"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  )
}
