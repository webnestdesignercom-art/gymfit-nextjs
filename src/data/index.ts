// ── Programs ────────────────────────────────────────────────────────────────
export const programs = [
  {
    slug: 'hypertrophy',
    name: 'HYPERTROPHY',
    duration: '8 WEEKS',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    desc: 'Pure muscle building. Heavy lifts, high volume.',
    weeks: 8, sessions: '5x/week', level: 'Intermediate–Advanced',
    phases: [
      'Foundation (Wk 1–2): Establish baseline volume',
      'Overload (Wk 3–5): Progressive heavy lifts',
      'Peak (Wk 6–7): Max effort sets',
      'Deload (Wk 8): Recovery & adaptation',
    ],
    includes: ['Personalized macros plan', 'Weekly check-ins with coach', 'Access to app tracking', 'Video form reviews'],
  },
  {
    slug: 'endurance',
    name: 'ENDURANCE',
    duration: '6 WEEKS',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    desc: 'Cardio conditioning that pushes your limits.',
    weeks: 6, sessions: '4x/week', level: 'All Levels',
    phases: [
      'Base (Wk 1–2): Aerobic foundation',
      'Build (Wk 3–4): Lactate threshold work',
      'Peak (Wk 5): Race-pace intervals',
      'Taper (Wk 6): Active recovery',
    ],
    includes: ['VO2 max assessment', 'Custom cardio protocol', 'Nutrition timing guide', 'Recovery toolkit'],
  },
  {
    slug: 'powerlift',
    name: 'POWERLIFT',
    duration: '12 WEEKS',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    desc: 'Squat, Bench, Deadlift. Maximize your 1RM.',
    weeks: 12, sessions: '4x/week', level: 'Intermediate–Advanced',
    phases: [
      'Hypertrophy block (Wk 1–4)',
      'Strength block (Wk 5–8)',
      'Peaking block (Wk 9–11)',
      'Competition prep (Wk 12)',
    ],
    includes: ['1RM testing protocol', 'Belt & equipment guidance', 'Meet-day strategy', 'Video analysis of big 3'],
  },
  {
    slug: 'shred',
    name: 'SHRED',
    duration: '4 WEEKS',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    desc: 'High intensity fat loss and definition.',
    weeks: 4, sessions: '6x/week', level: 'All Levels',
    phases: [
      'Shock week (Wk 1): Metabolic confusion',
      'Burn phase (Wk 2–3): HIIT + resistance',
      'Reveal week (Wk 4): Water cut & peak',
    ],
    includes: ['Caloric deficit calculator', 'HIIT circuits library', 'Daily accountability check-in', 'Supplement stack guide'],
  },
]

// ── Trainers ─────────────────────────────────────────────────────────────────
export const trainers = [
  {
    slug: 'coach-rico',
    name: 'Coach Rico',
    role: 'Head Strength Coach',
    exp: '12 Years',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    specialties: ['Powerlifting', 'Strength & Conditioning', 'Olympic Lifting'],
    certifications: ['NSCA-CSCS', 'USAW Level 2', 'CPR/AED'],
    bio: 'Rico is a 3x national powerlifting champion who has trained over 500 athletes. His no-nonsense approach to strength building has helped clients add hundreds of pounds to their total.',
    classes: ['Strength Foundations', 'SHRED Circuit', 'Open Gym'],
    instagram: '@coachrico',
  },
  {
    slug: 'coach-ana',
    name: 'Coach Ana',
    role: 'HIIT & Endurance Specialist',
    exp: '8 Years',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    specialties: ['HIIT Training', 'Endurance', 'Fat Loss'],
    certifications: ['ACE-CPT', 'Precision Nutrition L1', 'TRX Certified'],
    bio: 'Ana competed at the national level in track & field before transitioning to coaching. Her high-energy classes produce dramatic body transformations in record time.',
    classes: ['HIIT Blast', 'Morning Cardio', 'Team HIIT', 'Endurance Run'],
    instagram: '@coachanafitness',
  },
  {
    slug: 'coach-migs',
    name: 'Coach Migs',
    role: 'Powerlifting Coach',
    exp: '10 Years',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    specialties: ['Powerlifting', 'Hypertrophy', 'Meet Prep'],
    certifications: ['IPF Technical Official', 'NSCA-CPT', 'FMS Level 2'],
    bio: 'Migs holds the regional record in the 93kg class deadlift. He specializes in taking intermediate lifters to their first competition and beyond.',
    classes: ['PowerLift', 'Hypertrophy', 'Powerlifting Meet Prep'],
    instagram: '@coachmigslifts',
  },
  {
    slug: 'coach-sam',
    name: 'Coach Sam',
    role: 'Mobility & Recovery Coach',
    exp: '6 Years',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    specialties: ['Mobility', 'Injury Prevention', 'Recovery Protocols'],
    certifications: ['FRC Mobility Specialist', 'NASM-CES', 'Yoga Alliance RYT-200'],
    bio: 'Sam bridges the gap between training hard and recovering smart. After recovering from a career-ending injury himself, he devoted his career to helping athletes move better and stay injury-free.',
    classes: ['Mobility & Recovery', 'Active Recovery', 'Mobility Flow'],
    instagram: '@coachsamfit',
  },
]

// ── Blog Posts ───────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: 'progressive-overload-guide',
    title: 'The Ultimate Guide to Progressive Overload',
    excerpt: 'If your lifts have been stuck for months, you\'re probably missing this one key principle that separates beginners from advanced athletes.',
    category: 'Training',
    author: 'Coach Rico',
    authorImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=100&auto=format&fit=crop',
    date: 'Feb 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    content: `Progressive overload is the single most important principle in strength training. Without it, your muscles have no reason to grow stronger or bigger.

**What is Progressive Overload?**

Progressive overload means gradually increasing the stress placed on your body during training. This can be done by increasing weight, reps, sets, or decreasing rest time.

**The 3 Main Methods:**

1. **Load Progression** — Add 2.5–5kg to the bar each week. Simple, effective, and the most common method.

2. **Volume Progression** — Add more reps or sets before increasing weight. Great for hypertrophy.

3. **Density Progression** — Do the same work in less time. Improves work capacity.

**Common Mistakes:**

- Jumping weight too fast
- Not tracking your lifts
- Ignoring deload weeks
- Neglecting sleep and nutrition

**The Bottom Line:**

Track every session. Add weight consistently. Eat enough. Sleep 8 hours. That's it. No excuses.`,
    tags: ['Strength', 'Muscle Building', 'Programming'],
  },
  {
    slug: 'hiit-fat-loss-science',
    title: 'The Science Behind HIIT and Fat Loss',
    excerpt: 'Why 20 minutes of HIIT can outperform 60 minutes of steady-state cardio — and the research that proves it.',
    category: 'Cardio',
    author: 'Coach Ana',
    authorImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=100&auto=format&fit=crop',
    date: 'Feb 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    content: `High-Intensity Interval Training (HIIT) has revolutionized how we think about cardio. But why does it work so well for fat loss?

**The EPOC Effect**

HIIT creates Excess Post-exercise Oxygen Consumption (EPOC) — your body continues burning calories at an elevated rate for up to 24 hours after your workout.

**Work-to-Rest Ratios**

The most effective HIIT protocols use:
- **1:1 ratio** — 30 sec on, 30 sec off (beginners)
- **2:1 ratio** — 40 sec on, 20 sec off (intermediate)
- **3:1 ratio** — 45 sec on, 15 sec off (advanced)

**How Many Times Per Week?**

2–3 sessions per week is optimal. More than that leads to overtraining and muscle loss.

**The Bottom Line:**

HIIT is a tool, not a religion. Combine it with strength training for the best body composition results.`,
    tags: ['Cardio', 'Fat Loss', 'Science'],
  },
  {
    slug: 'nutrition-for-powerlifters',
    title: 'Nutrition Strategies for Powerlifters',
    excerpt: 'What to eat, when to eat, and how to time your meals to maximize strength gains on the platform.',
    category: 'Nutrition',
    author: 'Coach Migs',
    authorImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop',
    date: 'Feb 12, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    content: `Powerlifting nutrition is simpler than most people think. Here's the no-fluff breakdown.

**Calories First**

You need to eat enough. Period. Most beginners undereat and then wonder why their squat isn't moving.

- **Gaining strength:** Bodyweight x 16–18 calories
- **Maintaining:** Bodyweight x 14–16 calories
- **Cutting for a meet:** Bodyweight x 12–14 calories

**Protein is Non-Negotiable**

Aim for 1.6–2.2g of protein per kg of bodyweight. Spread it across 4–5 meals.

**Carbs Are Your Friend**

Carbohydrates fuel your heaviest sets. Don't be afraid of rice, potatoes, and oats.

**Pre-Workout Meal**

2–3 hours before training: Protein + Carbs + minimal fat. Fat slows digestion.

**Meet Day Strategy**

- Weigh in → rehydrate immediately
- Eat simple carbs between attempts
- Avoid anything you haven't tested before`,
    tags: ['Nutrition', 'Powerlifting', 'Performance'],
  },
  {
    slug: 'recovery-mobility-importance',
    title: 'Why Recovery Is Your Secret Weapon',
    excerpt: 'The most overlooked aspect of training is what happens outside the gym. Here\'s how to optimize your recovery.',
    category: 'Recovery',
    author: 'Coach Sam',
    authorImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=100&auto=format&fit=crop',
    date: 'Feb 5, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    content: `You don't grow in the gym. You grow when you recover from it. Here's how to make the most of your time outside training.

**Sleep is the #1 Recovery Tool**

8–9 hours of quality sleep releases growth hormone and repairs muscle tissue. No supplement comes close.

**Active Recovery**

On rest days, do 20–30 minutes of:
- Light walking
- Mobility work
- Swimming
- Yoga

**Mobility Work**

Spend 10 minutes daily on the areas you train most:
- Hip flexors for squatters
- Thoracic spine for bench pressers
- Hamstrings for deadlifters

**Cold Exposure**

Cold showers or ice baths (10–15 min at 10–15°C) reduce inflammation and speed up recovery.

**The Bottom Line**

Train hard. Recover harder. The gym is just the stimulus — recovery is where the magic happens.`,
    tags: ['Recovery', 'Mobility', 'Sleep'],
  },
  {
    slug: 'beginner-gym-guide',
    title: '5 Things Every Gym Beginner Gets Wrong',
    excerpt: 'Save yourself months of wasted effort by avoiding these common beginner mistakes from day one.',
    category: 'Beginner',
    author: 'Coach Rico',
    authorImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=100&auto=format&fit=crop',
    date: 'Jan 28, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    content: `Starting your fitness journey is exciting — but most beginners make the same mistakes. Here's how to avoid them.

**1. Too Much Too Soon**

Starting with 6 days a week will burn you out in 2 weeks. Start with 3 days. Build the habit first.

**2. Skipping Compound Movements**

Squats, deadlifts, bench press, and rows should be your foundation. Don't skip them for machines.

**3. Not Tracking Progress**

If you're not tracking, you're guessing. Use a notebook or app to log every set and rep.

**4. Chasing the Pump Over Technique**

Good technique > heavy weight. Bad form is how injuries happen.

**5. Expecting Fast Results**

Meaningful body composition changes take 3–6 months of consistent effort. Be patient.

**The Cheat Code:**

Hire a coach for even just 1 month. The fundamentals you learn will save you years of trial and error.`,
    tags: ['Beginner', 'Tips', 'Training'],
  },
  {
    slug: 'womens-strength-training-myths',
    title: 'Debunking Women\'s Strength Training Myths',
    excerpt: 'No, lifting heavy will not make you bulky. Let\'s break down the top myths that keep women from the weights room.',
    category: 'Training',
    author: 'Coach Ana',
    authorImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=100&auto=format&fit=crop',
    date: 'Jan 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    content: `Women are still underrepresented in the weights room. Here's why that needs to change.

**Myth 1: "Lifting heavy makes women bulky"**

False. Women have 10–20x less testosterone than men. Building significant muscle mass requires years of dedicated effort and often specific nutrition protocols.

**Myth 2: "Cardio is better for fat loss"**

Strength training increases your resting metabolic rate. You burn more calories 24/7, not just during exercise.

**Myth 3: "Light weights, high reps for toning"**

"Toning" is just building muscle and losing fat. Heavy compound movements do this more efficiently.

**Myth 4: "Women need different exercises"**

Squats, deadlifts, and presses work for everyone. The principles of progressive overload are universal.

**The Truth:**

Strength training is the single best thing women can do for their long-term health — bone density, hormonal balance, metabolic health, and confidence.`,
    tags: ['Women', 'Strength', 'Myths'],
  },
]