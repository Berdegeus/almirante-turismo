import style from './page.module.css'
import Image from 'next/image'
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Card/Card';

const images = [
  '/../public/Carrossel/1.png',
  '/../public/Carrossel/2.jpg',
  '/../public/Carrossel/3.jpg',
  // Add more image URLs here
];

export default function Home() {
  return (
<>
  <main className={style.main}>
    <div className={style.carousel}>
      <Carousel images={images} />
    </div>
    <div className={style.cards}>
      <Card text={"Hospedagem"} image={'/../public/Hospedagem/Hospedagem.png'}/>
      <Card text={"Destinos"} image={'/../public/Destinos/Destinos.jpg'}/>
      <Card text={"Restaurantes"} image={'/../public/Restaurantes/Restaurante.jpeg'}/> 
    </div>
  </main>
</>
  )
}
