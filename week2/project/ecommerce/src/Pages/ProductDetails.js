import { useParams, } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import '../App.css'


export default function ProductDetails() {
    const { id } = useParams()

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                setProduct(data)
                setIsLoading(false)
            } catch (error) {
                alert('Loading Products Failed')
            }
            console.log(product);

        })();
    }, [id])

    return (
        <div >
            {isLoading ? <div>Loading Products</div> :
                <main className={`${styles.container}`}>
                    <div className={`${styles.title_container}`}>
                        <h1 className={`${styles.title_container_title}`} >{product.title}</h1>
                    </div>
                    <div className={`${styles.product_details_information}`}>
                        <div className={`${styles.product_details_image}`}>
                            <div className={`${styles.product_image_container}`} >
                                <img className={`${styles.product_image}`} src={product.image} alt="" />
                            </div>
                        </div>
                        <p className={`${styles.product_details_description}`}>{product.description}</p>
                    </div>
                </main>
            }
        </div >
    )
}
