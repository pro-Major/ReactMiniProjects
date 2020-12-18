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
                useremail : '',

            }


        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            contactno : this.state.contactno,
            UserLogin: {
                userid : this.state.UserLogin.userid,
                useremail : this.state.UserLogin.useremail,
            }
       
            
        }
        console.log(data);
    };
    handleInputData = (e) => {
       this.setState({[e.target.name]:[e.target.value]})
       console.log(e.target.name)
      
    };
    setuserid = (e) => {
        let Uid = Object.assign({},this.state.UserLogin)
        Uid.userid = e.target.value
        this.setState({UserLogin: Uid })
        // console.log(e.target.name)
    };
    setuseremail =(e) => {
        let Uemail = Object.assign({},this.state.UserLogin)
        Uemail.useremail = e.target.value
        this.setState({UserLogin:Uemail })
        // console.log(e.target.name)
    } 
   
    render(){
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group"> 
                             FirstName :
                                <input type="text" className="form-control" placeholder="Enter FirstName"
                                name="firstname"
                                value={this.state.firstname}
                                onChange={this.handleInputData} /> 
                            </div>
                            <div className="form-group">
                                LastName : 
                                <input type="text" className="form-control" placeholder="Enter LastName"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={this.handleInputData} /> 
                            </div>
                            <div className="form-group">
                                Email :
                                <input type="text" className="form-control" placeholder="Enter Your Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputData} /> 
                            </div>
                            <div className="form-group">
                                Contact Number  :
                                <input type="text" className="form-control" placeholder="Enter Your Contact number"
                                name="contactno"
                                value={this.state.contactno}
                                onChange={this.handleInputData} /> 
                            </div>
                            <h3>User Login</h3> 
                            <div className="form-group">
                                User_Login_id :
                                <input type="text" className="form-control" placeholder="Enter Your Login Id"
                                name="userid"
                                value={this.state.UserLogin.userid}
                                onChange={this.setuserid} /> 
                            </div>
                            <div className="form-group">
                                User_Login_Email :
                                <input type="text" className="form-control" placeholder="Enter Your Email"
                                name="useremail`"
                                value={this.state.UserLogin.useremail}
                                onChange={this.setuseremail} /> 
                            </div>
                                <button type="submit"  className="btn btn-outline-danger" > Submit </button>
                        </form>
                    </div>
                </div>  
      </React.Fragment>
        )}
}
export default Form;