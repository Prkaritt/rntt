import React from 'react';
import './../App.css';
import DescCard from './DescCard';
import styles from './OtherServices.module.css';
import Plane from './../assets/images/plane.jpg'
import Car from './../assets/images/car.jpg'


const OtherServices = ()=>{
    return (
        <div className={`${styles.otherServices} `}>
            <div className={`mx-114`}>
                <h2 className={`heading heading_secondary color_white`}>
                    Other Services
                </h2>
                <DescCard im = {Car} title="Vehicle Rental" para ="Rent different vehicles and travel all over the country with some of our most experienced drivers. Choose between wide range of cars and SUVS and enjoy the drive."/>
                <DescCard im = {Plane} title="Charter FLights" para="We also provide plane and helicopter charter services to our customers. We are commited to provide the best service at the most reasonable price."/>
            </div>
        </div>
    )
}
export default OtherServices;