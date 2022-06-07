import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductListItem.module.css'
import '../App.css'


const ProductListItem = ({ product }) => {
    return (
        <li className={styles.products_item}>
            <div className={styles.products_item_content}>
                <Link to={`/product/${product.id}`} >
                    <img className={styles.products_item_content_img} src={product.image} alt={product.title} />
                </Link>
                <span className={styles.products_item_content_title} >{product.title}</span>
            </div>
        </li>
    )
}

export default ProductListItem