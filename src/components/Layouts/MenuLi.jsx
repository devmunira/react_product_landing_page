import React from 'react'
import css from '../header/Header.module.css'

const MenuLi = ({path , text}) => {
  return (
    <ul className={css.menu}>
        <li><a href={path}>{text}</a></li>
    </ul>
  )
}

export default MenuLi