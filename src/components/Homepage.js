import React from 'react';
import Tours from './Tours';
import OtherServices from './OtherServices';
import Header from './Header';

const HomePage = ()=>{
    return (
        <div>
            <Header/>
            <Tours/>
            <OtherServices/>
        </div>
    )
}

export default HomePage;