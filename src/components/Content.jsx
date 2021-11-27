import React from "react";
import Map from "./Map";
import Contact from "./Contact";
import DivName from "./DivName";
import StoreInfo from "./StoreInfo";


function Content(){
    return(
        <div id="content-section">

        <div className="columns">

        <div className="left-pane">
                {/* <p>LEFT Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In venenatis leo sit amet turpis porttitor, nec rhoncus arcu vulputate. 
                Quisque fringilla consequat eros eget tempor. Mauris fermentum, risus ac iaculis vestibulum, magna justo sagittis elit, quis consequat quam neque eu urna. Proin hendrerit in dui ornare finibus. Etiam posuere mollis risus. Vivamus dignissim hendrerit metus ac interdum. Curabitur sed orci magna. Quisque ac purus suscipit, ullamcorper orci at, commodo elit.
                </p> */}

                <img src="images/pic4.jpg" alt="莊老闆華山1914文創產業園區佈展《讀衣III》花絮" />

                <div>
                <h1>古今書畫　修復裝裱</h1>
                <p>太古齋為特殊作品，尺寸，裝裱方式設計製作，提供梧桐盒，酸枝框，特殊框及書畫屏風訂製。 <br />
                   由於工作關係，莊老闆很難於臉書給予回覆，請以電話或 Gmail 聯絡：<a href="tel: 02-2702-3371">(02) 2702-3371</a>／<a href="mailto:taigu168@gmail.com">taigu168@gmail.com</a>
                </p>
                
                
                </div>
            </div>

            <div className="right-pane">
                <DivName name="聯絡資訊" src="images/phone.png" />
                <Contact />
                
                <DivName name="Google 地圖" src="images/map.png" />
                <Map />

                <DivName name="營業資訊" src="images/time.png" />
                <StoreInfo />

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