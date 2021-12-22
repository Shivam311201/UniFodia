import React,{useContext} from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { univContext } from "./currentUniv";
import { useNavigate } from "react-router";
import "./styles.css";
function List(props) {
    const [univ, setUniv]=useContext(univContext);
    const navigate=useNavigate();
    function setList(item)
    {
      setUniv(item);
      navigate("/"+item.name);
    }
    return (<div>
    <div className="listTitle">
    <FontAwesomeIcon icon={faCaretRight} size="lg" className="arrow"/>India</div>
    <div>
    {props.data.map((item)=>(
      <div className="universityName" onClick={()=>setList(item)}>- {item.name}</div>
    ))}
    </div>
    </div>);
}
export default List;