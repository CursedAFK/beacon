import Image from 'next/image'

type ImageSectionProps = {
  isMobile: boolean
}

const ImageSection: React.FC<ImageSectionProps> = ({ isMobile }) => (
  <section className='relative md:w-[38vw] h-[45vh] md:h-full'>
    <Image
      src={
        isMobile
          ? '/images/empowered-business-people-discussing-mobile.png'
          : '/images/empowered-business-people-discussing-desktop.png'
      }
      alt='empowered business people discussing'
      fill
      className='object-cover'
      priority
      quality={100}
    />
  </section>
)

export default ImageSection
