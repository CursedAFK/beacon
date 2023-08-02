type HamburgerMenuProps = {
  className?: string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ className }) => (
  <svg
    width='26'
    height='21'
    viewBox='0 0 26 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M1 19.2857H25M1 10.1429H25M1 1H25'
      stroke='#60007D'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)

export default HamburgerMenu
