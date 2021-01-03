import React, { Component } from "react";
class Post extends Component{
    constructor(){
        super();
        this.state={
            Postdata : []
        }
    }
  
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data=> this.setState({Postdata : data}));
        }
       
        
    render(){
        return(
           
            <React.Fragment>
               {    
               <div className="container">
                   <h1> Posts </h1>
               </div>
                   
               }
               
            {
                
                this.state.Postdata.slice(0,10).map((item) => {
                    return(
                        <div className="col-md-12" key={item.id}>
                            <div className="card text-left">
                              <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">{item.body}</p>
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
    
export default Post;