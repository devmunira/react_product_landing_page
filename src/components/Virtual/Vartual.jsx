import React from 'react'
import css from './Vartual.module.css'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import shade from '../../assets/shade.png'
import { motion } from 'framer-motion'


const Vartual = ({transition}) => {
  return (
    <div className={css.virtualContainer}>
        <motion.div
        initial={{ left : "2rem" }} 
        whileInView={{ left : "0rem" }}
        transition={transition}
        className={css.textArea}>
            <span>Virtual Try On</span>
            <span>Never Buy The wrong shade again</span>
            <a href='/'>Try Now</a>
            <img src={shade} alt="" />
        </motion.div>
        <motion.div
        initial={{ right : "-2%" }} 
        whileInView={{ right : "0" }}
        transition={transition} 
        className={css.compareImg}>
            <ReactCompareImage leftImage={Before} rightImage={After}/>
        </motion.div>
    </div>
  )
}

export default Vartual