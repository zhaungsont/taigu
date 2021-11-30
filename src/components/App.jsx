import { React, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import TitleLinks from "./TitleLinks";
import Sticker from "./Sticker";
import Footer from "./Footer";


function App(){

    var [website, websiteSetter] = useState(
        <div>
            <button  onClick={func1}>1</button>
            <button  onClick={func2}>2</button>
            <button  onClick={reset}>Reset</button>


            <Header/>
            <TitleLinks />
            <Content />
            {/* <Sticker /> */}
            <Footer />
        </div>
    );

    function func1(){
        websiteSetter(<div>
            <button  onClick={func1}>1</button>
            <button  onClick={func2}>2</button>
            <button  onClick={reset}>Reset</button>

                <Footer />
                <TitleLinks />
                <Header/>

            </div>)
    }
    function func2(){
        websiteSetter(<div>
            <button  onClick={func1}>1</button>
            <button  onClick={func2}>2</button>
            <button  onClick={reset}>Reset</button>

            <Content />

            </div>)
    }

    function reset(){
        websiteSetter(
            <div>
            <button  onClick={func1}>1</button>
            <button  onClick={func2}>2</button>
            <button  onClick={reset}>Reset</button>


            <Header/>
            <TitleLinks />
            <Content />
            {/* <Sticker /> */}
            <Footer />
            </div>
        )
    }


    return(
        <div>
        {website}
        </div>
    );

    
}

export default App;