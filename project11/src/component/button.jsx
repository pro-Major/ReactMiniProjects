import React, { Component } from "react";
class Button extends Component{
    render(){   
        return(
            <React.Fragment>
                <div className="container"> 
                <button type="button" className="btn btn-danger btn-md" > English </button>
                <button type="button" className="btn btn-primary btn-md" > Espanol </button>
                </div>
            </React.Fragment>
        )

    }

}
export default Button;