import React from "react";

const UserName = (props) => {
    return (
        <button type="button" className="btn btn-outline-primary" > {props.name} </button>
    )

};
export default UserName;