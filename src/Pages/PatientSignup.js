import React from 'react'
import './PatientSignup.css'

export default function PatientSignup() {
    return (
        <div>
            <h1>Patient signup</h1>
            <h2>first name</h2>
            <input type="text"></input>
            <h2>last name</h2>
            <input type="text"></input>
            <h2>email</h2>
            <input type="text"></input>
            <h2>phone</h2>
            <input type="text"></input>
            <h2>gender</h2>
            <select>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
            </select>
            <h2>date of birth</h2>
            <input type="date" id="date" min="1990-01-01" max="2020-05-25"></input>
        </div>
    )
}
