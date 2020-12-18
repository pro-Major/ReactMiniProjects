import React,{Component} from "react";
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            contactno : '',
            UserLogin:{
                userid :'',
                email : '',

            }

        }
    }
    render(){
        return <h1> Form </h1> 
    }
}
export default Form;