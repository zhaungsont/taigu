import React from "react";

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=" + process.env.WEATHER_API + "&units=metric&lang=zh_tw";


let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
let dayCH = today.toLocaleString("zh-TW", options);
let dayEN = today.toLocaleString("en-US", options);


const sp = " ";

function TitleLinks(props){
    return(
        <div className="title-links">
            <a href="https://goo.gl/maps/vkNBMjAm7jaSzB8m7"><i className="fas fa-map-marker-alt"></i></a> {sp}
            <a href="https://www.facebook.com/taigu168/"><i className="fab fa-facebook"></i></a> {sp}
            <a href="https://github.com/zhaungsont"><i className="fab fa-github"></i></a>
            <p>{sp}{props.day == "EN" ? dayEN : dayCH}</p>
            <hr />

        </div>
    )
}

export default TitleLinks;