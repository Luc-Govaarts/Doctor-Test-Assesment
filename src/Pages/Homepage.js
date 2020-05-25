import React from 'react'
import Contact from '../Components/Contact'
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div>
            <h1>Welcome to AMS GP'S</h1>
            <Contact />
            <button><Link to="/schedule">Who is on duty?</Link></button>
            <button><Link to="/sign">I am a new patient</Link></button>
        </div>
    )
}
