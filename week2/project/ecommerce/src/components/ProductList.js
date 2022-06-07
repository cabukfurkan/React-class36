import React, { useEffect, useState } from 'react'
import ProductListItem from './ProductListItem.js'
import styles from './ProductList.module.css'
import '../App.css'

const ProductList = ({ selectedCategory }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                if (!selectedCategory) {
                    const response = await fetch('https://fakestoreapi.com/products')
                    const data = await response.json()
                    setProducts(data)
                    setIsLoading(false)
                } else {
                    const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
                    const data = await response.json()
                    setProducts(data)
                    setIsLoading(false)
                }
            } catch (error) {
                alert('Loading Products Failed')
            }
        })();
    }, [selectedCategory])

    return (
        <div>
            {isLoading ? <div>Loading Products</div> :
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