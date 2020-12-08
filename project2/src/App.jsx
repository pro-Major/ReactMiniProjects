import React, {Component} from "react";
import Card from "./Card";
import Searchfeild from "./searchfeild";
class App extends Component  {
    constructor(){
        super();
        this.state = {
           allData: [] //created {allData} to fetch data.hits
       }


    };

    componentDidMount() {
        // console.log("Hello How are you?");
        fetch('https://pixabay.com/api/?key=19432804-bd5acf9b634cc280bbdda0f8f&q=yellow+flowers&image_type=photo&pretty=true')
        .then(response => response.json())
        .then(data => this.setState({allData:data.hits})); //Updated {allData} through setState method
       
    };


render() {  
    return(
        <div className="container">
           <div className = "row" > <Searchfeild/>  </div>
            <div className="row"> 
                {
                    this.state.allData.map(data =>  <Card data={data} key={data.id} />
                        
                    )
                    
                }
            </div>
        </div>
    )

}};
export default App;