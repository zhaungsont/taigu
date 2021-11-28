import React from "react";

function Contact(){
    return (
        <div className="contact">
                    {/* <p>
                    電話：<a href="tel: 02-2702-3371">(02) 2702-3371</a> <br />
                    地址：<a href="https://goo.gl/maps/vkNBMjAm7jaSzB8m7">台北市大安區信義路四段58-2號</a> <br />
                    電郵：<a href="mailto:taigu168@gmail.com">taigu168@gmail.com</a>
                    </p> */}
    <table>
        <tbody>
        <tr>
            <td className="t1">市話</td>
            <td><a href="tel: 02-2702-3371">(02) 2702-3371</a></td>
        </tr>
        <tr>
            <td className="t1">莊師傅手機</td>
            <td><a href="tel: 0935-928-823">0935-928-823</a></td>
        </tr>
        <tr>
            <td className="t1">電子郵件</td>
            <td><a href="mailto:taigu168@gmail.com">taigu168@gmail.com</a></td>
        </tr>
        <tr>
            <td className="t1">地址</td>
            <td><a href="https://goo.gl/maps/vkNBMjAm7jaSzB8m7">台北市大安區信義路四段58-2號</a></td>
        </tr>
        </tbody>
    </table>

        </div>
    )
}

export default Contact;
