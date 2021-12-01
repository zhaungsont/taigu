import React from "react";
import CarouselGallery from "./CarouselGallery";

//props.cont CH or EN

function TitleContent(props){
    return(
        <div style={{textAlign: "left"}}>
        {props.cont == "CH" ? <div><h1>古今書畫　修復裝裱</h1><h3>太古齋為特殊作品，尺寸，裝裱方式設計製作，提供梧桐盒，酸枝框，特殊框及書畫屏風訂製。</h3></div>
        : <div><h1>FINE ART RESTORATION AND MOUNTING</h1><h3>Tai Gu Zai provides industry-leading designing and crafting services for custom artworks of all lengths and styles.</h3></div>
        }            
            <CarouselGallery />
            {props.cont == "CH" ? <div><p>演長表開自化爭臺一引也生得天一告金明白了邊兒水作是地海較業，分院生一他電層領包王的不分說選地道沒易小助就部藝舉……一房的究標苦產一北家再這國良期的結童？性們此麼驚客思待不一；服十陸色友歷到只特名，個這接我先質張主頭體增人定成手龍；須素大速感聲升歡義此生都發我正十麼的交、西國已你族其次有路接畫受。相家提學；比國機是招到木之朋戲市紀工單子李度示則因老跑友？送前不家來書美但自來有數該舉兒以雖形？</p></div>
        : <div><p>Lorem Ipsum</p></div>}
        </div>
)
}

export default TitleContent;