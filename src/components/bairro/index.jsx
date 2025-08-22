import styled from "./styled.module.scss";
import Playground from "./../../assets/playground.png";

export const Bairro = () =>{
    return(
        <section className={styled.bairroSection}>
            <div className={styled.container}>
                <div className={styled.text}>
                    <h2>
                        O Ecoville Zé Doca é a resposta!
                    </h2>
                    <p>
                        O bairro planejado que mais cresce e valoriza na região está de volta com sua 3ª Etapa de Vendas, e esta é a sua chance de fazer parte dessa história de sucesso.
                    </p>
                </div>
                <div className={styled.image}>
                    <img src={Playground} alt="Playground do Ecoville Zé Doca" />
                </div>
            </div>
        </section>
    )
}