import React from "react";
import { useState } from "react/cjs/react.development";

function Header(props){

    return(
        <div id="header-section">
            <div className="title-picture">
                <img className="cover-img" src="images/boss5.jpg" alt="title" />
                <img className="logo" src="images/taigu-logo-placeholder-white.png" alt="太古齋" />
                <h3 className="slogan">
                    {props.slogan}
                    </h3>
            </div>           
        </div>
    )
}

export default Header;