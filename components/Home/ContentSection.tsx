import { AuthType } from '@/app/login/page'
import Link from 'next/link'
import { Button } from '../ui/button'

type ContentSectionProps = {
  isMobile: boolean
}

export default function ContentSection({ isMobile }: ContentSectionProps) {
  return (
    <section className='md:pl-60'>
      <div className='max-w-md'>
        <h2>Get Help and insight from mentors on Beacon.</h2>

        <p>
          We help formerly incarcerated people find their light again. Let us be
          a part of your success journey.
        </p>

        <div>
          <Button asChild className='border'>
            <Link href={`/login?authType=${AuthType.REGISTER}`}>
              {isMobile ? 'Create Account' : 'Join us'}
            </Link>
          </Button>

          <Button asChild variant='outline' className='md:hidden'>
            <Link href={`/login?authType=${AuthType.LOGIN}`}>Log in</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
