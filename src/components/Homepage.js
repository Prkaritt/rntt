import React from 'react';
import Tours from './Tours';
import OtherServices from './OtherServices';
import Header from './Header';
import OpenNow from './OpenNow';

const HomePage = ()=>{
    return (
        <div>
            <Header/>
            <OpenNow/>
            <Tours/>
            <OtherServices/>
        </div>
    )
}

export default HomePage;