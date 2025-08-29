import { useEffect, useState } from 'react';
import styles from './Sponsors.module.css';

import sponsorsData from './Sponsors.json'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Sponsors = () => {

    const [patrocinadores, setPatrocinadores] = useState([]);

    useEffect(() => {
        setPatrocinadores(sponsorsData)
    }, [])

    return (
        <div className={styles.container} >
            <h2 className={styles.titulo}>Nossos Patrocinadores</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 20 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
            >
                {patrocinadores.map((obj) => (
                    <SwiperSlide key={obj.id} >
                        <div className={ styles.card } >
                            <img src={obj.logo} alt={obj.nome} className={styles.logo} />
                            <p className={styles.nome} >{obj.nome}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

}

export default Sponsors;