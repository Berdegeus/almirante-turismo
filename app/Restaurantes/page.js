import Contents from '../Components/Contents/contents'
import style from './page.module.css'

export default function Restaurantes(props) {
    return (
        <>
        <h1 className={style.titulo}>Restaurantes</h1>
        <div className={style.container}>
                <Contents
                image="/static/Restaurantes/restaurantecapricho.jpg"
                title="Restaurante no Capricho"
                avaliacao="4.7"
                descricao="Ambiente agradável preparado com carinho para você que aprecia aquela comida feita NO CAPRICHO!"    
                link="https://restaurantguru.com.br/Restaurante-No-Capricho-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/LaCasaDuChef.png"
                title="La Casa Du Chef Restaurante"
                avaliacao="4.0"
                descricao="Trabalham com culinária Baiana a Internacional e Eventos, especialista em Buffet de Feijoda"    
                link="https://restaurantguru.com.br/Restaurante-La-Casa-Du-Cheff-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/restauranteFamiliaSalles.png"
                title="Restaurante Família Salles"
                avaliacao="4.2"
                descricao="Cozinha Brasileira oferece uma autêntica e saborosa refeição neste restaurante"    
                link="https://restaurantguru.com.br/Familia-Salles-Restaurante-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/restauranteBuffet.png"
                title="Restaurante Buffet São Jorge"
                avaliacao="4.6"
                descricao="O menu deste restaurante é recomendado para os amantes da culinária"    
                link="https://restaurantguru.com.br/Buffet-e-Lanchonete-Sao-Jorge-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/HakunaMatataPic.png"
                title="Quiosque Hakuna Matata"
                avaliacao="4.6"
                descricao="Um espaço único que agrega gastronomia ao melhor da vida noturna, necessita de reserva"
                link="https://restaurantguru.com.br/Hakuna-Matata-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/restauranteDrose.png"
                title="Restaurante D'ROSE"
                avaliacao="4.7"
                descricao="Apaixonados pelo universo da gastronomia buscamos contar nossa história em cada receita"    
                link="https://restaurantguru.com.br/RESTAURANTE-DROSE-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/restauranteEdy.png"
                title="Edy Mello Restaurante"
                avaliacao="4.2"
                descricao="Restaurante com comidas internacionacias para todos"
                link="https://restaurantguru.com.br/Edy-Mello-Restaurante-Almirante-Tamandare">        
                </Contents>
                <Contents
                image="/static/Restaurantes/nidosRestaurante.png"
                title="Nido's Restaurante"
                avaliacao="4.7"
                descricao="Cozinha caseira do cotidiano em pratos feitos com opções variadas e tradicionais"    
                link="https://restaurantguru.com.br/Nidos-Almirante-Tamandare-2">        
                </Contents>
                
        </div>
        </>
    )
}