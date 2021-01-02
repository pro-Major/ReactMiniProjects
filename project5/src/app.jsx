import React,{Component} from "react";
import axios from "axios";
import List from "./list";
import SearchFeild from "./searchfeild";
import VideoPlay from "./videodetails";
class App extends Component{
    constructor(){
        super()
        this.state = {
        video:[] }
    }
    //method for giving search paramet to fetchSearchInputData function 
    componentDidMount(){
        this.fetchSearchInputData('Selmon Bhai');
    }
    selectedVideoData(){
        this.state()
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
        
        this.setState({video: await response.data.items})
        // console.log(response)
        
    }  
    render() {
       return (
           <React.Fragment>
               <div className="container" >
                   <SearchFeild inputdata={this.fetchSearchInputData}/>
                   <div className="row">
                       <div className="col-md-8">
                       <VideoPlay selectedVideo={this.state.}/>
                       </div>
                       <div className="col-md-4">
                           <List videolist={this.state.video}/>
                       </div>
                   </div>
               </div>
               
           </React.Fragment>
       )
    }

}
export default App;