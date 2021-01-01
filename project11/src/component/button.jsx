import React, { Component } from "react";
import Lang from "../context/languages";
class Button extends Component{
    constructor(props){
        super(props);
      
        
    }
    
    static contextType = Lang;
   
    
    render(){ 
        let text = (this.context == "english") ? "Hello User " : " Hola usuario ";   
        
        return(
            
            <React.Fragment>
                
            </React.Fragment>
        )

    }

}
export default Button;