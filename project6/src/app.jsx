import {Route} from "react-router-dom";
import React,{Component} from "react";
import Navigation from "./component/navigation";
import Home from "./component/home";
import Products from"./component/products";
import Contact from "./component/contact";
import Admin from "./component/admin";


class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Navigation/>
                <Route path="home" component={Home} />
                <Route path="products" component={Products} />
                <Route path="contact" component={Contact} /> 
                <Route path="admin" component={Admin} />

            </React.Fragment>
        )
    }
}
export default App;