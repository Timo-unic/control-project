import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './SliderSwipe.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type Props = {}

const SliderSwipe = (props: Props) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img
                    src="/images/image-home-slider-1.jpg"
                    alt=""
                    className="slide-one"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="/images/image-home-slider-2.jpg"
                    alt=""
                    className="slide-one"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="/images/image-home-slider-3.jpg"
                    alt=""
                    className="slide-one"
                />
            </SwiperSlide>
            ...
        </Swiper>
    )
}

export default SliderSwipe
