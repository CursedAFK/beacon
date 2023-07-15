import type { Metadata } from 'next'
import './globals.css'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Beacon',
  description:
    'We help formerly incarcerated people find their light again. Let us be a part of your success journey.'
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
