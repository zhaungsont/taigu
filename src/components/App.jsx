import React from "react";
import Header from "./Header";
import Content from "./Content";
import Attributes from "./Attributes";
import TitleLinks from "./TitleLinks";


function App(){
    return(
        <div>
            <Header />
            <TitleLinks />
            <Content />
            <Attributes />
        </div>
    );
}

export default App;