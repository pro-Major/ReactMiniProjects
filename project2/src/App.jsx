import React, {Component} from "react";
import Card from "./Card";
import Searchfeild from "./searchfeild";
class App extends Component  {
    constructor(){
        super();
        this.state = {
           allData: [], //created {allData} to fetch data.hits
           searchdata : ''
       }


    };

    componentDidMount() {
        // console.log("Hello How are you?");
        fetch('https://pixabay.com/api/?key=19432804-bd5acf9b634cc280bbdda0f8f&q=yellow+flowers&image_type=photo&pretty=true')
        .then(response => response.json())
        .then(data => this.setState({allData:data.hits})); //Updated {allData} through setState method
       
    };

    SearchProducts =(e) => {
        // console.log(e.target.value)
        this.setState({searchdata: e.target.value});
        
    };
   

render() {  
    let searchfilter = this.state.allData
                                    .filter(data => data.tags.toLowerCase()
                                    .includes(this.state.searchdata.toLowerCase() ));
                            // console.log(searchfilter);
    return(
        <div className="container">
           <div className = "row" >
                <Searchfeild SearchProductFilter={this.SearchProducts}/>  </div>
            <div className="row"> 
                {
                    searchfilter.map(data =>  <Card data={data} key={data.id} />
                        
                    )
                    
                }
            </div>
        </div>
    )

}};
export default App;