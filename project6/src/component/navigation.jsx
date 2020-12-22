import React,{Component} from "react";

const Navigation = () => {
    return(
                      <nav className="navbar navbar-inverse">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#">My Wesbite </a>
                    </div>
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Home</a></li>
                      <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                          <li><a href="#">Page 1-1</a></li>
                          <li><a href="#">Page 1-2</a></li>
                          <li><a href="#">Page 1-3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page 2</a></li>
                    </ul>
                    
                  </div>
                </nav>
    )
}
export default Navigation;