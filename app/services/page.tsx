import ServiceGridSection from '@/components/services/ServiceGridSection'
import ServiceHero from '@/components/services/ServiceHero'
import TechStackSlider from '@/components/TechStackSlider'
import React from 'react'

const page = () => {
  return (
    <div>
        <ServiceHero/>
        <ServiceGridSection/>
        <TechStackSlider/>
    </div>
  )
}

export default page