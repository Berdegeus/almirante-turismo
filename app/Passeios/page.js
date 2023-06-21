import style from './page.module.css'
import Passeio from '../Components/Passeio/passeio'

export default function Passeios() {
    return(
    <>
    <div className={style.container}>        
        <Passeio
                NomePasseio="Passeio 1"
                image1="/../public/parqueAmbiental.png"
                title1="Parque Ambiental Aníbal Khury"
                horario1="10h"    
                descricao1="O Parque Aníbal Khury é um local próximo a Curitiba que oferece um ambiente tranquilo e cheio de áreas verdes para passear"
                    
                image2="/../public/HakunaMatataPic.png"
                title2="Quiosque Hakuna Matata"
                horario2="12:30h"    
                descricao2="Um espaço único que agrega gastronomia ao melhor da vida noturna, necessita de reserva"    
                
                image3="/../public/estanciaDoVale.png"
                title3="Estância do Lago"
                horario3="16h"    
                descricao3="Rua Pedro Teixeira Alves, 930 - Planta Maria Clara, Alm. Tamandaré"    
                >
    
        </Passeio>

        <Passeio
                NomePasseio="Passeio 2"
                image1="/../public/veredaAraucaria.png"
                title1="Vereda das Araucárias"
                horario1="11h"    
                descricao1="A chácara de eventos Vereda das Araucárias é descrita como o fruto de um sonho para os proprietários, sendo um local com infraestrutura completa a chácara oferece atividades diversas"
                    
                image2="/../public/nidosRestaurante.png"
                title2="Nido's Restaurante"
                horario2="13h"    
                descricao2="Cozinha caseira do cotidiano em pratos feitos com opções variadas e tradicionais"    
                
                image3="/../public/chacara.jpg"
                title3="Chácara"
                horario3="16h"    
                descricao3="Rua Antônio Manosso 4, Almirante Tamandaré"    
                >
    
        </Passeio>  
        <Passeio
                NomePasseio="Passeio 3"
                image1="/../public/chacaraEvisse.png"
                title1="Chácara Evíssima"
                horario1="10:30h"    
                descricao1="a Chácara Evíssima possui o necessário para um ótimo passatempo com a família, contando com um café colonial, feito de maneira artesanal, e contando também com uma ampla área verde"
                    
                image2="/../public/restaurantecapricho.jpg"
                title2="Restaurante no Capricho"
                horario2="13h"    
                descricao2="Ambiente agradável preparado com carinho para você que aprecia aquela comida feita NO CAPRICHO!"    
                
                image3="/../public/loftDovale.jpg"
                title3="Loft do Vale"
                horario3="17h"    
                descricao3="Rua Pedro Jorge Kotowiski 2745 - Casa 3, Almirante Tamandaré"    
                >
    
        </Passeio>        
    </div>
    </>
    )
}