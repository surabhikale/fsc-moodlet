import { useState } from "react"; 
import './fmoodlet.css' ;

function Moodlet({word,disabled}) {
  const [status, setStatus] = useState("required");

  const handleLeftClickEvent = () => {
    if (status === "required") {
      setStatus("current");
    } else if (status === "current") {
      setStatus("completed");
    } else if (status === "completed") {
      setStatus("current");
    }
  };

  const handleRightClickEvent = (event) => {
    event.preventDefault();
    if (status === "required") {
      setStatus("not required");
    }else{
      setStatus("required");
    }
  };

  return (
<>
<div className="container">
    <div 
    onClick={handleLeftClickEvent}
    onContextMenu={handleRightClickEvent}
    className={`moodlet ${status.replace(" ", "-")} ${word.length > 1 ? "word-version" : ""} ${disabled ? "disabled" : ""}
      ${status === "required" ? "required" : ""}
      ${status === "not required" ? "not-required" : ""}
      ${status === "current" ? "current" : ""}
      ${status === "completed" ? "completed" : ""}`}
    >
       <span className={`moodlet-text ${word.length > 1 ? "word-text" : ""}`}>{word.toUpperCase()}</span>
    </div>
    </div>
    
    </>
  )
}

export default Moodlet;
