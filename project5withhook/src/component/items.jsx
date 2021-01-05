import React from "react";
const Item = (props) => {
  console.log(props)
  if(!props.videoitem) {return( <h1> Loading... </h1>)}
return( 
    
    <React.Fragment>
         <div className="card" style={{width: "400px"}} >
   <img className="card-img-top" src={props.videoitem.snippet.thumbnails.high.url}  alt={props.videoitem.snippet.title}  style={{width:"100%"}} /> 
   <div className="card-body">
     <h5 className="card-title">{props.videoitem.snippet.title}</h5>
    <p className="card-text">Channel : {props.videoitem.snippet.channelTitle}</p>
  
   </div>
 </div>
     </React.Fragment>

)
}
export default Item;