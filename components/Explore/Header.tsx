import { User } from '@prisma/client'
import Bell from '../Icons/Bell'
import DesktopLogo from '../Icons/DesktopLogo'
import Message from '../Icons/Message'
import MobileLogo from '../Icons/MobileLogo'

type HeaderProps = {
  user: User
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className='md:px-11 md:py-6 flex items-center justify-between bg-white shadow-sm'>
      <DesktopLogo className='hidden md:block' />

      <MobileLogo className='md:hidden' />

      <nav>
        <ul className='flex items-center md:gap-10'>
          <li className='flex flex-col items-center group cursor-pointer transition'>
            <div className='bg-[#E2E2E2] group-hover:bg-[#F1D2FB] md:p-2 rounded-full'>
              <Message className='group-hover:fill-[#322536]' />
            </div>

            <p className='group-hover:text-[#322536] text-[#686868] md:text-xs'>
              Messages
            </p>
          </li>

          <li className='flex flex-col items-center group cursor-pointer transition'>
            <div className='bg-[#E2E2E2] group-hover:bg-[#F1D2FB] md:p-2 rounded-full'>
              <Bell className='group-hover:fill-[#322536]' />
            </div>

            <p className='group-hover:text-[#322536] text-[#686868] md:text-xs'>
              Notifications
            </p>
          </li>

          <li className='flex flex-col items-center group cursor-pointer transition'>
            <div className='bg-[#E2E2E2] group-hover:bg-[#F1D2FB] md:h-9 md:w-9 grid place-items-center rounded-full'>
              <p className='text-[#949494] font-semibold group-hover:text-[#322536]'>
                {user.fullName[0]}
                {user.fullName[1]}
              </p>
            </div>

            <p className='group-hover:text-[#322536] text-[#686868] md:text-xs'>
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
