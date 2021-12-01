import React from "react";

//props.cont = "EN" or "CH"

function StoreInfo(props){
    return(
        <div className="store-info sidepane">

    <table>
    <tbody>
        <tr>
            <td className="t1">{props.cont == "CH" ? "營業時間" : "Store Hours"}</td>
            <td>{props.cont == "CH" ? "平日 9:30 ~ 18:00" : "Weekday 9:30 ~ 18:00"}</td>
        </tr>
        <tr>
            <td className="t1">{props.cont == "CH" ? "公休日" : "Day Offs"}</td>
            <td>{props.cont == "CH" ? "國定假日與禮拜日" : "Sundays and National Holidays"}</td>
        </tr>
    </tbody>
    </table>
            <p style={{textAlign: "left"}}>{props.cont == "CH" ? "週六採電話預約制。" : "We accept only booking for services on Sundays by phone."}</p>
        </div>
    )
}

export default StoreInfo;