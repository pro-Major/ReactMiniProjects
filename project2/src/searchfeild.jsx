import React, {Component} from "react";


class Searchfeild extends Component {
    SearchProducts=() => {
        console.log("Search Feild Works")
    }
    render() {
       
        return(<React.Fragment>
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="search" placeholder="Enter Anything You Like The Most.." className="form-control" 
                        onChange={()=> this.SearchProducts()} />
                    </div>
                </div>
        </React.Fragment>

        )
    }
};
export default Searchfeild;