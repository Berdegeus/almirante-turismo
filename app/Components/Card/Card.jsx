import Image from 'next/image';
import style from './card.module.css';

export default function Card() {
  return (
    <>
    <div className={style.main}>
      <Image src="/../public/Lorem.png" width={266.67} height={400} />
      <button className={style.btn}>test</button>
    </div>
    </>
  )
}