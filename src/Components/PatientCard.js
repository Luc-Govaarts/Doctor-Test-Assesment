import React from 'react'
import './PatientCard.css'

export default function PatientCard(props) {
    return (
        <div className="patient">
            <p>name: {props.name}</p>
            <p>id: {props.id}</p>
            <p>date of birth: {props.dateOfBirth}</p>
            <button onClick={props.buttonHandler()}>Show details</button>
        </div>
    )
}
