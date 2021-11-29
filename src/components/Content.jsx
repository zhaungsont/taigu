import React from "react";
import Map from "./Map";
import Contact from "./Contact";
import DivName from "./DivName";
import StoreInfo from "./StoreInfo";
import TitleContent from "./TitleContent";
import SecondContent from "./SecondContent";
import Sakana from "./Sakana";
import Attributes from "./Attributes";


function Content(){
    return(
        <div id="content-section">


        <div className="columns">

            <div className="left-pane">            
                <TitleContent />

                <SecondContent />

            </div>

            <div className="right-pane">
                <div className="desktop-spacer"></div>

                <DivName name="聯絡資訊" src="images/phone.png" />
                <Contact />

                <DivName name="營業資訊" src="images/time.png" />
                <StoreInfo />

                <DivName name="Google 地圖" src="images/map.png" />
                <div className="map-border">
                <Map />
                </div>

                <DivName name="網站作者" src="images/teenager.png" />
                <Sakana />

                {/* <DivName name="致謝" src="images/copyright.png" />
                <Attributes /> */}
            </div>
        </div>

        </div>
    )
}
export default Content;