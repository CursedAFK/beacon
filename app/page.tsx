'use client'

import ContentSection from '@/components/Home/ContentSection'
import Header from '@/components/Home/Header'
import ImageSection from '@/components/Home/ImageSection'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='md:h-screen'>
      <Header isMobile={isMobile} />

      <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center md:h-full'>
        <ContentSection isMobile={isMobile} />

        <ImageSection isMobile={isMobile} />
      </div>
    </div>
  )
}
