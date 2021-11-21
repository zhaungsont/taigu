import React from "react";

function Header(){
    return(
        <div id="header-section">
            <div className="title-picture">
                <img src="https://picsum.photos/2100/900" alt="title" />
            </div>

                <div className="title-section">
                    <img className="title" src="images/taigu-logo-placeholder-white.png" alt="logo" />
                    <h3 className="slogan">
                    專業字畫修復裝裱
                    </h3>
                </div>
        </div>
    )
}

export default Header;