import React,{Component} from "react";
import axios from "axios";
class App extends Component{
    constructor(){
        super()
        this.state = {
        video:[] }
    }
    //method for giving search paramet to fetchSearchInputData function 
    componentDidMount(){
        this.fetchSearchInputData('saadgi');
    }
    //Method for Fetching data from youtube API 
    fetchSearchInputData = async (data) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:
                {   q:data,
                    part:'snippet',
                    type:'video',
                    maxResults:10,
                    key:'AIzaSyCTFtUWKBikDCI1mROZQ-3eYqYx2hmBaz0'
                }
        });
        console.log(response.data)
    }  
    render() {
       return (<h1> Hello Component</h1>)
    }
}
export default App;