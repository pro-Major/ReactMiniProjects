import React from "react";
import faker from "faker";
import Usercard from "./card";
import UserApproval from "./user_approval";



const App = () =>  {
return (
    <React.Fragment> 
            <div className="container"> 
                <UserApproval>
                        <Usercard   name="Atul Dalvi"
                        role="Sr. Front End Developer" 
                        imgurl={faker.image.people()}  
                /> </UserApproval>

                <UserApproval>
                <Usercard   name="Mayur"
                        role="Sr. Front End Developer" 
                        imgurl={faker.image.food()}
                /> 
                </UserApproval>
            </div>
    </React.Fragment>


)
};
export default App; 