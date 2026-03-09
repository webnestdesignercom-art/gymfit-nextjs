import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Unit = 'metric' | 'imperial'

interface BMIResult {
  bmi: number
  category: string
  color: string
  tip: string
  program: string
}

function getBMIResult(bmi: number): BMIResult {
  if (bmi < 18.5) return {
    bmi, category: 'Underweight', color: '#60A5FA',
    tip: 'Focus on building lean muscle mass with proper nutrition and strength training.',
    program: 'HYPERTROPHY',
  }
  if (bmi < 25) return {
    bmi, category: 'Normal Weight', color: '#34D399',
    tip: 'Great foundation! Level up your performance with strength or endurance training.',
    program: 'POWERLIFT',
  }
  if (bmi < 30) return {
    bmi, category: 'Overweight', color: '#FBBF24',
    tip: 'A mix of cardio and resistance training will accelerate your fat loss journey.',
    program: 'SHRED',
  }
  return {
    bmi, category: 'Obese', color: '#F97316',
    tip: 'Start with low-impact cardio and gradually build intensity. Every step counts.',
    program: 'ENDURANCE',
  }
}

export function BMICalculator() {
  const [unit, setUnit] = useState<Unit>('metric')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [result, setResult] = useState<BMIResult | null>(null)
  const [age, setAge] = useState('')

  const calculate = () => {
    let h = 0, w = 0

    if (unit === 'metric') {
      h = parseFloat(height) / 100 // cm to m
      w = parseFloat(weight)
    } else {
      const ft = parseFloat(heightFt) || 0
      const inches = parseFloat(heightIn) || 0
      h = (ft * 12 + inches) * 0.0254 // to meters
      w = parseFloat(weight) * 0.453592 // lbs to kg
    }

    if (!h || !w || h <= 0 || w <= 0) return
    const bmi = w / (h * h)
    setResult(getBMIResult(Math.round(bmi * 10) / 10))
  }

  const reset = () => {
    setResult(null)
    setHeight('')
    setWeight('')
    setHeightFt('')
    setHeightIn('')
    setAge('')
  }

  const needleAngle = result ? Math.min(Math.max(((result.bmi - 10) / 30) * 180 - 90, -90), 90) : -90

  return (
    <section className="py-24 bg-gray-50 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black italic uppercase text-gym-navy mb-3"
          >
            BMI <span className="text-gym-orange">Calculator</span>
          </motion.h2>
          <p className="text-gray-600 font-body max-w-xl mx-auto">
            Know your numbers. Find the right program for your body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Input Side */}
          <div className="bg-white p-8 border-l-4 border-gym-orange shadow-sm">
            {/* Unit Toggle */}
            <div className="flex gap-2 mb-6">
              {(['metric', 'imperial'] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => { setUnit(u); reset() }}
                  className={`flex-1 py-2 text-sm font-heading font-bold uppercase tracking-wider transform -skew-x-6 transition-colors ${unit === u ? 'bg-gym-orange text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  <span className="block skew-x-6">{u === 'metric' ? 'Metric (cm/kg)' : 'Imperial (ft/lbs)'}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* Height */}
              {unit === 'metric' ? (
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    placeholder="e.g. 175"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gym-navy outline-none focus:border-gym-orange transition-colors font-body text-lg"
                  />
                </div>
              ) : (
                <div>
                  <label className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Height</label>
                  <div className="flex gap-3">
                    <input type="number" value={heightFt} onChange={e => setHeightFt(e.target.value)}
                      placeholder="ft" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gym-navy outline-none focus:border-gym-orange transition-colors font-body text-lg" />
                    <input type="number" value={heightIn} onChange={e => setHeightIn(e.target.value)}
                      placeholder="in" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gym-navy outline-none focus:border-gym-orange transition-colors font-body text-lg" />
                  </div>
                </div>
              )}

              {/* Weight */}
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider block mb-1">
                  Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 155'}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gym-navy outline-none focus:border-gym-orange transition-colors font-body text-lg"
                />
              </div>

              {/* Age (optional) */}
              <div>
                <label className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Age (optional)</label>
                <input
                  type="number"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  placeholder="e.g. 28"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gym-navy outline-none focus:border-gym-orange transition-colors font-body text-lg"
                />
              </div>

              <motion.button
                onClick={calculate}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-gym-navy text-white font-heading font-black uppercase tracking-widest transform -skew-x-12 text-lg mt-2"
              >
                <span className="block skew-x-12">Calculate BMI →</span>
              </motion.button>
            </div>
          </div>

          {/* Result Side */}
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full min-h-[300px] border-2 border-dashed border-gray-200 p-8 text-center"
              >
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-gray-400 font-body">Enter your measurements to see your BMI and recommended program.</p>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-gym-navy p-8 text-white"
              >
                {/* Gauge */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-20">
                    <svg viewBox="0 0 200 100" className="w-full">
                      {/* Background arc */}
                      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="16" strokeLinecap="round" />
                      {/* Color segments */}
                      <path d="M 10 100 A 90 90 0 0 1 55 27" fill="none" stroke="#60A5FA" strokeWidth="16" strokeLinecap="round" opacity="0.7" />
                      <path d="M 55 27 A 90 90 0 0 1 100 10" fill="none" stroke="#34D399" strokeWidth="16" strokeLinecap="round" opacity="0.7" />
                      <path d="M 100 10 A 90 90 0 0 1 145 27" fill="none" stroke="#FBBF24" strokeWidth="16" strokeLinecap="round" opacity="0.7" />
                      <path d="M 145 27 A 90 90 0 0 1 190 100" fill="none" stroke="#F97316" strokeWidth="16" strokeLinecap="round" opacity="0.7" />
                      {/* Needle */}
                      <g transform={`rotate(${needleAngle}, 100, 100)`}>
                        <line x1="100" y1="100" x2="100" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="100" cy="100" r="6" fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* BMI Number */}
                <div className="text-center mb-6">
                  <div className="text-7xl font-heading font-black italic" style={{ color: result.color }}>
                    {result.bmi}
                  </div>
                  <div className="text-xl font-heading font-bold uppercase tracking-wider mt-1" style={{ color: result.color }}>
                    {result.category}
                  </div>
                </div>

                {/* BMI Scale */}
                <div className="grid grid-cols-4 gap-1 mb-6 text-center text-xs">
                  {[['<18.5', 'Under', '#60A5FA'], ['18.5–24.9', 'Normal', '#34D399'], ['25–29.9', 'Over', '#FBBF24'], ['30+', 'Obese', '#F97316']].map(([range, label, color]) => (
                    <div key={label} className="p-2 bg-white/5 rounded">
                      <div className="font-bold font-heading" style={{ color }}>{label}</div>
                      <div className="text-gray-500 font-body">{range}</div>
                    </div>
                  ))}
                </div>

                {/* Tip */}
                <div className="bg-white/5 p-4 mb-5 border-l-2 border-gym-orange">
                  <p className="text-gray-300 text-sm font-body leading-relaxed">{result.tip}</p>
                </div>

                {/* Recommended Program */}
                <div className="text-center">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Recommended Program</p>
                  <div className="inline-block px-4 py-2 bg-gym-orange font-heading font-black italic uppercase text-white text-lg transform -skew-x-6">
                    <span className="block skew-x-6">{result.program}</span>
                  </div>
                </div>

                <button onClick={reset} className="w-full mt-5 py-2 border border-white/20 text-white/50 text-xs font-heading font-bold uppercase tracking-wider hover:border-white/50 hover:text-white/80 transition-colors">
                  Recalculate
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}