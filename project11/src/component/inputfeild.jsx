import React, { Component } from "react";
import Lang from "../context/languages";
// import Selectedtlanguage from "../context/languages";
import Post from "./post";
class Inputfeild extends Component{
    static contextType = Lang;
    // static contextType = Selectedtlanguage;
    render(){
        
            const text = (this.context == "english") ? "English  " : " Spanish "; 
        const text01 = (this.context == "english") ? "Enter username  " : "introduzca su nombre de usuario"; 
        
        return(
            <React.Fragment>
                <div className="container">
                    <label htmlFor="username" > <b> Selected Language : {text} </b> </label>
                    <input type="text" className="form-control" placeholder={text01} /* style={{width : "155px"}} */ />  
                </div>
            </React.Fragment>
        )
        
    }
} 
export default Inputfeild;