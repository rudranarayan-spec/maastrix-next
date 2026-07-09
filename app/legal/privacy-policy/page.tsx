import Navbar from '@/components/layout/Navbar'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar isTransparent={true} />
      <PrivacyPolicy />
    </div>
  )
}

export default page