import React from "react";
const UserApproval = (props) => {
    return( <React.Fragment>
            <div className="row"> 
                <div className="col-md-6"> 
                    <div >   {props.children}
                        <button type="button"className="btn btn-primary">APPROVE</button> 
                        <button type="button"className="btn btn-danger">REJECT</button> 
                    </div>
                </div>
            </div>
            </React.Fragment>
        
        
        
        )
};

export default UserApproval; 