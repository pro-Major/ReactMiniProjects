import React, { Component } from "react";
import Lang from "../context/languages";
class Inputfeild extends Component{
    static contextType = Lang;
    render(){
        const text = this.context;
        return(
            <React.Fragment>
                <div className="container">
                    <label htmlFor="username" > <b> {text} </b> </label>
                    <input type="text" className="form-control" placeholder="enter username " /* style={{width : "155px"}} */ />  
                </div>
            </React.Fragment>
        )
        
    }
} 
export default Inputfeild;