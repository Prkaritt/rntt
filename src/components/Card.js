import React from 'react';
import styles from './Card.module.css'


const Card = ({im,country})=>{
    return (
        <div className={styles.card}>
            <div className={`${styles.card_details}`}>
                <div className={`welcomeText`}>
                    {country}
                </div>
            </div>
            <img src={im}/>
        </div>
    );
}

export default Card;