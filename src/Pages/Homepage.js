import React from 'react'
import Contact from '../Components/Contact'
import Button from '../Components/Button'

export default function Homepage() {

    return (
        <div>
            <h1>Welcome to AMS GP'S</h1>
            <Contact />
            <Button goto="/schedule"
            display="Got to schedule"/>
            <Button goto="/sign"
            display="I am a new patient"/>
        </div>
    )
}