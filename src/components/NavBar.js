import React from 'react'
import styles from './NavBar.module.css'
import './../App.css'
import {Link} from 'react-router-dom';
const NavBar = ()=>{
    return (
        <div className= {styles.NavBar }>
            <div className = {`mx-114 ${styles.col}`}>
                <div className={styles.logo_container}>
                    <div className={styles.logo}>
                        <Link className={`link white`} to="/">Regency Nepal</Link>  
                    </div>
                      
                </div>
                {/* <div className={styles.navigation_items}>
                    <div className={`${styles.navigation_items_item}`}>Domestic Tours</div>
                    <div className={`${styles.navigation_items_item}`}>International Tours</div>
                    <div className={`${styles.navigation_items_item}`}>Other Services</div>
                    <div className={`${styles.navigation_items_item}`}>Contact Us</div>
                </div> */}
            </div>
        </div>
    )

}

export default NavBar;