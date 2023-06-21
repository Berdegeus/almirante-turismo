import style from './page.module.css'
import Image from 'next/image'
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Card/Card';

const images = [
  'https://media.discordapp.net/attachments/1083046128867627068/1120488399825022996/4-Livia-Turismo.png',
  'https://media.discordapp.net/attachments/1083046128867627068/1120488673574666411/lg-1452_13_383589-168450528464732.jpeg?width=849&height=566',
  'https://media.discordapp.net/attachments/1083046128867627068/1120488954878247035/mb6wfq2ndcyn2vim2fkntc1_sm.jpg',
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
      <Card text={"Hospedagem"} image={'https://media.discordapp.net/attachments/1083046128867627068/1120488399825022996/4-Livia-Turismo.png'}/>
      <Card text={"Destinos"} image={'https://media.discordapp.net/attachments/1083046128867627068/1120488399825022996/4-Livia-Turismo.png'}/>
      <Card text={"Restaurantes"} image={'https://media.discordapp.net/attachments/1083046128867627068/1120488399825022996/4-Livia-Turismo.png'}/> 
    </div>
  </main>
</>
  )
}
