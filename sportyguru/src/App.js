import React,{useContext,useState} from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { dataContext } from "./dataContext";
import { LoadingContext } from "./loadingContext";
import Home from "./Home";
import SingleUniv from "./SingleUniv";

  const url="http://universities.hipolabs.com/search?country=India";
  
  const fetch_data=fetch(url)
  .then((resposne)=>resposne.json())
  .then((data)=>{
    return data;
  });

function App()
{
  const [data,setData]=useContext(dataContext);
  const [loading,setloading]=useContext(LoadingContext);

  const MyData=async()=>
  {
    const a=await fetch_data;
    setData(a);
    setloading(false);
  } 
  MyData();

    return (<Router>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/:name" element={<SingleUniv/>}/>
       </Routes>
     </Router>);
}

export default App;