import React, { Component } from "react";
import Post from "./component/posts";
import User from "./component/users"
class App extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Post/>
                        </div>
                        <div className="col-md-6">
                        <User/>
                        </div>
                        
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}
export default App;