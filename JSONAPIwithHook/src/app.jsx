import React, {useEffect, useState} from "react";
function App(){
        const[data,setData] = useState('users');
        const[apiData,setApiData] =useState([]);
        // const[data2,setData2] = useState('MAjor');
       
            useEffect(()=>{
               fetch(`https://jsonplaceholder.typicode.com/${data}`)
               .then((response)=> response.json())
               .then((items)=> setApiData(items))
               console.log(apiData)
            },[data]); 
        

        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button  type="button" className="btn btn-primary"
                            onClick={()=> setData('users')} >USERS </button>
                            <button  type="button" className="btn btn-danger"
                            onClick={()=> setData('posts')}>POST </button>
                        </div>
                    </div>
                   
           
           
              {    
              <div className="container">
                  <h1> {data} </h1>
              </div>
                  
              }
              
           {
               apiData.slice(0,10).map((item) => {
                   if(item.title) {
                    return(
                        <div className="col-md-12" key={item.id}>
                            <div className="card text-left">
                              <div className="card-body">
                                <h4 className="card-title" > {item.title}</h4>
                                <p className="card-text">{item.body}</p>
                              </div>
                            </div>
                        </div>
                    )

                   }
                   else {
                    return(
                        <div className="col-md-12" key={item.id}>
                        <div className="card text-left">
                          <div className="card-body">
                            <h4 className="card-title" > {item.name}</h4>
                            <p className="card-text">{item.email}</p>
                          </div>
                        </div>
                    </div>
    
                       )

                   }
                 
                   
                   
               })
           }
       
   
       
   
                </div>
            </React.Fragment>
        )
}

export default App;