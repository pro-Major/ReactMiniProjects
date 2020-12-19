import React from "react";
const Item = (props) => {
return( 
    <React.Fragment>
        <div class="card" style={{width: '100%'}}>
  <img class="card-img-top" src="{props.videoitem.snippet.thumnails.high.url}" alt="{props.videoitem.snippet.thumbnails.title}" />
  <div class="card-body">
    <h5 class="card-title">{props.videoitem.snippet.thumbnails.title}</h5>
    <p class="card-text">{props.videoitem.snippet.description}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </React.Fragment>

)
}
export default Item;