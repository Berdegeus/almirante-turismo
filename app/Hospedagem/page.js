import Contents from "../Components/Contents/contents";
import style from "./page.module.css";

export default function Hospedagens() {
    return (
        <>
            <h1 className={style.titulo}>Hospedagens</h1>
            <div className={style.container}>
                <Contents
                    image="/static/Hospedagem/loftDovale.jpg"
                    title="Loft do Vale"
                    avaliacao="4.8"
                    descricao="Rua Pedro Jorge Kotowiski 2745 - Casa 3, Almirante Tamandaré"
                    link="https://www.booking.com/hotel/br/loft-do-vale-almirante-tamandare.pt-br.html"
                ></Contents>
                <Contents
                    image="/static/Hospedagem/chacara.jpg"
                    title="Chácara"
                    avaliacao="4.5"
                    descricao="Rua Antônio Manosso 4, Almirante Tamandaré"
                    link="https://www.booking.com/hotel/br/linda-chacara-a-20-min-do-centro-de-curitiba.pt-br.html"
                ></Contents>
                <Contents
                    image="/static/Hospedagem/estanciaDoVale.png"
                    title="Estância do Lago"
                    avaliacao="5.0"
                    descricao="Rua Pedro Teixeira Alves, 930 - Planta Maria Clara, Alm. Tamandaré"
                    link="https://estanciadolago.com.br"
                ></Contents>
                <Contents
                    image="/static/Hospedagem/lepiegeMotel.png"
                    title="Le Piege Motel Thèmatique"
                    avaliacao="4.9"
                    descricao="Rod. dos Minérios, s/n - Km 11 - Bonfim, Alm. Tamandaré"
                    link="https://lepiegemotel.com.br"
                ></Contents>
                <Contents
                    image="/static/Hospedagem/motelNapoleon.png"
                    title="Motel Napoleon"
                    avaliacao="4.0"
                    descricao="Rod. dos Minérios, Km11 - nº 1677 - Bonfim, Alm. Tamandaré"
                    link="https://motelnapoleon.com.br"
                ></Contents>
                <Contents
                    image="/static/Hospedagem/recantoMotel.png"
                    title="O Recanto Motel"
                    avaliacao="3.5"
                    descricao="Rod. dos Minérios, 1694 - Lamenha, Alm. Tamandaré"
                    link=""
                ></Contents>
            </div>
        </>
    );
}
