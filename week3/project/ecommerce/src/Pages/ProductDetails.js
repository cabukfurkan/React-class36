import { useParams, } from "react-router-dom"
import React, { useEffect, useState, useContext } from 'react'
import styles from './ProductDetails.module.css'
import '../App.css'
import ReactLoading from 'react-loading';
import { ReactComponent as HeartRegular } from '../assets/heart-regular.svg';
import { ReactComponent as HeartSolid } from '../assets/heart-solid.svg'
import FavoritesContext from '../store/favorites-context';
import Navbar from "../layouts/Navbar";
import useFetch from "../hooks/useFetch";


export default function ProductDetails() {
    const { id } = useParams()

    const [product, setProduct] = useState([])

    const favoritesCtx = useContext(FavoritesContext);
    const isFavoriteProduct = favoritesCtx.favoriteProductIds.find((id) => id === product.id);

    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const { isLoading, fetchData } = useFetch(apiUrl, setProduct)

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div >
            <Navbar />
            {isLoading ? <div className={styles.loading}> <ReactLoading type='cylon' color='blue' height={667} width={375} /></div> :
                <main className={`${styles.container}`}>
                    <div className={`${styles.title_container}`}>
                        <h1 className={`${styles.title_container_title}`} >{product.title}</h1>
                    </div>
                    <div className={`${styles.product_details_information}`}>
                        <div className={`${styles.product_details_image}`}>
                            <div className={`${styles.product_image_container}`} >
                                <img className={`${styles.product_image}`} src={product.image} alt="" />
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
                        </div>
                        <p className={`${styles.product_details_description}`}>{product.description}</p>
                    </div>
                </main>
            }
        </div >
    )
}
