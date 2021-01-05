import React,{Component, useEffect, useState} from "react";
const SearchFeild=({savingsearchdata})=>{
    const [onclicksearch,setonclicksearch] = useState('cricket');

   const handleFormSubmit =(data)=> {
        data.preventDefault()
        // props.searchData(onclicksearch);
        // props.setsearchData(onclicksearch)      
        // console.log(onclicksearch);
    console.log(onclicksearch)
        savingsearchdata={onclicksearch}
        // console.log(savingsearchdata)
    

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