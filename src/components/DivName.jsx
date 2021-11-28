import React from "react";

const sp = " ";

function DivName(props){
    return (
        <div className="div-name">
            <img className={props.class} src={props.src} alt="照片無法正常顯示" /> 
            {sp} {props.name}
        </div>
    )

}

export default DivName;