import React, { useState } from 'react'
import './PatientSignup.css'

export default function PatientSignup() {
    const [first_name, set_first_name] = useState("")
    const [last_name, set_last_name] = useState("")
    const [email, set_email] = useState("")
    const [phone, set_phone] = useState("")
    const [gender, set_gender] = useState("")
    const [birthdate, set_birthdate] = useState("")

    function submitHandler() {
        console.log(`
        Patient first name: ${first_name}
        Patient last name: ${last_name}
        Patients date of birth: ${birthdate}
        Patients gender:   ${gender}
        Patients phone number: ${phone}
        Patients email: ${email}`)
    }

    // function messageHandler() {
    //      ? 'Thanks for filling out the form' 
    //     : 'Please fill out the form and press submit';
    // }

    return <>
            <div>
                <h1>Patient signup</h1>
                <h2>first name</h2>
                <input type="text"
                onChange={event => {set_first_name(event.target.value)}}>
                </input>
                <h2>last name</h2>
                <input type="text"
                onChange={event => {set_last_name(event.target.value)}}>
                </input>
                <h2>email</h2>
                <input type="text"
                onChange={event => {set_email(event.target.value)}}>
                </input>
                <h2>phone</h2>
                <input type="text"
                onChange={event => {set_phone(event.target.value)}}>
                </input>
                <h2>gender</h2>
                <select 
                onChange={event => {set_gender(event.target.value)}}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                </select>
                <h2>date of birth</h2>
                <input type="date" id="date" 
                min="1990-01-01" max="2020-05-25"
                onChange={event => {set_birthdate(event.target.value)}}>
                </input>
                <button onClick={submitHandler()}>Submit</button>
                {/* <p>{messageHandler()}</p> */}
            </div>
        </>
}
