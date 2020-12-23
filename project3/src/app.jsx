import React,{Component} from "react";
import {axios} from "axios";
import SearchProduct from "./component/search-product";
import ProductCard from "./component/product-card";


class App extends Component{
    constructor(){
        super();
        this.state={
            ProductsData : [ ],
            SearchedData: ''
        }
        }
        
     render(){
        

        return(
            <React.Fragement>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <SearchProduct/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </React.Fragement>
                
           
            
         )
    }
}
export default App;