import React, { useEffect, useState } from 'react'
import ProductListItem from './ProductListItem.js'
import styles from './ProductList.module.css'
import '../App.css'
import ReactLoading from 'react-loading';
import useFetch from '../hooks/useFetch.js';


const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([])

    const apiURL = selectedCategory ? `https://fakestoreapi.com/products/category/${selectedCategory}` : 'https://fakestoreapi.com/products'
    const { isLoading, fetchData } = useFetch(apiURL, setProducts)

    useEffect(() => {
        fetchData()
    }, [apiURL])

    return (
        <div>
            {isLoading ? <div className={styles.loading}> <ReactLoading type='cylon' color='blue' height={667} width={375} /></div> :
                <ul className={styles.products}>
                    {products.map((product) =>
                        <ProductListItem product={product} key={product.id} />
                    )}
                </ul>
            }
        </div>
    )
}

export default ProductList