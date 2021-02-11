import React,{Component} from "react";
class SearchFeild extends Component{
   
    constructor(props){
        super(props);
        this.state ={
            searchvideo : ''
                    }
        // console.log(this.props.inputdata())
    }
    handleFormSubmit =(data)=> {
        data.preventDefault()
        this.props.inputdata(this.state.searchvideo)


    }
    render(){
    return (
        <React.Fragment>
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <input type="search" placeholder="Search from Youtube" 
                    className="form-control" name="searchvideo" 
                    onChange={(data)=> this.setState({searchvideo: data.target.value})}
                    value={this.state.searchvideo}
                    /> 
                </div>
            </form>
        </React.Fragment>
    )
}
     
}   

export default SearchFeild;