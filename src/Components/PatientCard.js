import React from 'react'
import './PatientCard.css'
import Button from './Button'

export default function PatientCard(props) {
    return (
        <div className="patient">
            <p>name: {props.name}</p>
            <p>id: {props.id}</p>
            <p>date of birth: {props.dateOfBirth}</p>
            <Button goto={`/database/${props.id}`} 
            display="Show details"/>        
        </div>
    )
}
