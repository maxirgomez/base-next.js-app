import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselCard } from "./CarouselCard";


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
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
