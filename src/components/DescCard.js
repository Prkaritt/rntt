import React from 'react';
import styles from './DescCard.module.css';

const DescCard = ({im,title,para})=>{
    return(
        <div className={`${styles.descCard}`}>
            <div className={`${styles.descCard_left}`}>
                <img src={im}/>
            </div>
            <div className={`${styles.descCard_right}`}>
                <div className={`heading heading_tertiary`}>
                    {title}
                </div>
                <p className={`${styles.paragraph}`}>
                    {para}
                </p>
            </div>
            
        </div>
    )
}

export default DescCard;