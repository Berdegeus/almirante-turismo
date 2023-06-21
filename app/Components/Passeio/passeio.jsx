import style from './passeio.module.css'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa';

export default function Passeio(props) {
    return (
        <>
        <h2 className={style.passeioTitle}>{props.NomePasseio}</h2>
        <div className={style.container}>    
                <div className={style.lugares}>
                    <Image className={style.contentImage} src={props.image1} alt="Picture of Content" width={250} height={250} />
                    <div className={style.contentInfoContainer}>
                        <span className={style.contentName}> {props.title1} </span>
                        <span className={style.horario}>{props.horario1}</span>
                        <p className={style.descricao}> {props.descricao1} </p>
                </div>
            
            </div>
            <FaChevronRight className={style.seta}></FaChevronRight>
            <div className={style.lugares}>
                <Image className={style.contentImage} src={props.image2} alt="Picture of Content" width={250} height={250} />
                <div className={style.contentInfoContainer}>
                    <span className={style.contentName}> {props.title2} </span>
                    <span className={style.horario}>{props.horario2}</span>
                    <p className={style.descricao}> {props.descricao2} </p>
                </div>
            </div>
            <FaChevronRight className={style.seta}></FaChevronRight>    
            <div className={style.lugares}>
                <Image className={style.contentImage} src={props.image3} alt="Picture of Content" width={250} height={250} />
                <div className={style.contentInfoContainer}>
                    <span className={style.contentName}> {props.title3} </span>
                    <span className={style.horario}>{props.horario3}</span>
                    <p className={style.descricao}> {props.descricao3} </p>
                </div>
            </div>

        </div>
        </>

    )
}