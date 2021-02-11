import React,{Component} from "react";
import ProductCard from "./component/product-card";
import SearchProduct from "./component/search-product";
import axios from "axios";
class App extends Component{
    constructor(){
        super()
        this.state={
            products : [],
            
        }
    }
    fetchdata = async (data)=>{
        let url = `https://pixabay.com/api/?key=19432804-bd5acf9b634cc280bbdda0f8f&q=yellow+${data}&image_type=photo&pretty=true`;
         let response = await axios.get(url);
        //  console.log(response);
        this.setState({products : response.data.hits}) 
        
    }
    
    render(){

        return (
            
                <div>
                        <SearchProduct  filterData={this.fetchdata}/>
                        
                         <ProductCard productdata={this.state.products}/>

                </div>
                
            
            
        )
    }
}
export default App;