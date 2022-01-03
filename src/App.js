import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar  from './components/NavBar';
import Tours from './components/Tours';
import OtherServices from './components/OtherServices';
import Footer from './components/Footer';
import InboundTours from './components/InboundTours';
import IntlTours from './components/IntlTours';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from './components/Homepage';



const App = ()=>{
  return (

    <div>
      
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route  exact path="/" element={<HomePage/>} exact={true}/>
        <Route path="/inbound" element={<InboundTours/>}/>
        <Route path="/intl" element={<IntlTours/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
      <Footer/>
      
    </div>
    
  )
}

export default App;