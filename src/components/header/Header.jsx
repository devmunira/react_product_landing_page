import React , {useEffect, useRef, useState} from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineBars} from 'react-icons/ai'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import autoAnimate from '@formkit/auto-animate'

const Header = () => {
  const Menu = ['Home' , 'Brands' , 'Collections' , 'ENG'];
  const [show, setShow] = useState(false);

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return (
    <div>
        <div className={css.container}>
            <div className={css.logo}>
              <img src={logo} alt="Evaly" />
              <span>Evaly</span>
            </div>

            <div className={`${css.menu} sm:block md:hidden`} ref={parent}>
              <AiOutlineBars onClick={reveal}/>
              {
                show &&  
                <ul ref={parent}>
                    {
                      Menu.map((menu) => (
                        <li><a href="/">{menu}</a></li>
                      ))
                    }
                </ul>
              }

              <div>
                  <input className={css.search} type="search" name="search" placeholder='Search Here' id="" />
              </div>
              <span><HiOutlineShoppingBag/></span>


            </div>
        </div>
    </div>
  )
}

export default Header