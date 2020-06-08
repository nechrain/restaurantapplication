import React from "react";
import "./componenet.css"
import {Link} from 'react-router-dom'


function Navbar() {
  return (

   
    <div className="navbar">

    <div>
     <ul>
       <img  className="logo" src="https://cdn.dribbble.com/users/227481/screenshots/1168102/santa.anna.png"/>
      <li><Link   to="/home">Home</Link></li>
      <li><Link   to="/products">Products</Link></li>
      <li><Link   to="/buy">Bascket</Link></li>
      </ul>
      </div>

     
      
   
    </div>
    
  );
}

export default Navbar;




