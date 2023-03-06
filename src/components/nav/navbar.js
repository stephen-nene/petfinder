import { NavLink , Link } from 'react-router-dom';
import React   from "react";
import "./style.css"

export default function NavBar (){
    return (
        <div>
            <div className="navbar">
            <nav>
                <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li><NavLink to="/mypets">mypets</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
                <li><NavLink to="/signUp">SignUp</NavLink></li>
                </ul>
            </nav>
            </div>
        </div>
    )
}
