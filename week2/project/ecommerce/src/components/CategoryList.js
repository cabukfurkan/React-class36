import React, { useEffect, useState } from 'react'
import CategoryListItem from './CategoryListItem'
import styles from './CategoryList.module.css'
import '../App.css'


const CategoryList = ({ onSelectCategory, activeCategory }) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories')
                const data = await response.json()
                setCategories(data)
                setIsLoading(false)
            } catch (error) {
                alert('Loading Categories Failed')
            }
        })();
    }, [])

    return (
        <div>
            {isLoading ? <div>Loading Categories</div> :
                <ul className={styles.categories}>
                    {categories.map((category, index) => (
                        <CategoryListItem
                            key={index}
                            category={category}
                            onSelectCategory={onSelectCategory}
                            activeCategory={activeCategory}
                        />
                    ))}
                </ul>}

        </div>
    )
}

export default CategoryList