import React,{Component} from "react";
import {axios} from "axios";


class App extends Component{
    constructor(){
        super();
        this.state={
            ProductsData : [ ],
            SearchedData: ''
        }
    }
    fetchData = async () => {
        let url = "https://pixabay.com/api/?key=19432804-bd5acf9b634cc280bbdda0f8f&q=yellow+flowers&image_type=photo&pretty=true";
        let response = await axios.get(url)  //method="" /* get, delete, head, post, put and patch - required */

        }
    render(){
        

        return(
            <h1> Hello genius </h1>
         )
    }
}
export default App;