import styles from './Product.module.css'
import '../App.css'
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import { useState } from 'react'
import Navbar from '../layouts/Navbar';

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [activeCategory, setActiveCategory] = useState();


    const onSelectCategory = (categoryName) => {
        let currentCategory = categoryName
        if (currentCategory === activeCategory) {
            currentCategory = ""
            setActiveCategory(currentCategory);
            setSelectedCategory(currentCategory)
        } else {
            setSelectedCategory(currentCategory);
        }
        setActiveCategory(currentCategory)
    };

    return (
        <div className={styles.container}>
            <header>
                <Navbar />
                <CategoryList onSelectCategory={onSelectCategory} activeCategory={activeCategory} />
            </header>
            <main>
                <ProductList selectedCategory={selectedCategory} />
            </main>
        </div>
    )
}

export default Product  