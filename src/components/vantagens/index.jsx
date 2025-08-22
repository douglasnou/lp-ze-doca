import Lote from "./../../assets/lote.svg";
import Location from "./../../assets/location.svg";
import Ambiente from "./../../assets/ambiente.svg";
import styled from "./style.module.scss";

export const Vantagens = () => {

    const vantagens = [
        {
            img: Lote,
            title: "Lotes a partir de 160m²: ",
            text: "Espaços amplos e versáteis, ideais para construir a casa dos seus sonhos, do jeitinho que você sempre quis.",
        },
        {
            img: Location,
            title: "Localização Estratégica: ",
            text: "Situado na Av. Stanley Fortes Batista, Zé Doca – MA, com acesso facilitado e perto de tudo que você precisa. Conveniência e praticidade no seu dia a dia.",
        },
        {
            img: Ambiente,
            title: "Investimento Inteligente: ",
            text: "O Ecoville Zé Doca é sinônimo de valorização. Invista em um empreendimento com alta rentabilidade e segurança para seu capital.",
        },
    ];

    return (
        <section className={styled.vantagemSection}>
            <div className={styled.container}>
                <div className={styled.title}>
                    <h2>
                        Por Que Escolher o <br /><strong>Ecoville Zé Doca?</strong>
                    </h2>
                </div>
                <div className={styled.list}>
                    {
                        vantagens.map((item)=>(
                            <div className={styled.card}>
                                <img src={item.img} alt="Item sobre o Ecoville" />
                                <p>
                                    <strong>{item.title}</strong>{item.text}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}