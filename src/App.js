import React from "react";

import Navbar from './components/navbar'
import Products from './components/products'
import Footer from './components/footer'
import Home from './components/home'
import Basket from './components/panier'
import "./App.css";
import{BrowserRouter,Route}from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
    
    <Navbar/>
    <Route exact path="/home" component={Home} />
    <Route  path="/products" component={Products} />
    <Route path="/buy" component={Basket} />
   
    <Footer/>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;