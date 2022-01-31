import React from 'react';
import styles from './IntlTours.module.css';
import './../App.css';
import DescCard from './DescCard';
import SL from './../assets/images/SL.jpg';
import TH from './../assets/images/TH.jpg';
import ML from './../assets/images/ML.jpg';
import DB from './../assets/images/Dubai.jpg'

const IntlTours = ()=>{
    return (
        <div className={`${styles.IntlTours}`}>
            <h2 className={`heading heading_secondary`}>International Tours</h2>
            <div className ={`mx-114`}>
                <DescCard im={DB} title="DUBAI" para ="You will be amazed by the different recreational activities that this island nation has to offer. Tour to maldives is one of the most popular tour destination from Regency Nepal Travels."/>
                <DescCard im={SL} title="SRI LANKA" para ="Gift yourself a visit to a country with a great historical importance. Sri Lanka has a lot to offer ranging from beautiful beaches to important cultural sites."/>
                <DescCard im={TH} title="THAILAND" para ="Give us the opportunity to plan for you one of the most popular tourist destination all over the world. Give us an opportunity to plan you a tour to thailand and we will make it a lifetime experience for you."/>
                <DescCard im={ML} title="MALDIVES" para ="You will be amazed by the different recreational activities that this island nation has to offer. Tour to maldives is one of the most popular tour destination from Regency Nepal Travels."/>
            </div>
        </div>
    )
}

export default IntlTours;