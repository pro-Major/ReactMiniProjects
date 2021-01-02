import React, { useState } from "react";
import Count from "./count";
//useState (ReactHook) must be defined inside of top level function
const App=()=>{
    const state = useState();
    // console.log(state)
    const [count,setCount] = useState(1); //useerState me initial value hai count me current value hai setcount me update value hai 
    
    const changethenumber=()=>{
        
        setCount(count + 1); 
        // console.log(countednumber)
    };
    return(
        <React.Fragment>
            
          <div className="container"  style={{
          backgroundColor:"skyblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
           height: "600px",
           border : "1px solid black " 
         
        }}>
            <div className="column" >
            {/* <Count count={state.count}/> */} <h1> {count}</h1>
            <button className="btn btn-danger" onClick={changethenumber}> Click Me </button>
            </div>
            </div>
            
            
        </React.Fragment>
    )
}
export default App;