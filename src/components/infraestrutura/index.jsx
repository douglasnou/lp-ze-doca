import Estrutura01 from "../../assets/estrutura-01.png";
import Estrutura02 from "../../assets/estrutura-02.png";
import Estrutura03 from "../../assets/estrutura-03.png";
import Estrutura04 from "../../assets/estrutura-04.png";
import styled from "./style.module.scss";

export const Infraestrutura = () => {

    const estrutura = [
        {
            img: Estrutura01,
            title: "Espaço Pet: ",
            text: "Seu melhor amigo merece um lugar especial para se divertir e correr livremente."
        },
        {
            img: Estrutura02,
            title: "Baby Park: ",
            text: "Ambiente seguro e projetado para a alegria e desenvolvimento dos seus filhos."
        },
        {
            img: Estrutura03,
            title: "Praça Revitalizada: ",
            text: "Um convite ao lazer, relaxamento e conexão com a natureza, bem pertinho de casa."
        },
        {
            img: Estrutura04,
            title: "Iluminação de LED: ",
            text: "Mais segurança para você e sua família, além de contribuir para a sustentabilidade do bairro."
        },
    ];

    return (
        <section className={styled.estruturaSection}>
            <div className={styled.container}>
                <h2>Infraestrutura Completa e Diferenciais Exclusivos:</h2>
                <div className={styled.list}>
                    {
                        estrutura.map((item)=>(
                            <div className={styled.card}>
                                <img src={item.img} alt="Dentro do Ecoville" />
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