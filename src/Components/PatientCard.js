import React from 'react'
import './PatientCard.css'

export default function PatientCard(props) {
    return (
        <div class="patient">
            <p>name:{props.name}</p>
    <p>id:{}</p>
            <p>date of birth:</p>
            <button>Show details</button>
        </div>
    )
}
