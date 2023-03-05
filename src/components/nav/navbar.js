import React   from "react";
import "./style.css"

export default function NavBar (){
    return (
        <div>
            <div className="navbar">
            <nav>
                <ul>
                <li><a href="/">home</a></li>
                <li><a href="/mypets">mypets</a></li>
                {/* <li><a href=""></a></li> */}
                <li><a href="/login">login</a></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
