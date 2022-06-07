import React from 'react'
import styles from './CategoryListItem.module.css'
import '../App.css'


const CategoryListItem = ({ category, onSelectCategory, activeCategory }) => {
    return (
        <li >
            <input
                className={`${styles.categories_item} ${category === activeCategory ? styles.category_active : ""
                    }`}
                type="button"
                value={category}
                onClick={(e) => {
                    onSelectCategory(e.target.value);
                }}
            />
        </li>
    )
}

export default CategoryListItem