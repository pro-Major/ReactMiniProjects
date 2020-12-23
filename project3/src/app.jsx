import React,{Component} from "react";
import ProductCard from "./component/product-card";
import SearchProduct from "./component/search-product";
class App extends Component{
    render(){
        return (
            <React.Fragment>
                <h1> Hello Cheems </h1>
                <ProductCard/>
                <SearchProduct/>
            </React.Fragment>
            
        )
    }
}
export default App;