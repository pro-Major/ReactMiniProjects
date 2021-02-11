import React,{Component} from "react"
import User from "./component/users";
import Button from "./component/button";
import Lang from "./context/languages";
// import Button from "./component/button";
// import Inputfeild from "./component/inputfeild";
import Post from "./component/post";
class App extends Component{
    constructor(){
        super();
        this.state ={
            lang : ''
        };
        
    }
    changelanguage = (data)=>{
        this.setState({lang : data})
        // console.log(this.state.lang)
    //   console.log(data);  
            }
    
    render(){
        return(
            <React.Fragment>

              
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Lang.Provider value={this.state.lang}> 
                            <User />
                            </Lang.Provider>
                            
                           
                            
                            
                           
                        </div>
                        
                    </div>
                </div>
                
               
                    <div className="container"> 
                <button type="button" className="btn btn-danger btn-md" 
                onClick={()=> {this.changelanguage(`english`)}} > English </button>
                <button type="button" className="btn btn-primary btn-md" 
                onClick={()=> {this.changelanguage(`spanish`)}} > Espanol </button>
                </div>
          


                  <div className="container">
                  <Lang.Provider value={this.state.lang}> 
                  <Post/>
                  </Lang.Provider>
                  </div>
                
            </React.Fragment>
           
        )
    }
}
export default App;