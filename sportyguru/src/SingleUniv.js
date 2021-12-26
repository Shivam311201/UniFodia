import React,{useContext,useState,useEffect} from "react";
import Navbar from "./NavBar";
import { univContext } from "./currentUniv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { LoadingContext } from "./loadingContext";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataContext } from "./dataContext";
import { useParams } from "react-router";
import { CircularProgress } from "@material-ui/core";

function SingleUniv()
{
    const {name}=useParams();
    const [univ, setUniv]=useContext(univContext);
    const [data, setData]=useContext(dataContext);
    const [loading,setloading]=useContext(LoadingContext);
    const [winHeight,setHeight]=useState(window.innerHeight);
    const [winWidth,setWidth]=useState(window.innerWidth);

    data?.map((item)=>{
        if(item.name===name)
        setUniv(item);
    });

    useEffect(() => {
        function handleResize() {
          setHeight(window.innerHeight);
          setWidth(window.innerWidth);
    }
        window.addEventListener('resize', handleResize)
    });

    return (<div className="body" style={{width:winWidth}}>
        <Navbar/>
        <div className="UnivBackground" style={{height:(winHeight-80)}}>
        <div className="listOuterBox" style={winWidth<=500?{width:winWidth}:{}}>
        {loading&&<div className="load"><CircularProgress size="6rem"/></div>}
        {!loading&&<div>
        <div className="listTitle1">{univ.name}</div>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Website:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
               {univ?.web_pages?.map((item,key)=>(
                   <div key={key}>{univ.web_pages.length>1?key+1+") ":""}<Link className="linkto" to={item}>{item}</Link></div>
               ))}
           </Col> 
        </Row>
        {univ["state-province"]&&<Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>State-Province:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {univ["state-province"]}
           </Col> 
        </Row>}
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Country:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {univ.country}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Alpha Two Code:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
            {univ.alpha_two_code}
           </Col> 
        </Row>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Domains:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
               {univ?.domains?.map((item,key)=>(
                   <div key={key}>{univ.web_pages.length>1?key+1+") ":""}{item}</div>
               ))}
           </Col> 
        </Row>
        </div>}
        </div>
        </div>
    </div>)
}
export default SingleUniv;