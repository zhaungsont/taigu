import React from "react";

//props.cont = "EN" or "CH"

function Sakana(props){
    return(
        <div className="sakana sidepane">
            <table>
            <tbody>
                <tr>
                    <td className="t1">GitHub</td>
                    <td><a href="https://github.com/zhaungsont">zhaungsont</a></td>
                </tr>
                <tr>
                    <td className="t1">{props.cont == "CH" ? "電玩資訊站" : "Indie Game News Outlet"}</td>
                    <td><a href="https://www.wasdbeat.com/">BacMuse</a></td>
                </tr>
                <tr>
                    <td className="t1">{props.cont == "CH" ? "個人網站" : "Personal Website"}</td>
                    <td><a className="wordpress" href="https://zhsont.wordpress.com/">WordPress</a></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Sakana;