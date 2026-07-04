import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioShowcase from '@/components/portfolio/PortfolioShowcases'
import TechStackSlider from '@/components/TechStackSlider'
import React from 'react'

const page = () => {
  return (
    <div>
        <PortfolioHero/>
        <PortfolioShowcase/>
        <TechStackSlider/>
    </div>
  )
}

export default page