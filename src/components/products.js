import React, { Component } from "react";
import "./componenet.css"
import Carte from './carte'

class Products extends Component{
render () {
  return (
    <div className="lescartes">
    <div className="card-deck">
    <Carte />
    <Carte />
    <Carte />
  </div>
  </div>
  );
}
}
export default Products;