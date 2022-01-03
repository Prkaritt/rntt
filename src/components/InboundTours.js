import React from 'react';
import styles from './InboundTours.module.css';
import './../App.css';
import DescCard from './DescCard';

import MUSTANG from './../assets/images/mustang.jpg'
import Rara from './../assets/images/rara.jpg'
import ANNAPURNA from './../assets/images/annapurna.jpg';
const InboundTours = ()=>{
    return (
        <div className= {styles.InboundTours}>
            <h2 className={`heading heading_secondary`}>Popular Tours In Nepal</h2>
            <div className= {`${styles.tours_container} mx-114`}>
                <DescCard im={MUSTANG} title="MUSTANG" para = "Mustang is one of the most preferred destination in Nepal. Get mesmerised by the totally different culture and the  breathtaking view of mountains that Mustang is known for. Also, Mustang is widely known for Thakali food. "></DescCard>
                <DescCard im={Rara} title="Rara" para = "Located in Rara National Park, Rara lake has a lot to offer for adventure loving people. With one of the cleanest and bluest lake, give yourself som time with the fascinating view that Rara has for you."></DescCard>
                <DescCard im={ANNAPURNA} title="ANNAPURnA" para = "Hike with your friends and families to one of the most popular hiking route and enjoy the breathetaking view of Mount Annapurna. Annapurna is one of the highest peaks in the world."></DescCard>
            </div>

        </div>
    )
}

export default InboundTours;