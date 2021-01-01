import React,{Component} from "react";
import Lang from "../context/languages"
class Post extends Component{
    constructor(){
        super()
    }
    static contextType = Lang;
    render(){
        const text02 = this.context;
        // const setlanguage = (this.context.Lang == 'english') ? 'India' : 'Europe';
        return(

            <React.Fragment>
                <h1> Welcome to {text02}</h1>
            </React.Fragment>
        )
    }
}
export default Post;