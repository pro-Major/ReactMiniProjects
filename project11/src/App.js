import { Button } from "bootstrap";
import React,{Component} from "react"
import User from "./component/users";
import Button from "./component/button";
import Inputfeild from "./component/inputfeild";
import Post from "./component/post";
class App extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <React.Fragment>
                 <User/>
                 <Button/>
                 <Inputfeild/>
                 <Post/>
            </React.Fragment>
           
        )
    }
}
export default App;