import React from "react";

function StoreInfo(){
    return(
        <div className="store-info sidepane">

    <table>
    <tbody>
        <tr>
            <td className="t1">營業時間</td>
            <td>每日 9:30 ~ 18:00</td>
        </tr>
        <tr>
            <td className="t1">公休日</td>
            <td>國定假日與禮拜日</td>
        </tr>
    </tbody>
    </table>
            <p>
                週六採電話預約制。
            </p>
        </div>
    )
}

export default StoreInfo;