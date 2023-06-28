import React from 'react'
import css from '../Feature/Feature.module.css'

const ProductList = ({filter , text}) => {
  const val = text.toString().toLowerCase();
  return (
    <div className={css.menuList}><li onClick={() => filter(val)}>{text}</li></div>
  )
}

export default ProductList