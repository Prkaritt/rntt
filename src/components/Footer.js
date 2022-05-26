import React from 'react';
import styles from './Footer.module.css';

const Footer = ()=>{
    return(
        <div className={`${styles.footer}`}>
            <div className={`mx-114 col ${styles.col_row}`}>
                <div className={`${styles.footer_left}`}>
                    <div className={`heading_tertiary`}>
                        Contact Details
                    </div>
                    <div className={`${styles.detail}`}>
                        <div className={`${styles.attribute}`}>Email : </div>
                        <div className={`${styles.value}`}> renttnepal@gmail.com<br></br>regencyprashant@gmail.com</div>
                    </div>
                    <div className={`${styles.detail}`}>
                        <div className={`${styles.attribute}`}>Phone :</div>
                        <div className={`${styles.value}`}>01 4428818, 01 4433455</div>
                    </div>
                    <div className={`${styles.detail}`}>
                        <div className={`${styles.attribute}`}>Mobile :</div>
                        <div className={`${styles.value}`}>(+977)9851047480</div>
                    </div>
                </div>
                <div className={`${styles.footer_right}`}>
                    <div className={`heading_tertiary`}>
                        Address
                    </div>
                    <div className={`${styles.detail}`}>
                        Hattisar, Kathmandu, Nepal
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Footer;