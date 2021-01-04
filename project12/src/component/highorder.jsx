import React, { Component } from "react";
const HighOrderComponent =(reusablecomponent,jsonapi)=>{
    class HighOrderComponent extends Component{
        constructor(){
            super()
            this.state={
                data:[]

            }
        }
        componentDidMount(){
            fetch(jsonapi)
            .then(response => response.json())
            .then(data => this.setState({data : data }) )
        }
        render(){
            if(this.state.data.length < 1) {return <h1> Loading </h1>};
            return <reusablecomponent d={this.state.data} {...this.props}/> 
            
        }
    }
    return HighOrderComponent;
}
export default HighOrderComponent;