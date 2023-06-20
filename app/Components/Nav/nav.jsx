import style from './nav.module.css';

export default function Nav() {
  return (
  <>
    <div className={style.body}>
      <div className={style.nav}>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Destinos</a></li>
              <li><a href="#">Restaurantes</a></li>
              <li><a href="#">Hospedagens</a></li>
              <li><a href="#">Sobre</a></li>
          </ul>
      </div>
    </div>
  </>
  )
}