import style from './nav.module.css';
import Link from 'next/link';
// link destinos restaurantes hospedagem passeios
export default function Nav() {
  return (
  <>
    <div className={style.body}>
      <div className={style.nav}>
          <ul>
              <li><a><Link href={"/"}>Home</Link></a></li>
              <li><a><Link href={"/Destinos"}>Destinos</Link></a></li>
              <li><a><Link href={"/Restaurantes"}>Restaurantes</Link></a></li>
              <li><a><Link href={"/Hospedagem"}>Hospedagem</Link></a></li>
              <li><a><Link href={"/Passeios"}>Passeios</Link></a></li>
          </ul>
      </div>
    </div>
  </>
  )
}