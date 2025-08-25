import Logo from "../../assets/logo.png";
import Slide01 from "../../assets/slide-01.png";
import Slide02 from "../../assets/slide-02.png";
import Slide03 from "../../assets/slide-03.png";
import WhatsappLogo from "../../assets/whatsapp.png";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from "./style.module.scss";


export const Whatsapp = () => {

    const slides = [
        Slide01,
        Slide02,
        Slide03,
    ];

    return (
        <section className={styled.whatsappSection}>
            <div className={styled.container}>
                <img className={styled.logo} src={Logo} alt="Logo do Ecoville Zé Doca" />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    Navigation={false}
                    scrollbar={false}
                    className={styled.slideContainer}
                >
                    {
                        slides.map((item) => (
                            <SwiperSlide className={styled.slide}>
                                <img src={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <a className={styled.card} href="https://wa.me/5598985243214?text=Quero%20saber%20mais%20sobre%20a%203ª%20etapa%20do%20Ecoville%20Zé%20Doca%20🤩"
                    target="_blank"
                >
                    <img src={WhatsappLogo} alt="Logo do whatsapp" />
                    <p>
                        Clique aqui e fale com um de nossos especialistas!
                    </p>
                </a>
            </div>
        </section>
    )
}