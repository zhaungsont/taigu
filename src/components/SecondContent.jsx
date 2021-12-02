import React from "react";

//props.cont CH or EN

function SecondContent(props){
    return(
        <div>
            <img src="images/pic7.jpg" />
            {props.cont == "CH" ? <div><p>老第一眼上後我理劇草兒重：有但久科……種醫漸務真？寶面影候花生但氣股列燈見子生。是數一一業學分成在子非是落、量個張聲。人大的戰！身再較不管們遊成布花氣一們來省給看有觀：布聞利一……消日領得學今品、用如買教到死對境時，打和地養決，因就到些正由就坡雙口比，信保超最星好點外所常賣沒出們，正眼華力故度造，有這來文就筆資可是物天治該要北費了小們當個、出投中，許青此推布法學。條運年聽資一獎合一書種：而一都。跑的意狀小的金化久進果子代還了比就病到好角人生過可一來還很後初生招可成！</p></div>
            : <div><p>Donec gravida lorem fermentum, dapibus diam a, pulvinar nulla. Quisque ac nibh purus. Nunc cursus est non erat vestibulum, ut tincidunt nunc fermentum. Vivamus gravida augue sit amet fermentum placerat. In nec molestie ante, sed fringilla leo. Nam interdum dapibus erat. Sed quis tellus sed justo mollis efficitur id non metus. Nunc ut pharetra purus, sit amet placerat enim. Morbi non molestie sem. Duis ligula nunc, egestas eu tellus at, congue elementum nibh. Suspendisse hendrerit non felis efficitur accumsan.</p></div>}
        </div>
    )
}

export default SecondContent;