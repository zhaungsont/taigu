import React from "react";
import Attributes from "./Attributes";

function Footer(){
    return(
        <div>
            {/* <div className="gradient"></div> */}

            <div className="footer">
                <p>{process.env.REACT_APP_API_KEY}</p>
                <p>太古 Taigu by Michael Chuang <br /> ©Copyright 2021</p>
                <div>Icons made by <a href="" title="Gregor Cresnar">Gregor Cresnar</a>, <a href="https://www.flaticon.com/authors/prosymbols-premium" title="Prosymbols Premium">Prosymbols Premium</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>, and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </div>

    )
}

export default Footer;