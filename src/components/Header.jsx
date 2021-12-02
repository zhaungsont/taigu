import React from "react";
import { useState } from "react/cjs/react.development";

function Header(props){

    return(
        <div id="header-section">
            <div className="title-picture">
                <img className="cover-img" src="images/taigu2.jpg" alt="title" />
                <img className="logo" src="images/taigu-logo-placeholder-white.png" alt="太古齋" />
                    {props.slogan == "CH" ? <h3 className="slogan">專 業 字 畫 修 復 裝 裱</h3> : <h3 className="slogan EN1">Professional Art Restoration</h3>}                  
            </div>           
        </div>
    )
}

export default Header;