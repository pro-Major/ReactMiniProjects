import React, { Component } from "react";
import Lang from "../context/languages";
class Button extends Component{
    constructor(props){
        super(props);
        this.state ={
            Lang : ''
        }
        
    }
    changelanguage = (data)=>{
        this.setState({Lang : data})
        // console.log(this.state.Lang);
      console.log(data);  
            }
    static contextType = Lang;
   
    
    render(){ 
        let text = (this.context.Lang == "english") ? "Hello User " : " Hola usuario ";   
        
        return(
            
            <React.Fragment>
                <div className="container"> 
                <button type="button" className="btn btn-danger btn-md" 
                onClick={()=> {this.changelanguage(`english`)}} > English </button>
                <button type="button" className="btn btn-primary btn-md" 
                onClick={()=> {this.changelanguage(`spanish`)}} > Espanol </button>
                </div>
            </React.Fragment>
        )

    }

}
export default Button;