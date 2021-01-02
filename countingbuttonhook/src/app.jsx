import React, { useState } from "react";
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
           height: "200px",
           border : "1px solid black " 
         
        }}>
            <h2 > {count} </h2>
            <button className="btn btn-danger" onClick={changethenumber}> Click Me </button>
            </div>
            
            
        </React.Fragment>
    )
}
export default App;