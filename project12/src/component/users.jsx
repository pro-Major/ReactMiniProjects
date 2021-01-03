import React, { Component } from "react";
class User extends Component{
    constructor(){
        super()
        this.state={
            Userdata : []
        }
        // console.log(this.state.Userdata)
    }
 
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        // .then(data=> console.log(data))
        
        // .then(response=> console.log(response)) we are getting data corrrectly but why not in Userdata 
        .then(data=> this.setState({Userdata : data}))
        
        
        // console.log(this.state.Userdata);
    }
    render(){
        return(
            <React.Fragment>
                {    
               <div className="container">
                   <h1> Users </h1>
               </div>
                   
               }
           {
               this.state.Userdata.map((item)=> {
                    return(
                        <div className="col-md-12" key={item.id}>
                            <div className="card text-left">
                              <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.email}</p>
                              </div>
                            </div>
                        </div>
                    )

               })
           }
       </React.Fragment>

        )
       
    }
    
}
export default User;