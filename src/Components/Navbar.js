import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'


export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/" exact={true}>Home</NavLink></li>
                    <li><NavLink to="/schedule">Doctor Schedule</NavLink></li>
                    <li><NavLink to="/signup">Patient Signup</NavLink></li>
                    <li><NavLink to="/database">Patient Database</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
