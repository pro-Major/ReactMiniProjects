import React from "react";
import Items from "./Items"
const List = (props) => {
    return(props.videolist.map((item) => <Items videoitem={item} key={item.id.videoId}  /> )) 

};
export default List;