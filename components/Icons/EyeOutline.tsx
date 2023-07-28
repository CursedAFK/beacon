import { Dispatch, SetStateAction } from 'react'

type EyeOutlineProps = {
  className?: string
  setIsPasswordVisible: Dispatch<SetStateAction<boolean>>
}

const EyeOutline: React.FC<EyeOutlineProps> = ({
  className,
  setIsPasswordVisible
}) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    onClick={function () {
      setIsPasswordVisible(true)
    }}
  >
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z'
      fill='#9C989E'
    />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M23.8941 11.5521C24.0348 11.8336 24.0352 12.1657 23.8944 12.4472L23 12C23.8944 12.4472 23.8938 12.4484 23.8936 12.4488L23.8925 12.4511L23.889 12.458L23.8777 12.4802C23.8681 12.4987 23.8546 12.5247 23.8372 12.5576C23.8025 12.6233 23.752 12.7168 23.686 12.834C23.5542 13.0684 23.3601 13.3985 23.1057 13.7925C22.5979 14.5787 21.8432 15.6294 20.8545 16.6839C18.8955 18.7736 15.8995 21 12 21C8.10049 21 5.10448 18.7736 3.14546 16.6839C2.15683 15.6294 1.40207 14.5787 0.894336 13.7925C0.63985 13.3985 0.445792 13.0684 0.313971 12.834C0.248023 12.7168 0.19754 12.6233 0.162753 12.5576C0.145357 12.5247 0.131875 12.4987 0.122338 12.4802L0.11099 12.458L0.107539 12.4511L0.105573 12.4472L0.999491 12.0003C0.111724 12.4441 0.105437 12.4468 0.105573 12.4472C-0.0351909 12.1657 -0.0351909 11.8343 0.105573 11.5528L0.999491 12.0003C0.105064 11.553 0.106186 11.5516 0.10637 11.5512L0.107539 11.5489L0.11099 11.542L0.122338 11.5198C0.131875 11.5013 0.145357 11.4753 0.162753 11.4424C0.19754 11.3767 0.248023 11.2832 0.313971 11.166C0.445792 10.9316 0.63985 10.6015 0.894336 10.2075C1.40207 9.42131 2.15683 8.3706 3.14546 7.31606C5.10448 5.22644 8.10049 3 12 3C15.8995 3 18.8955 5.22644 20.8545 7.31606C21.8432 8.3706 22.5979 9.42131 23.1057 10.2075C23.3601 10.6015 23.5542 10.9316 23.686 11.166C23.752 11.2832 23.8025 11.3767 23.8372 11.4424C23.8546 11.4753 23.8681 11.5013 23.8777 11.5198L23.889 11.542L23.8925 11.5489L23.8941 11.5521ZM2.57441 12.7075C2.39492 12.4296 2.25003 12.1889 2.14074 12C2.25003 11.8111 2.39492 11.5704 2.57441 11.2925C3.03543 10.5787 3.71817 9.6294 4.60454 8.68394C6.39552 6.77356 8.89951 5 12 5C15.1005 5 17.6045 6.77356 19.3955 8.68394C20.2818 9.6294 20.9646 10.5787 21.4256 11.2925C21.6051 11.5704 21.75 11.8111 21.8593 12C21.75 12.1889 21.6051 12.4296 21.4256 12.7075C20.9646 13.4213 20.2818 14.3706 19.3955 15.3161C17.6045 17.2264 15.1005 19 12 19C8.89951 19 6.39552 17.2264 4.60454 15.3161C3.71817 14.3706 3.03543 13.4213 2.57441 12.7075ZM23 12C23.8944 11.5528 23.8943 11.5524 23.8941 11.5521L23 12Z'
      fill='#9C989E'
    />
  </svg>
)

export default EyeOutline
