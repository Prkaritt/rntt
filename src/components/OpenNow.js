import React from 'react';
import './../App.css'
import ML from './../assets/images/ML.jpg'
import SL from './../assets/images/SL.jpg'
import styles from './OpenNow.module.css';

const OpenNow = ()=>{
    return(
        <div className={styles.openNow}>
            <div className={styles.container_left}>
                <h3 className={`heading heading_tertiary`}>Confused about where to travel ?</h3>
                <p className={styles.paragraph}>Sri Lanka and Maldives are open for tourists inspite of the COVID situation.
                With strict covid control mechanisms and frequent testing, Sri Lanka and Maldives have managed successfully to allow tourist visit theses countries.
                So, book your tour to these places and give yourself a much needed break to visit these countires. 
                <br></br>
                <br></br>
                Contact us and we will provide you with the best tour options to these places. Let our experience of many tours to these places blend a perfect tour as per your requirements. 
                </p>
            </div>
            <div className={styles.container_right}>
                <img src={SL}/>
                <img src={ML}/>
            </div>
        </div>
    )
}

export default OpenNow;