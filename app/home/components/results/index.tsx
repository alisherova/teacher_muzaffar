import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const ResultsComponent = () => {
    return (<div className='my-20'>
        <h1 className="heading text-5xl font-medium py-14"><span style={{ color: "#FE7244" }}>Our</span> Student's <span style={{ color: "#FE7244" }}>Results</span></h1>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
        >
            <SwiperSlide>
                <img src="/results/1.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/2.jpg" alt="slideimage" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/3.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/4.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/5.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/6.jpg" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/results/7.jpg" alt="slide_image" />
            </SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <FaChevronLeft className='text-xl' />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <FaChevronRight className='text-xl' />
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>)
}

export default ResultsComponent;