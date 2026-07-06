import CompanyMap from '@/components/contact/CompanyMap'
import ContactHero from '@/components/contact/ContactHero'
import ContactSection from '@/components/contact/ContactSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <ContactSection/>
      <CompanyMap/>
    </div>
  )
}

export default page