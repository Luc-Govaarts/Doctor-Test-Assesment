import React from 'react'
import './PatientCard.css'
import {Link} from 'react-router-dom'

export default function PatientCard(props) {
    return (
        <div className="patient">
            <p>name: {props.name}</p>
            <p>id: {props.id}</p>
            <p>date of birth: {props.dateOfBirth}</p>
            <Link to={`/database/${props.id}`} >
                <button>Show details</button>
                </Link>
        </div>
    )
}
