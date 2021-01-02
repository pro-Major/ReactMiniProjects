import React from "react";
const App=()=>{
    const changethenumber=()=>{
        console.log("clicked ")
    }
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
            <h2 > 0  </h2>
            <button className="btn btn-danger" onClick={changethenumber}> Click Me </button>
            </div>
            
            
        </React.Fragment>
    )
}
export default App;