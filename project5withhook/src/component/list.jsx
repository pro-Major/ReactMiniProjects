import React from "react";

import Items from "./items"
const List = (props) => {
    // console.log(props.YoutubeData)
   if(!props.YoutubeData){return (<h1> Loading </h1>)}
    return(props.YoutubeData.map((item) => <Items videoitem={item} key={item.id.videoId}  /> )) 

};
export default List;