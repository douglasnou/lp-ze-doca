import Entrada from "../../assets/eco-ze-doca.png";
import Logo from "../../assets/logo.png";
import styled from "./style.module.scss";

export const Endereco = () => {
    return (
        <section className={styled.enderecoSection}>
            <div className={styled.container}>
                <img className={styled.entrada} src={Entrada} alt="Arco de entrada da Ecoville Zé Doca" />
                <div className={styled.text}>
                    <img src={Logo} alt="Logo do Ecoville" />
                    <h3>Av. Stanley Fortes Batista, <strong>Zé Doca - MA</strong></h3>
                    <div className={styled.line}></div>
                </div>
            </div>
        </section>
    )
}