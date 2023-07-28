'use client'

import FormSection from '@/components/Auth/FormSection'
import HeroSection from '@/components/Auth/HeroSection'
import DesktopLogo from '@/components/Icons/DesktopLogo'
import MobileLogo from '@/components/Icons/MobileLogo'
import useResponsive from '@/utils/useResponsive'

const Auth = () => {
  const isMobile = useResponsive()

  return (
    <div className='md:px-36'>
      <header
        className={`md:pt-12 px-5 md:px-0 pt-6 pb-6 md:pb-0 ${
          isMobile ? 'bg-white shadow-sm' : ''
        }`}
      >
        {isMobile ? <MobileLogo /> : <DesktopLogo />}
      </header>

      <div className='flex flex-col-reverse md:flex-row md:justify-between md:pt-14 md:pb-36'>
        <FormSection />

        <HeroSection />
      </div>
    </div>
  )
}

export default Auth
