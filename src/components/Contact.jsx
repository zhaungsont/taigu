import React from "react";

//props.cont = "EN" or "CH"

function Contact(props){
    return (
        <div className="contact sidepane">
    <table>
        <tbody>
        <tr>
            <td className="t1">{props.cont == "CH" ? "市話" : "Tel:"}</td>
            <td><a href="tel: 02-2702-3371">(02) 2702-3371</a></td>
        </tr>
        <tr>
            <td className="t1">{props.cont == "CH" ? "手機" : "Mobile:"}</td>
            <td><a href="tel: 0935-928-823">0935-928-823</a></td>
        </tr>
        <tr>
            <td className="t1">{props.cont == "CH" ? "電子郵件" : "Email:"}</td>
            <td><a href="mailto:taigu168@gmail.com">taigu168@gmail.com</a></td>
        </tr>
        <tr>
            <td className="t1">{props.cont == "CH" ? "地址" : "Address:"}</td>
            <td><a href="https://goo.gl/maps/vkNBMjAm7jaSzB8m7">{props.cont == "CH" ? "台北市大安區信義路四段58-2號" : "No. 58-2, Sec. 4, Xinyi Rd., Da’an Dist., Taipei City"}</a></td>
        </tr>
        </tbody>
    </table>

        </div>
    )
}

export default Contact;
