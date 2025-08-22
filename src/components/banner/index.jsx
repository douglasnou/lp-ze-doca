import styled from "./style.module.scss";
import BannerBg from "./../../assets/banner.png";
import BannerSm from "./../../assets/banner-sm.png";
import { useWindowSize } from "react-use";

export const Banner = () => {

    const { width } = useWindowSize();

    return (
        <section className={styled.bannerSection}>
            {
                width < 1024 ?
                <img src={BannerSm} alt="Banner de campanha" />
                :
                <img src={BannerBg} alt="Banner de campanha" />
            }
        </section>
    )
}