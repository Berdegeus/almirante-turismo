import style from './contents.module.css'
import Image from 'next/image'


export default function Contents(props) {
    return (
        <div className={style.container}>
            <div className={style.contentContainer}>
                <Image className={style.contentImage} src={props.image} alt="Picture of Content" width={100} height={100} />
                <div className={style.contentInfoContainer}>
                    <span className={style.contentName}> {props.title} </span>
                    <span className={style.avaliacao}> {props.avaliacao} </span>
                    
                </div>
                <a href="" className={style.contentLink}>Saiba mais</a>
            </div>
        </div>
    )
}