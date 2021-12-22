import React,{ useContext } from "react";
import Navbar from "./NavBar";
import List from "./list";
import { CircularProgress } from "@material-ui/core";
import { LoadingContext } from "./loadingContext";
import { dataContext } from "./dataContext";

// const initialState={
//   country:"",
//   university:[]
// };

function Home()
{
    const [data,setData]=useContext(dataContext);
    const [loading,setloading]=useContext(LoadingContext);
    
    // const Mymap=new Map();
    // data?.map((item)=>{
    //  const currCountry=item.country;
    //  initialState.country=item.country;
    //  initialState.university=[item.name];
    //  if(Mymap.has(currCountry))
    //  {
    //    const arr=Mymap.get(currCountry);
    //    Mymap.set(currCountry,[...arr,initialState]);
    //  }
    //  else Mymap.set(currCountry,[initialState]);
    // });
    // const key=Mymap.keys();
    // for(var ele of key)
    //  console.log(ele);
   
    return (
       <div className="body">
        <Navbar/>
        <div className="listBackground" style={loading?{height:"497px"}:{}}>
        <div className="listOuterBox">
        {loading&&<div className="load"><CircularProgress size="6rem"/></div>}
        {!loading&&<List data={data}/>}
        </div>
        </div>
       </div>)
}
export default Home;