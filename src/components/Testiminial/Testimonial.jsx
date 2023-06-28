import React from 'react'
import css from './Testimonial.module.css'
import plane from '../../assets/plane.png'
import {TestimonialsData} from '../../data/testimonials'
import hero from '../../assets/testimonialHero.png'
import {Swiper, SwiperSlide} from 'swiper/react'

const Testimonial = () => {
    return (
        <div>
            <div className={css.container}>
                <div className={css.topbar}>
                    <div className={css.textOne}>
                        <h3>Top Rated</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consec!</p>
                    </div>
                    <div className={css.img}>
                        <img src={hero} alt=""/>
                    </div>
                    <div className={css.textTwo}>
                        <h3>100k</h3>
                        <p>Happy customers with us</p>
                    </div>
                </div>
                <div className={css.reviews}>
                    <div className={css.review}>
                        <h2>Reviews</h2>
                        <img src={plane} alt=""/>
                    </div>
                    <div className={css.testimonial}>
                        <Swiper
                            slidesPerGroup={1}
                            slidesPerView={3}
                            spaceBetween={4}
                            breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            "@0.75": {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }
                        }}>
                            {TestimonialsData.map((testimonial, i) => (
                                <SwiperSlide className={css.tswiper}>
                                    <div className={css.testimonialBox}>
                                        <img src={testimonial.image} alt=""/>
                                        <span>{testimonial.comment}</span>
                                        <hr/>
                                        <span>{testimonial.name}</span>
                                    </div>
                                </SwiperSlide>
                            ))
}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial