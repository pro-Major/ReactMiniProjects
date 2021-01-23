import React, { Component, useEffect, useState } from "react";
import SearchFeild from "./component/searchfeild";
import List from "./component/list";
import axios from "axios";
const App=()=>{
    const [YoutubeData,setYoutubeData] = useState([]);
    const [searchData,setsearchData] = useState('cricke
 
    useEffect(async()=>{
        const response = axios.get('https://www.googleapis.com/youtube/v3/search',{
            params :{
                q : searchData,
                part:'snippet',
                type:'video',
                maxResults:10,
                key:'AIzaSyCTFtUWKBikDCI1mROZQ-3eYqYx2hmBaz0'
                }
            }
        );
        // console.log(await (await response).data.items)
        setYoutubeData(await (await response).data.items);

       console.log(searchData)
        
    },[searchData]);
    
    // let savingsearchdata= ()=>{
    //         setsearchData={savingsearchdata}
    //         console.log(searchData)
    // }
        return(
            <React.Fragment>
                <div className="container">
                <SearchFeild  setsearchData={setsearchData}/> 
                
                     <div className="row">
                         <div className="col-md-8">
                             <h1> VideoPlay</h1>
                      </div>
                     
                         <div className="col-md-4">
                             <List YoutubeData={YoutubeData}/>
                      </div>
                </div>
                </div>

                 
            </React.Fragment>
        )
  
}
export default App;



//Try 1
   // console.log("rendering");

    // useEffect=( () =>{
    //     const response = axios.get('https://www.googleapis.com/youtube/v3/search',{
    //         params :{
    //             q : searchData,
    //             part:'snippet',
    //             type:'video',
    //             maxResults:10,
    //             key:'AIzaSyCTFtUWKBikDCI1mROZQ-3eYqYx2hmBaz0'
    //             }
    //         }
    //     );
    //     setYoutubeData(await response.data.items);
    //     console.log(response)
    //     console.log('render');
        
    // },[]);
 
    //Try 2 
    
    // useEffect(()=>{
    //     fetchSearchInputData = async (data) => {
    //         let response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
    //             params:
    //                 {   q:data,
    //                     part:'snippet',
    //                     type:'video',
    //                     maxResults:10,
    //                     key:'AIzaSyCTFtUWKBikDCI1mROZQ-3eYqYx2hmBaz0'
    //                 }
    //         });
            
    //         // this.setState({video: await response.data.items})

    //         // console.log(response)
            
            
    //     }
    // },[])