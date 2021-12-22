import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Navbar()
{
    return (<div className="NavBackground">
        <div className="NavTitle">
        <Link to="/" style={{textDecoration:"none",color:"white"}}>
        <FontAwesomeIcon icon={faLayerGroup} size="lg" className="logo"/>
        UniFodia
        </Link>
        </div>
    </div>)
}
export default Navbar;