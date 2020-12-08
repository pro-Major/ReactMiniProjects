import React from "react";
const Card = ({data}) => {
return(
    <div className="col-md-4" key={data.id}> 
        <div className="card text-left">
          <img className="card-img-top" src={data.previewURL} alt="" />
          <div className="card-body">
<h4 className="card-title"> {data.tags}</h4>
<p className="card-text">Views : {data.views}</p>
          </div>
        </div>
    </div> )

}   
export default Card;