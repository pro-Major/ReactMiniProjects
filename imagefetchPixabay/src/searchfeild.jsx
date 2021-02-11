import React, {Component} from "react";


class Searchfeild extends Component {
    constructor(props){
        super(props)
    
    }
    render() {
       
        return(<React.Fragment>
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="search" placeholder="Enter Anything You Like The Most.." className="form-control" 
                        onChange={ (e) => this.props.SearchProductFilter(e)} />
                    </div>
                </div>
        </React.Fragment>

        )
    }


};
export default Searchfeild;