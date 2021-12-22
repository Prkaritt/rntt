import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar  from './components/NavBar';
import Tours from './components/Tours';
import OtherServices from './components/OtherServices';
import Footer from './components/Footer';



const App = ()=>{
  return (

    <div>
      <NavBar/>
      <Header/>
      <Tours/>
      <OtherServices/>
      <Footer/>
    </div>
    
  )
}

export default App;