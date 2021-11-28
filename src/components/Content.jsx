import React from "react";
import Map from "./Map";
import Contact from "./Contact";
import DivName from "./DivName";
import StoreInfo from "./StoreInfo";
import TitleContent from "./TitleContent";
import CarouselGallery from "./CarouselGallery";

function Content(){
    return(
        <div id="content-section">


        <div className="columns">

        <div className="left-pane">            
            <TitleContent />

            </div>

            <div className="right-pane">
                <div className="desktop-spacer"></div>

                <DivName name="聯絡資訊" src="images/phone.png" />
                <Contact />

                <DivName name="營業資訊" src="images/time.png" />
                <StoreInfo />

                <DivName name="Google 地圖" src="images/map.png" />
                <Map />


                <p>RIGHT Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In venenatis leo sit amet turpis porttitor, nec rhoncus arcu vulputate. 
                Quisque fringilla consequat eros eget tempor. Mauris fermentum, risus ac iaculis vestibulum, magna justo sagittis elit, quis consequat quam neque eu urna. Proin hendrerit in dui ornare finibus. Etiam posuere mollis risus. Vivamus dignissim hendrerit metus ac interdum. Curabitur sed orci magna. Quisque ac purus suscipit, ullamcorper orci at, commodo elit.
                </p>
            </div>
        </div>

        </div>
    )
}
export default Content;