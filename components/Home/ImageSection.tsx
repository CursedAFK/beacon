import Image from 'next/image'

const ImageSection = () => (
  <section className='relative md:w-[38vw] h-[45vh] md:h-full'>
    <Image
      src='/images/empowered-business-people-discussing-desktop.png'
      alt='empowered business people discussing'
      fill
      className='object-cover hidden md:block'
      priority
      quality={100}
    />

    <Image
      src='/images/empowered-business-people-discussing-mobile.png'
      alt='empowered business people discussing'
      fill
      className='object-cover md:hidden'
      priority
      quality={100}
    />
  </section>
)

export default ImageSection
