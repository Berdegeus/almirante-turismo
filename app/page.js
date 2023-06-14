import Image from 'next/image'
import Nav from './Components/Nav/nav'
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  return (
    <><div>
      <h1>Welcome to My Image Carousel</h1>
      <ImageCarousel />
    </div><>
        <Nav />
      </></>
  )
}
