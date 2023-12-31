import Link from 'next/link'
import DesktopLogo from '../Icons/DesktopLogo'
import MobileLogo from '../Icons/MobileLogo'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 md:py-4 px-3 md:px-11 bg-white shadow-sm'>
      <MobileLogo className='md:hidden' />

      <DesktopLogo className='hidden md:block' />

      <div className='md:flex gap-5 items-center font-semibold'>
        <Button
          variant='outline'
          asChild
          className='border-primaryNormal text-primaryNormal py-5 w-40 md:inline-flex hidden'
        >
          <Link href='/auth'>Log In</Link>
        </Button>

        <Button
          asChild
          className='border-primaryNormal border bg-primaryNormal text-xs whitespace-nowrap md:text-base py-3 md:py-5 w-28 md:w-40 text-slate-50'
        >
          <Link href='/auth'>Create Account</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header
