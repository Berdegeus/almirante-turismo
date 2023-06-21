import style from './page.module.css'
import Image from 'next/image'
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Card/Card';

const images = [
  'https://github.com/Berdegeus/almirante-turismo/blob/master/public/Carrossel/1.png',
  'https://cdn.discordapp.com/attachments/1083046309499519067/1120931753654231060/2.jpg',
  '/../public/Carrossel/3.png',
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
      <Card link={"/Hospedagem"} text={"Hospedagem"} image={'/../public/Hospedagem/Hospedagem.png'}/>
      <Card link={"/Destinos"} text={"Destinos"} image={'/../public/Destinos/Destinos.jpg'}/>
      <Card link={"/Restaurantes"} text={"Restaurantes"} image={'/../public/Restaurantes/Restaurante.jpeg'}/> 
    </div>
  </main>
</>
  )
}
