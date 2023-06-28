import React from 'react'
import './Slider.css'
import {SliderProducts} from '../../data/products'
import {Swiper , SwiperSlide} from 'swiper/react'
import { Navigation  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const Slider = () => {
  return (
    <motion.div 
    initial={{ bottom: "2rem" }}
    whileInView={{ bottom : "0rem" }}
    transition={{ duration : "3" , type : "spring" }}
    className='swiper-container'>
        <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        navigation={true}
        loopFillGroupWithBlank={true}
        pagination={{ clickable:true }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        >
            {SliderProducts.map((product , index) => (
               <SwiperSlide>
                    <div className="productArea">
                        <div className="textArea">
                            <div className="details">
                                <span>{product.name}</span> <br/>
                                <span>{product.detail}</span>
                            </div>
                            <div className="price">
                                <h6>{product.price} $</h6>
                                <button>Shop Now</button>
                            </div>
                        </div>
                        <div className="imgArea">
                            <img src={product.img} alt="" />
                        </div>
                    </div>
               </SwiperSlide>
            ))}
        </Swiper>
        <br>
           
        </br>
    </motion.div>
  )
}

export default Slider