import React, { useContext, useEffect, useState } from "react";
import FavoritesContext from "../store/favorites-context";
import ProductListItem from "../components/ProductListItem";
import styles from './Favorites.module.css'
import Navbar from "../layouts/Navbar";
import ReactLoading from 'react-loading';


const Favorites = () => {
    const [products, setProducts] = useState();
    const { favoriteProductIds } = useContext(FavoritesContext);

    useEffect(() => {
        fetchData().catch((err) => console.log(err));
    }, [favoriteProductIds]);

    const fetchData = async () => {
        const data = await Promise.all(
            favoriteProductIds.map(async (id) => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    const message = `An error has occurred while getting data: ${response.status}`;
                    throw new Error(message);
                }
                return response;
            })
        );

        const jsonData = await Promise.all(data.map((result) => result.json()));
        setProducts(jsonData);
    };

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
                    <h3>Like some product</h3>
                )}
            </main>

        </div>
    );
};

export default Favorites;