import React from 'react'
import css from './Feature.module.css'
import {ProductsData} from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {useState} from 'react'
import plane from '../../assets/plane.png'
import {motion} from 'framer-motion'
import ProductList from '../Layouts/ProductList'

const Feature = () => {
    const [menuProducts,setMenuProducts] = useState(ProductsData)
    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }
    const [parent] = useAutoAnimate()
    return (
        <div>
            <div className={css.container}>
                {/* Heading */}
                <motion.div
                    animate={{
                    translateX: 0.9
                }}
                    transition={{
                    repeat: Infinity,
                    duration: 2
                }}
                    className={css.heading}>
                    <img src={plane} alt=""/>
                    <h2>Our Feature Products</h2>
                </motion.div>


                <div className={css.products}>
                    <ul className={css.menuList}>
                        <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                        <ProductList filter={filter} text="Skin Care"></ProductList>
                        <ProductList filter={filter} text="Conditioner"></ProductList>
                        <ProductList filter={filter} text="Foundation"></ProductList>
                    </ul>
                    <div className={css.productList} ref={parent}>
                        {menuProducts.map((product, index) => (
                            <div className={css.productArea}>
                                <div className={css.textArea}>
                                    <div className={css.deatils}>
                                        <span>{product.name}</span>
                                        <br/>
                                        <span>{product.detail}</span>
                                    </div>
                                    <div className={css.price}>
                                        <h6>{product.price}
                                            $</h6>
                                        <button>Shop Now</button>
                                    </div>
                                </div>
                                <div className={css.imgArea}>
                                    <img src={product.img} alt=""/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature