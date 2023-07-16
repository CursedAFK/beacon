'use client'

import Header from '@/components/Home/Header'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='container mx-auto'>
      <Header isMobile={isMobile} />
    </div>
  )
}
