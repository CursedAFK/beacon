import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='md:w-[45%] pt-10 md:pt-0'>
      <div className='relative md:px-12 md:py-6 md:w-full md:h-96 w-36 h-36'>
        <Image
          src='/images/Success, Social media _ achievement, woman, trophy, award, reward, win, competition.png'
          alt='Woman holding trophy of chats'
          priority
          fill
          className='object-contain'
        />
      </div>

      <p className='hidden md:block md:px-8 text-primaryDark md:text-xl text-center'>
        Beacon is a platform that helps people that have been formerly
        incersarated get career and life mentorship to help them navigate their
        free lives.
      </p>
    </section>
  )
}
