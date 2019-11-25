  
import React from "react";
import "./style.css";

function Booklist({children}) {
    return (
        <div className="resultsBody">
            <h1 className="results">Results</h1>
            <div>{children}</div>
        </div>
    )
}

export default Booklist;