import React from "react";
import Map from "./Map";
import Contact from "./Contact";
import DivName from "./DivName";


function Content(){
    return(
        <div id="content-section">

        <div className="columns">

        <div className="left-pane">
                <p>LEFT Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In venenatis leo sit amet turpis porttitor, nec rhoncus arcu vulputate. 
                Quisque fringilla consequat eros eget tempor. Mauris fermentum, risus ac iaculis vestibulum, magna justo sagittis elit, quis consequat quam neque eu urna. Proin hendrerit in dui ornare finibus. Etiam posuere mollis risus. Vivamus dignissim hendrerit metus ac interdum. Curabitur sed orci magna. Quisque ac purus suscipit, ullamcorper orci at, commodo elit.
                </p>
            </div>

            <div className="right-pane">
                <DivName name="聯絡資訊" src="images/phone.png" />

                <Contact />
                
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