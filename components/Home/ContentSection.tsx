import { AuthType } from '@/app/login/page'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function ContentSection() {
  return (
    <section className='md:pl-48 pt-5 md:pt-0 px-6 md:px-0'>
      <div className='max-w-lg space-y-5'>
        <h2 className='text-3xl md:text-5xl md:leading-[4rem] font-semibold text-primaryDark'>
          Get Help and insight from mentors on Beacon.
        </h2>

        <p className='text-primaryDark text-xs leading-5 md:leading-6 md:text-base font-normal md:font-semibold'>
          We help formerly incarcerated people find their light again. Let us be
          a part of your success journey.
        </p>

        <div className='font-semibold flex items-center gap-4 md:block'>
          <Button
            asChild
            className='border-primaryNormal border bg-primaryNormal text-xs whitespace-nowrap md:text-base py-3 md:py-5 w-32 md:w-40 text-slate-50'
          >
            <Link href={`/login?authType=${AuthType.REGISTER}`}>
              <p className='hidden md:block'>Join us</p>

              <p className='md:hidden'>Create Account</p>
            </Link>
          </Button>

          <Button
            asChild
            variant='outline'
            className='md:hidden border-primaryNormal text-primaryNormal py-3 w-32 text-xs bg-transparent'
          >
            <Link href={`/login?authType=${AuthType.LOGIN}`}>Log in</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
