import React from 'react';
import styles from './Header.module.css'
import './../App.css'

const Header = ()=>{
    return (
        <div className = {`${styles.header}`}>
            <div className = "mx-144 row">
                <div className={`underline capital welcomeText`}>
                    Welcome To
                </div>
                <div>
                    <h1 className ={`heading heading_primary`}>
                        Regency Nepal Travels   
                    </h1>
                </div>
                <div>
                    <div className={`paragraph`}>
                        Regency Nepal Travels is an IATA certified travel agency that aims to render its services in various fields at a reasonable price.
                        We provide services in variety of fields like ticketing, tour, trekking and courier and cargo services. We also provide car rental services within Nepal.
                        Reliable service at a cheap price is out motto. We provide both inbound and international tour facilities. For all these services, Recgency Nepal Travels provides its own ticketing services with feasible terms and means of payment.

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;