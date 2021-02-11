import React from "react"; 
import Avatar from "./user-avatar";
import UserName from "./user-name";

const Usercard = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6" >
                        <div className="card text-left" >  
                                <Avatar imgurl={props.imgurl}/>
                                <UserName name = {props.name}/>
                            <div className="card-body"> 
                                <p className="card-text"> {props.role}</p>
                            </div>
                        </div>
                         
                    </div>
                </div> 
            </div>
            
        </React.Fragment>
    )
};
export default Usercard;