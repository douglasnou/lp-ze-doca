import { useWindowSize } from "react-use";
import SegurancaSm from "../../assets/seguranca-sm.png";
import styled from "./style.module.scss";

export const Seguranca = () => {

    const { width } = useWindowSize();

    return (
        <section className={styled.segurancaSection}>
            <div className={styled.container}>
                <div className={styled.space}>
                </div>
                <div className={styled.text}>
                    <h2>+ SEGURANÇA</h2>
                    <p>
                        Para garantir que você viva em um lugar tranquilo e protegido para toda a família, o Ecoville Zé Doca vai contar com um sistema de <span>monitoramento 24h</span> com <strong>câmeras de segurança</strong> em todo o bairro.
                    </p>
                </div>
                {
                    width < 1024 ?
                    <img src={SegurancaSm} alt="Casal sorrindo" />
                    :
                    ""
                }
            </div>
        </section>
    )
}