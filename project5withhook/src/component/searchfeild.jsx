import React,{Component, useEffect, useState} from "react";
const SearchFeild=(props)=>{
    const [onclicksearch,setonclicksearch] = useState('');

   const handleFormSubmit =(data)=> {
        data.preventDefault()
        props.setsearchData({onclicksearch})

    }
 
   
    return (
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <input type="search" placeholder="Search from Youtube" 
                    className="form-control" name="searchvideo" 
                    onChange={(data)=> setonclicksearch(data.target.value)}
                    value={onclicksearch}
                    /> 
                </div>
            </form>
        </React.Fragment>
    )
}
     
   

export default SearchFeild;