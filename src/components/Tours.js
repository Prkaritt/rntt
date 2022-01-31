import React from 'react';
import styles from './Tours.module.css';

import Card from './Card';
import SL from './../assets/images/SL.jpg'
import ML from './../assets/images/ML.jpg'
import TH from './../assets/images/TH.jpg'
import mustang from './../assets/images/mustang.jpg'
import rara from './../assets/images/rara.jpg'
import annapurna from './../assets/images/annapurna.jpg'

import {Link} from 'react-router-dom';

const Tours = ()=>{
    return (
        <div className={styles.tours}>
            <div className={`mx-114`}>
                <h2 className={`heading heading_secondary`}>
                    Popular International Tours
                </h2>

                <div className={`col ${styles.col_row}`}>
                    <Card im={SL} country={"SRI LANKA"}/>
                    <Card im={ML} country={"MALDIVES"}/>
                    <Card im={TH} country={"THAILAND"}/>
                    
                    
                </div>
                    <Link className={`link secondary`} to="/intl">
                        <div> See more</div>
                    </Link>

                <h2 className={`heading heading_secondary`}>
                    Popular Domestic Tours
                </h2>

                <div className={`col ${styles.col_row}`}>
                    <Card im={mustang} country={"MUSTANG"}/>
                    <Card im={rara} country={"RARA"}/>
                    <Card im={annapurna} country={"ANNAPURNA"}/>
                    
                    
                </div>

                <Link className= {`link secondary`} to="/inbound">
                        <div> See more</div>
                    </Link>
                
            </div>
        </div>
    )
}

export default Tours;