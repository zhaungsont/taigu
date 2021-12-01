import React from "react";
import Map from "./Map";
import Contact from "./Contact";
import DivName from "./DivName";
import StoreInfo from "./StoreInfo";
import TitleContent from "./TitleContent";
import SecondContent from "./SecondContent";
import Sakana from "./Sakana";
import Attributes from "./Attributes";


function Content(props){

    return(
        <div id="content-section">


        <div className="columns">

            <div className="left-pane">            
                <TitleContent cont={props.cont} />

                <SecondContent cont={props.cont} />

            </div>

            <div className="right-pane">
                <div className="desktop-spacer"></div>

                <DivName name={props.cont == "CH" ? "聯絡資訊" : "Contact"} src="images/phone.png" />
                <Contact cont={props.cont} />

                <DivName name={props.cont == "CH" ? "營業資訊" : "Opening Hours"} src="images/time.png" />
                <StoreInfo cont={props.cont} />

                <DivName name={props.cont == "CH" ? "Google 地圖" : "Google Map"} src="images/map.png" />
                <div className="map-border">
                <Map />
                </div>

                <DivName name={props.cont == "CH" ? " 網站作者" : "About the Author"} src="images/teenager.png" />
                <Sakana cont={props.cont} />
            </div>
        </div>

        </div>
    )
}
export default Content;