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
                <Header/>
                <TitleLinks />
                <Content />
                <a onClick={changeLang}>
                <div className="sticker">
                中文 | English
                </div>
                </a>
                {/* <Sticker onClick={changeLang} /> */}
                <Footer />
            </div>             
            : 
            <div>
                <h1>Hi this is English website XD</h1>
                <a onClick={changeLang}>
                <div className="sticker">
                中文 | English
                </div>
                </a>
            </div>
            }</div>
        
    );


    
}

export default App;