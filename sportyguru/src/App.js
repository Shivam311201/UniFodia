import React,{useContext,useState} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { dataContext } from "./dataContext";
import { LoadingContext } from "./loadingContext";
import Home from "./Home";
import SingleUniv from "./SingleUniv";

const fetch_data=async()=>
{
  const url="http://universities.hipolabs.com/search?country=India";
  const response= await fetch(url);
  return await response.json();
}

function App()
{
  const [data,setData]=useContext(dataContext);
  const [loading,setloading]=useContext(LoadingContext);
    fetch_data()
     .then((ans)=>{
      setData(ans);
      setloading(false);
    });

    return (<Router>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/:name" element={<SingleUniv/>}/>
       </Routes>
     </Router>);
}

export default App;