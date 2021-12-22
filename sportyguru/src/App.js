import React from "react";
import { UnivProvider } from "./currentUniv";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Home";
import SingleUniv from "./SingleUniv";
import { LoadingProvider } from "./loadingContext";
import { DataProvider } from "./dataContext";
// const initialState={
//   country:"",
//   university:[]
// };
const fetch_data=async()=>
{
  const url="http://universities.hipolabs.com/search?country=India";
  const response= await fetch(url);
  return await response.json();
}

function App()
{
//  const Mymap=new Map();
  //  ans.map((item)=>{
  //    const currCountry=item.country;
  //    initialState.country=item.country;
  //    initialState.university=[item.name];
  //    if(Mymap.has(currCountry))
  //    {
  //      const arr=Mymap.get(currCountry);
  //      Mymap.set(currCountry,[...arr,initialState]);
  //    }
  //    else Mymap.set(currCountry,[initialState]);
  //  });
  return (
  <UnivProvider>
  <DataProvider>
    <LoadingProvider>
     <Router>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/:id" element={<SingleUniv/>}/>
       </Routes>
     </Router>
    </LoadingProvider>
    </DataProvider>
  </UnivProvider>);
}

export default App;