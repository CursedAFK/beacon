import ContentSection from '@/components/Home/ContentSection'
import Header from '@/components/Home/Header'
import ImageSection from '@/components/Home/ImageSection'

const Home = () => {
  return (
    <div className='md:h-screen'>
      <Header />

      <div className='overflow-hidden flex flex-col-reverse md:flex-row md:justify-between md:items-center pb-44 md:pb-0 md:h-full'>
        <ContentSection />

        <ImageSection />
      </div>
    </div>
  )
}

export default Home
