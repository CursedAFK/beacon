'use client'

import Header from '@/components/Home/Header'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div>
      <Header isMobile={isMobile} />

      <div></div>
    </div>
  )
}
