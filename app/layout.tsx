import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

type RootLayoutProps = {
  children: React.ReactNode
}

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Beacon',
  description:
    'We help formerly incarcerated people find their light again. Let us be a part of your success journey.'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`bg-[#FAF7F4] ${poppins.className}`}>{children}</body>
    </html>
  )
}
