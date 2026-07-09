import React from 'react'
import TermsAndConditions from '../../../components/legal/TermsAndConditions'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const page = () => {
  return (
    <div>
      <Navbar isTransparent={true} />
      <TermsAndConditions />
      <Footer/>
    </div>
  )
}

export default page