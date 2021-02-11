import React from "react";
import ReactDom from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./app";



ReactDom.render(<App/>, document.getElementById('root'));



// const App = () => {
//     return <div>
//             <label htmlFor="username"> Username </label>
//             <input type="text" className="in" placeholder="Enter your Name "/> 
//             <button type="button" style={{backgroundColor: 'blue', color:'white'}} > Submit  </button>
//     </div>

// }


