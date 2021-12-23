import React,{ useContext,useEffect,useState } from "react";
import Navbar from "./NavBar";
import List from "./list";
import { CircularProgress } from "@material-ui/core";
import { LoadingContext } from "./loadingContext";
import { dataContext } from "./dataContext";

function Home()
{
    const [data,setData]=useContext(dataContext);
    const [loading,setloading]=useContext(LoadingContext);
    const [winHeight,setHeight]=useState(window.innerHeight);
    const [winWidth,setWidth]=useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
          setHeight(window.innerHeight);
          setWidth(window.innerWidth);
    }
        window.addEventListener('resize', handleResize)
    })
    console.log(winHeight);
    return (
       <div className="body" style={{width:winWidth}}>
        <Navbar/>
        <div className="listBackground" style={loading?{height:(winHeight-80)}:{}}>
        <div className="listOuterBox" style={winWidth<=500?{width:winWidth}:{}}>
        {loading&&<div className="load"><CircularProgress size="6rem"/></div>}
        {!loading&&<List data={data}/>}
        </div>
        </div>
       </div>)
}
export default Home;