import React from 'react'
import css from './Hero.module.css'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {BiRightArrowAlt} from 'react-icons/bi'
import HeroImg from '../../assets/hero.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div>
            <div className={css.container}>
                {/* Left Side Bar */}
                <div className={css.sides}>
                    <div className={css.text1}>
                        <span>Skin Protection Cream</span>
                    </div>
                    <div className={css.text2}>
                        <h2>Trendy Collections</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, delectus facere?</p>
                    </div>
                </div>

                {/* Middle Sections */}
                <div className={css.middle}>
                    {/* Blue Circle Animation */}
                    <motion.div
                    initial={{ bottom : "2rem" }}
                    whileInView={{ bottom : "0rem" }}
                    transition={{ duration : "3" , type : "spring" }} 
                    className={css.blueArea}
                    ></motion.div>

                    <motion.img
                    initial={{ bottom : "-2rem" }}
                    whileInView={{ bottom : "0rem" }}
                    transition={{ duration : "3" , type : "spring" }}  
                    src={HeroImg} alt=""/>

                    <motion.div
                    initial={{ right : "2rem" }}
                    whileInView={{ right : "0rem" }}
                    transition={{ duration : "3" , type : "spring" }} 
                    className={css.signUp}>
                        <div className={css.svg}>
                            <RiShoppingBag3Line/>
                        </div>
                        <div className={css.text}>
                            <span>Best SignUp Offers</span>
                            <BiRightArrowAlt/>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side Bar */}
                <div className={css.sides}>
                    <div className={css.textright1}>
                        <div className={css.traffic}>
                            <span>1.5m</span>
                            <span>Monthly Traffic</span>
                        </div>
                    </div>
                    <div className={css.textright2}>
                        <div className={css.traffic}>
                            <span>100k</span>
                            <span>Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero