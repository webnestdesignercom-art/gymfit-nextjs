import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'
export function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleDrag = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
    if (!containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    let clientX
    if ('touches' in e) {
      clientX = e.touches[0].clientX
    } else {
      clientX = (e as React.MouseEvent).clientX
    }
    const x = clientX - containerRect.left
    const percentage = Math.max(
      0,
      Math.min(100, (x / containerRect.width) * 100),
    )
    setSliderPosition(percentage)
  }
  return (
    <section className="py-24 bg-gym-navy text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
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
            className="text-4xl md:text-6xl font-heading font-black italic mb-4"
          >
            REAL <span className="text-gym-orange">RESULTS</span>
          </motion.h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">
            Slide to see the transformation. 12 weeks of dedication, zero
            excuses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gray-900 overflow-hidden cursor-ew-resize select-none border-4 border-white/10"
            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
            onTouchMove={handleDrag}
            onClick={handleDrag}
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop"
                alt="Before transformation"
                className="w-full h-full object-cover grayscale opacity-60"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-black/70 px-4 py-2 font-heading font-bold italic uppercase tracking-wider text-sm">
                Day 1
              </div>
            </div>

            {/* After Image (Clipped) */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop"
                alt="After transformation"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-gym-orange px-4 py-2 font-heading font-bold italic uppercase tracking-wider text-sm text-white">
                Day 84
              </div>
            </div>

            {/* Slider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{
                left: `${sliderPosition}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gym-navy">
                <MoveHorizontal size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
