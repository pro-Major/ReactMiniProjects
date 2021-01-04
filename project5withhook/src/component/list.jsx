import React from "react";

import Items from "./items"
const List = (props) => {
    return(YoutubeData.map((item) => <Items videoitem={item} key={item.id.videoId}  /> )) 

};
export default List;