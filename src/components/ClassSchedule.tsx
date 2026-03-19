import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users} from 'lucide-react'
import { useEffect } from 'react'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const schedule: Record<string, { time: string; name: string; trainer: string; duration: string; intensity: 'Low' | 'Medium' | 'High'; spots: number }[]> = {
  Mon: [
    { time: '6:00 AM', name: 'HIIT Blast', trainer: 'Coach Ana', duration: '45 min', intensity: 'High', spots: 3 },
    { time: '9:00 AM', name: 'Strength Foundations', trainer: 'Coach Rico', duration: '60 min', intensity: 'Medium', spots: 8 },
    { time: '6:00 PM', name: 'PowerLift', trainer: 'Coach Migs', duration: '75 min', intensity: 'High', spots: 5 },
  ],
  Tue: [
    { time: '7:00 AM', name: 'Morning Cardio', trainer: 'Coach Ana', duration: '45 min', intensity: 'Medium', spots: 10 },
    { time: '12:00 PM', name: 'Core & Conditioning', trainer: 'Coach Rico', duration: '30 min', intensity: 'Medium', spots: 6 },
    { time: '7:00 PM', name: 'Hypertrophy', trainer: 'Coach Migs', duration: '60 min', intensity: 'High', spots: 4 },
  ],
  Wed: [
    { time: '6:00 AM', name: 'HIIT Blast', trainer: 'Coach Ana', duration: '45 min', intensity: 'High', spots: 2 },
    { time: '10:00 AM', name: 'Mobility & Recovery', trainer: 'Coach Rico', duration: '60 min', intensity: 'Low', spots: 12 },
    { time: '6:00 PM', name: 'Endurance Run', trainer: 'Coach Ana', duration: '60 min', intensity: 'Medium', spots: 7 },
  ],
  Thu: [
    { time: '7:00 AM', name: 'Strength Foundations', trainer: 'Coach Rico', duration: '60 min', intensity: 'Medium', spots: 9 },
    { time: '12:00 PM', name: 'HIIT Blast', trainer: 'Coach Ana', duration: '45 min', intensity: 'High', spots: 5 },
    { time: '7:00 PM', name: 'PowerLift', trainer: 'Coach Migs', duration: '75 min', intensity: 'High', spots: 3 },
  ],
  Fri: [
    { time: '6:00 AM', name: 'Morning Cardio', trainer: 'Coach Ana', duration: '45 min', intensity: 'Medium', spots: 8 },
    { time: '9:00 AM', name: 'Hypertrophy', trainer: 'Coach Migs', duration: '60 min', intensity: 'High', spots: 6 },
    { time: '6:00 PM', name: 'SHRED Circuit', trainer: 'Coach Rico', duration: '45 min', intensity: 'High', spots: 1 },
  ],
  Sat: [
    { time: '7:00 AM', name: 'Team HIIT', trainer: 'Coach Ana', duration: '60 min', intensity: 'High', spots: 0 },
    { time: '10:00 AM', name: 'Powerlifting Meet Prep', trainer: 'Coach Migs', duration: '90 min', intensity: 'High', spots: 4 },
    { time: '2:00 PM', name: 'Open Gym Session', trainer: 'Coach Rico', duration: '120 min', intensity: 'Low', spots: 15 },
  ],
  Sun: [
    { time: '8:00 AM', name: 'Active Recovery', trainer: 'Coach Ana', duration: '60 min', intensity: 'Low', spots: 10 },
    { time: '11:00 AM', name: 'Mobility Flow', trainer: 'Coach Rico', duration: '45 min', intensity: 'Low', spots: 12 },
  ],
}

const intensityColor = {
  Low: 'bg-green-500',
  Medium: 'bg-yellow-500',
  High: 'bg-gym-orange',
}

export function ClassSchedule() {
    const [activeDay, setActiveDay] = useState('Mon') 
    useEffect(() => {
      const today = new Date().toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)
  if (days.includes(today)) setActiveDay(today)
}, []) 

  const classes = schedule[activeDay] ?? []

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black italic uppercase text-gym-navy mb-3"
          >
            Class <span className="text-gym-orange">Schedule</span>
          </motion.h2>
          <p className="text-gray-600 font-body max-w-xl mx-auto">
            Book your spot before it's gone. Limited slots per class.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 justify-center flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2 font-heading font-black italic uppercase tracking-wider text-sm transition-all transform -skew-x-6 flex-none ${
                activeDay === day
                  ? 'bg-gym-orange text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <span className="block skew-x-6">{day}</span>
            </button>
          ))}
        </div>

        {/* Class Cards */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-gray-50 border-l-4 border-gym-orange p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-body">
                  <Clock size={14} />
                  <span>{cls.time}</span>
                  <span>·</span>
                  <span>{cls.duration}</span>
                </div>
                <span className={`text-white text-xs font-bold px-2 py-0.5 uppercase ${intensityColor[cls.intensity]}`}>
                  {cls.intensity}
                </span>
              </div>

              <h3 className="text-xl font-heading font-black italic uppercase text-gym-navy mb-1">{cls.name}</h3>
              <p className="text-gym-orange text-sm font-heading font-bold uppercase tracking-wider mb-4">{cls.trainer}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm font-body">
                  <Users size={14} className={cls.spots === 0 ? 'text-red-500' : 'text-gray-400'} />
                  <span className={cls.spots === 0 ? 'text-red-500 font-bold' : cls.spots <= 3 ? 'text-gym-orange font-bold' : 'text-gray-500'}>
                    {cls.spots === 0 ? 'Full' : `${cls.spots} spots left`}
                  </span>
                </div>
                <button
                  disabled={cls.spots === 0}
                  className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider transform -skew-x-6 transition-colors ${
                    cls.spots === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gym-navy text-white hover:bg-gym-orange'
                  }`}
                >
                  <span className="block skew-x-6">{cls.spots === 0 ? 'Full' : 'Book'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}