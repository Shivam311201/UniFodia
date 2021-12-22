import React,{ useState,useContext } from "react";
import Navbar from "./NavBar";
import List from "./list";
import { CircularProgress } from "@material-ui/core";
import { LoadingContext } from "./loadingContext";
import { dataContext } from "./dataContext";

function Home()
{
    const [data,setData]=useState(dataContext);
    const [loading,setloading]=useContext(LoadingContext);
    const fetch_data=async()=>
    {
      const url="http://universities.hipolabs.com/search?country=India";
      const response= await fetch(url);
      return await response.json();
    }

    fetch_data()
     .then((ans)=>{
       setData(ans);
       setloading(false);
    });

   return (
       <div className="body">
        <Navbar/>
        <div className="listBackground" style={loading?{height:"497px"}:{}}>
        <div className="listOuterBox">
        {loading&&<div className="load"><CircularProgress size="6rem"/></div>}
        {!loading&&<List data={data}/>}
        </div>
        </div>
       </div>
   )
}
export default Home;