import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductListItem.module.css'
import '../App.css'
import { ReactComponent as HeartRegular } from '../assets/heart-regular.svg';
import { ReactComponent as HeartSolid } from '../assets/heart-solid.svg'
import FavoritesContext from '../store/favorites-context';


const ProductListItem = ({ product }) => {
    const favoritesCtx = useContext(FavoritesContext);

    const isFavoriteProduct = favoritesCtx.favoriteProductIds.find((id) => id === product.id);
    return (

        <li className={styles.products_item}>
            <div className={styles.product}>
                <Link to={`/product/${product.id}`} >
                    <div className={styles.product_image_container}>
                        <img className={styles.product_image} src={product.image} alt={product.title} />
                        <div className={styles.hearth_container}>
                            <div className={styles.product_image_favorite_container}>
                                {isFavoriteProduct ? (
                                    <HeartSolid
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            favoritesCtx.removeFavorite(product.id);
                                        }}
                                    />
                                ) : (
                                    <HeartRegular
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            favoritesCtx.addFavorite(product.id);
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
                <span className={styles.product_title} >{product.title}</span>

            </div>
        </li >
    )
}

export default ProductListItem