import { React, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import TitleLinks from "./TitleLinks";
import Sticker from "./Sticker";
import Footer from "./Footer";


function App(){

    return(
        <div>
            <Header />
            <TitleLinks />
            <Content />
            {/* <Sticker /> */}
            <Footer />
        </div>
    );
}

export default App;