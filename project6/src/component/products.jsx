import React,{Component} from "react";
import {Link} from "react-router-dom";
// import Product from "../component/product";

class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[
                {
                id :1,
                name : 'Product1'
    
                 },
        {
            id: 2,
            name: 'Product2',
        },
        {
            id : 3,
            name: 'Product3',
        }
        ]
        }
    }
    render(){
        return (
            <React.Fragment>
                <h2> All Products Listed Below </h2>
                {
                    this.state.products.map((data) => 
                    {
                        return (
                            <ul key={data.id}>
                                <li>
                                    <Link to={`/product/${data.id}`}>
                                        {data.name}
                                    </Link>
                                </li>
                            </ul>
                        )
                    }
                    )
                }
            </React.Fragment>
        )
    }
}

export default Products;