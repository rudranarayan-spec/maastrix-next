import Navbar from '@/components/layout/Navbar'
import TeamHero from '@/components/team/TeamHero'
import TeamProfiles from '@/components/team/TeamProfile'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar isTransparent={true} />
      <TeamHero />
      <TeamProfiles />
    </div>
  )
}

export default page