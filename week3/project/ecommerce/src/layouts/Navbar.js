import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <div className={styles.title_container}>
            <h1 className={styles.title_container_title}>Outlet</h1>
            <div className={styles.nav}>
                <Link className={styles.nav_link} to='/' >Products</Link>
                <Link to='/favorites' >Favorites</Link>
            </div>
        </div>
    )
}

export default Navbar