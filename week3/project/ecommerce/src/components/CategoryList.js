import React, { useEffect, useState } from 'react'
import CategoryListItem from './CategoryListItem'
import styles from './CategoryList.module.css'
import '../App.css'
import ReactLoading from 'react-loading';
import useFetch from '../hooks/useFetch';



const CategoryList = ({ onSelectCategory, activeCategory }) => {
    const [categories, setCategories] = useState([])

    const apiUrl = 'https://fakestoreapi.com/products/categories'
    const { isLoading, fetchData } = useFetch(apiUrl, setCategories)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {isLoading ? <div className={styles.loading}> <ReactLoading type='cylon' color='blue' height={25} width={50} /></div> :
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