import React,{Component} from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return(
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/home">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/admin">Admin</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="btn btn-danger navbar-btn">Button</button>
      </div>
    </nav>
    
    )
}
export default Navigation;