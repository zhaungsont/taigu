import { React, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import TitleLinks from "./TitleLinks";
import Sticker from "./Sticker";
import Footer from "./Footer";


function App(){
    var [lang, setLang] = useState(1)

    function changeLang() {
        setLang(!lang);
    }

    return(<div>
        {lang ?
            <div>
                <Header slogan="專 業 字 畫 修 復 裝 裱"/>
                <TitleLinks day="CH" />
                <Content cont="CH" />
                <a onClick={changeLang}><div className="sticker">{lang ? "Eng | 中文" : "中文 | Eng" }</div></a>
                <Footer />
            </div>             
            : 
            <div>
                <Header slogan="Professional Art Restoration"/>
                <TitleLinks day="EN" />
                <Content cont="EN" />

                <a onClick={changeLang}><div className="sticker">{lang ? "Eng | 中文" : "中文 | Eng"}</div></a>
            </div>
            }</div>
        
    );


    
}

export default App;