import React,{Component} from "react"
import User from "./component/users";
// import Button from "./component/button";
// import Inputfeild from "./component/inputfeild";
import Post from "./component/post";
class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <User/>
                        </div>
                        <Post/>
                    </div>
                </div>
                {/* <div className="container">  //This was my CSS
                <User/>
                </div> 
                  */}
                
            </React.Fragment>
           
        )
    }
}
export default App;