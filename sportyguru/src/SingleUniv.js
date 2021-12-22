import React,{useContext, useEffect} from "react";
import { univContext } from "./currentUniv";
import Navbar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function SingleUniv()
{
    const [univ, setUniv]=useContext(univContext);
    console.log(univ);
    console.log(univ);
    return (<div className="body">
        <Navbar/>
        <div className="UnivBackground">
        <div className="listOuterBox">
        <div className="listTitle1">{univ.name}</div>
        <Row style={{display:"flex"}}>
           <Col lg={3} md={3} sm={3} xs={3} className="detailsTitle">
           <FontAwesomeIcon icon={faCaretRight} size="md" className="arrow"/>Website:
           </Col> 
           <Col lg={9} md={9} sm={9} xs={9} className="details">
               {univ.web_pages.map((item,key)=>(
                   <div id={key}>{univ.web_pages.length>1?key+1+") ":""}<Link className="linkto" to={item}>{item}</Link></div>
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
               {univ.domains.map((item,key)=>(
                   <div id={key}>{univ.web_pages.length>1?key+1+") ":""}{item}</div>
               ))}
           </Col> 
        </Row>
        </div>
        </div>
    </div>)
}
export default SingleUniv;