import React from 'react'
import styles from './NavBar.module.css'

const NavBar = ()=>{
    return (
        <div className= {styles.NavBar }>
            <div className = "mx-114">
                <div className={styles.logo_container}>
                    Regency Nepal   
                </div>
            </div>
        </div>
    )

}

export default NavBar;