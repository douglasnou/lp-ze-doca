import styled from "./style.module.scss";
import Ecoville from "./../../assets/eco-ze-doca.png";

export const Lancamento = () => {
    return (
        <section className={styled.lancamentoSection}>
            <div className={styled.container}>
                <div className={styled.text}>
                    <h2>
                        lançamento em <br/><strong>9 de setembro</strong>
                    </h2>
                    <p>
                        Cansado da vida na cidade grande e busca um <strong>lugar tranquilo, seguro e com qualidade de vida para sua família?</strong> Ou talvez esteja procurando o investimento perfeito para garantir seu futuro?
                    </p>
                </div>
                <div className={styled.image}>
                    <img src={Ecoville} alt="Entrada do Ecoville Zé Doca" />
                </div>
            </div>
        </section>
    )
}