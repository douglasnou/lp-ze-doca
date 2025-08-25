import { useWindowSize } from "react-use";
import styled from "./style.module.scss";

export const Oportunidade = () => {

    const { width } = useWindowSize();

    return (
        <section className={styled.oportunidadeSection}>
            <div className={styled.container}>
                <div className={styled.banner}>
                    <p>
                        E agora <span className={styled.orange}>É SUA VEZ</span> de morar no melhor e mais completo Bairro Planejado de <span className={styled.green}>Zé Doca</span>
                    </p>
                </div>
                <div className={ width > 1024 ? styled.card : styled.cardSm }>
                    <h3>Não Perca Esta Oportunidade Única!</h3>
                    <p>
                        As unidades da 3ª Etapa são limitadas e a demanda é alta. Garanta já o seu lote no Ecoville Zé Doca e comece a construir o futuro que você e sua família merecem.
                    </p>
                </div>
            </div>
        </section>
    )
}