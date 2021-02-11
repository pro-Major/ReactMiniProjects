import React,{Component} from "react";
class SearchProduct extends Component{
    constructor(props){
        super(props)
        this.state={
            searchfeild:'pizza',
        }
    }
    searchData=(e)=>{
        e.preventDefault();
        this.props.filterData(this.state.searchfeild)
        // console.log(this.state.searchfeild)
       
        
    }
    render(){
        return(
            <div className="container">
                <h1> Search Here...from pixabay API</h1>
              <div className="row">
                  <div className="col-md-12">
                      <form onSubmit={this.searchData} >
                          <input type="search" placeholder="search-products-here" className="form-control" 
                            onChange={(e) => this.setState({searchfeild : e.target.value})}
                            value={this.state.searchfeild}
                          />

                      </form>
                  </div>
              </div>
              </div>
        )
    }
}
export default SearchProduct;