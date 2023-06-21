import style from './page.module.css'
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Card/Card';

const images = [
  '/static/Carrossel/1.png',
  '/static/Carrossel/2.jpg',
  '/static/Carrossel/3.jpg',
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
      <Card link={"/Hospedagem"} text={"Hospedagem"} image={'/static/Hospedagem/Hospedagem.png'}/>
      <Card link={"/Destinos"} text={"Destinos"} image={'/static/Destinos/Destinos.jpg'}/>
      <Card link={"/Restaurantes"} text={"Restaurantes"} image={'/static/Restaurantes/Restaurante.jpeg'}/> 
    </div>
  </main>
</>
  )
}
