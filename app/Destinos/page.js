import Contents from "../Components/Contents/contents";
import style from "./page.module.css";

export default function Destinos(props) {
    return (
        <>
            <h1 className={style.titulo}>Destinos</h1>
            <div className={style.container}>
                <Contents
                image="/../public/restauranteCapricho.png"
                title="Parque Ambiental Aníbal Khury"
                descricao="O Parque Aníbal Khury é um local próximo a Curitiba que oferece um ambiente tranquilo e cheio de áreas verdes para passear"    
                link="https://www.google.com.br/maps/place/Parque+Ambiental+An%C3%ADbal+Khury/@-25.3163029,-49.2913497,16.44z/data=!4m6!3m5!1s0x94dcde7458e2526b:0x5058b1c725ea409c!8m2!3d-25.3160795!4d-49.2875389!16s%2Fg%2F11bbrn5bx_?entry=ttu">
                </Contents>
                <Contents
                image="/../public/restauranteCapricho.png"
                title="Chácara Evíssima"
                descricao=" a Chácara Evíssima possui o necessário para um ótimo passatempo com a família, contando com um café colonial, feito de maneira artesanal, e contando também com uma ampla área verde"
                link="https://www.google.com.br/maps/place/Ch%C3%A1cara+Ev%C3%ADssima/@-25.3495311,-49.3166189,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcde6876150f0d:0xeb13a552e54dd73b!8m2!3d-25.3495311!4d-49.3144302!16s%2Fg%2F1tfbzm0_?entry=ttu ">
                </Contents>
                <Contents
                image="/../public/restauranteCapricho.png"
                title="Parque Aquático Águas de Valverde"
                descricao="Aberto de quarta a domingo, o Parque Aquático Águas de Valverde é uma ótima localidade para um passeio refrescante com a família e amigos"
                link="https://www.google.com.br/maps/search/Parque+Aqu%C3%A1tico+%C3%81guas+de+Valverde/@-25.2961115,-49.3381741,17z/data=!3m1!4b1?entry=ttu ">
                </Contents>
                <Contents
                image="/../public/restauranteCapricho.png"
                title="Pesque Pague Maltaca"
                descricao="o Pesque Pague Maltaca é outra ótima opção para aproveitar um dia cheio de diversão, contando com uma grande área verde e dois tanques para pesca paga e pesca esportiva"
                link="https://www.google.com.br/maps/place/Pesque+Pague+MALTACA/@-25.3248348,-49.3190946,17z/data=!3m1!4b1!4m6!3m5!1s0x94dcde48fce23bf9:0x53188785a0a91a92!8m2!3d-25.3248348!4d-49.3169059!16s%2Fg%2F11ddxbsvr9?entry=ttu ">
                </Contents>
                <Contents
                image="/../public/restauranteCapricho.png"
                title="Vereda das Araucárias"
                descricao="A chácara de eventos Vereda das Araucárias é descrita como o fruto de um sonho para os proprietários, sendo um local com infraestrutura completa a chácara oferece atividades diversas"
                link="https://www.google.com.br/maps/place/Vereda+das+Arauc%C3%A1rias/@-25.3347993,-49.2638808,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce76733184555:0x4409a0430d53802c!8m2!3d-25.3348042!4d-49.2613059!16s%2Fg%2F1hjgmxl7x?entry=ttu ">
                </Contents>
            </div>
        </>
    )
}