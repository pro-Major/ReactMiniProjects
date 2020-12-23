import {Route} from "react-router-dom";
import React,{Component} from "react";
import Navigation from "./component/navigation";
import Home from "./component/home";
import Products from"./component/products";
import Contact from "./component/contact";
import Admin from "./component/admin";
import Product from "./component/product"


class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Navigation/>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/products" exact render={(props) => <Products {...props}/> } />
                <Route path="/product" exact render={(props) => <Product {...props} /> } /> 
                
                <Route path="/contact" exact component={Contact} /> 
                <Route path="/admin" exact render={(props) => <Admin data="angular" {...props}/>} />

            </React.Fragment>
        )
    }
}
export default App;