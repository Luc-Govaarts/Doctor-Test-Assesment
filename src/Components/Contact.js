import React from 'react'

export default function Contact() {
    var today = new Date(); 
    console.log("Testing getHours:", today.getHours())
    function openOrClosed() {
        if(today.getHours() >= 17 || today.getHours() < 8) {
            return "Closed"
        } else {
            return "open"
        }
    }   

    return (
        <div>
           <p>We are: <em>{openOrClosed()}</em></p> 
           <p>To make an appointment</p>
           <p>call: 020 555 5555</p>
        </div>
    )
}
