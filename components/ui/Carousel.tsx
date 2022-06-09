import { Swiper, SwiperSlide } from "swiper/react";
import CarouselDB from "../../DB/CarouselDB.js";

export const Carousel = () => {

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {
                    CarouselDB.map(({ id, image, subtitle, title }) => {
                        return (
                            <SwiperSlide key={id} >
                                <div className="card-carousel">
                                    <img src={ image } alt={ title } />
                                    <div className="card-carousel-desc">
                                        <h5>{subtitle}</h5>
                                        <h4>{title}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }

            </Swiper>
        </>
    )
    
}
