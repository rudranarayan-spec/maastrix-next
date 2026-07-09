import React from 'react'
import TermsAndConditions from '../../../components/legal/TermsAndConditions'
import Navbar from '@/components/layout/Navbar'

const page = () => {
  return (
    <div>
      <Navbar isTransparent={true} />
      <TermsAndConditions />
    </div>
  )
}

export default page