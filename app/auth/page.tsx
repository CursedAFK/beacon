'use client'

import FormSection from '@/components/Auth/FormSection'
import HeroSection from '@/components/Auth/HeroSection'
import DesktopLogo from '@/components/Logo/DesktopLogo'
import MobileLogo from '@/components/Logo/MobileLogo'
import useResponsive from '@/utils/useResponsive'

export default function Auth() {
  const isMobile = useResponsive()

  return (
    <div className='md:px-48'>
      <header
        className={`md:pt-12 px-5 md:px-0 pt-6 pb-6 md:pb-0 ${
          isMobile ? 'bg-white shadow-sm' : ''
        }`}
      >
        {isMobile ? <MobileLogo /> : <DesktopLogo />}
      </header>

      <div className='flex flex-col-reverse md:flex-row items-center md:justify-between md:pt-14'>
        <FormSection />

        <HeroSection />
      </div>
    </div>
  )
}
