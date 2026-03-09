import { Hero } from '../components/Hero'
import { WhatWeOffer } from '../components/WhatWeOffer'
import { TransformationSlider } from '../components/TransformationSlider'
import { ProgramsPreview } from '../components/ProgramsPreview'
import { Stats } from '../components/Stats'
import { ClassSchedule } from '../components/ClassSchedule'
import { TrainerProfiles } from '../components/TrainerProfiles'
import { BMICalculator } from '../components/BMICalculator'
import { FinalCTA } from '../components/FinalCTA'
import { BlogPreview } from '../components/BlogPreview'

interface HomePageProps {
  onTrial: () => void
  onMembership: () => void
}

export function HomePage({ onTrial, onMembership }: HomePageProps) {
  return (
    <>
      <Hero onTrial={onTrial} onMembership={onMembership} />
      <WhatWeOffer />
      <ClassSchedule />
      <TransformationSlider />
      <TrainerProfiles />
      <ProgramsPreview />
      <Stats />
      <BMICalculator />
      <BlogPreview />
      <FinalCTA onTrial={onMembership} />
    </>
  )
}