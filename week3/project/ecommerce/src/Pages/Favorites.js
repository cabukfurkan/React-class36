import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../store/favorites-context";
import ProductListItem from "../components/ProductListItem";
import styles from './Favorites.module.css'
import Navbar from "../layouts/Navbar";
import ReactLoading from 'react-loading';
import useFetchAll from "../hooks/useFetchAll";


const Favorites = () => {
    const [products, setProducts] = useState();
    const { favoriteProductIds } = useContext(FavoritesContext);

    const apiUrl = `https://fakestoreapi.com/products/`

    const { fetchDatas } = useFetchAll(apiUrl, setProducts, favoriteProductIds)

    useEffect(() => {
        fetchDatas().catch((err) => console.log(err));
    }, [favoriteProductIds]);

    return (
        <div className={styles.container}>
            <header>
                <Navbar />
            </header>
            <main>
                {!products ? (
                    <div className={styles.loading}> <ReactLoading type='cylon' color='blue' height={667} width={375} /> </div>
                ) : favoriteProductIds.length !== 0 ? (
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {products.map((product) => (
                            <ProductListItem product={product} key={product.id} />
                        ))}
                    </div>
                ) : (
                    <h3>❤️ Like some product ❤️</h3>
                )}
            </main>

        </div>
    );
};

export default Favorites;