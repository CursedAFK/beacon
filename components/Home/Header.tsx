import { AuthType } from '@/app/login/page'
import Link from 'next/link'
import DesktopLogo from '../Logo/DesktopLogo'
import MobileLogo from '../Logo/MobileLogo'
import { Button } from '../ui/button'

type HeaderProps = {
  isMobile: boolean
}

export default function Header({ isMobile }: HeaderProps) {
  return (
    <header className='flex items-center justify-between py-3 md:py-4 px-3 md:px-0'>
      {isMobile ? <MobileLogo /> : <DesktopLogo />}

      <div className='md:flex gap-5 items-center'>
        <Button
          variant='outline'
          asChild
          className='border-primaryNormal text-primaryNormal font-semibold py-5 w-40 md:inline-flex hidden'
        >
          <Link href={`/login?authType=${AuthType.LOGIN}`}>Log In</Link>
        </Button>

        <Button
          asChild
          className='border-primaryNormal border bg-primaryNormal text-xs whitespace-nowrap md:text-base py-3 md:py-5 w-28 md:w-40 text-slate-50 font-semibold'
        >
          <Link href={`/login?authType=${AuthType.REGISTER}`}>
            Create Account
          </Link>
        </Button>
      </div>
    </header>
  )
}
