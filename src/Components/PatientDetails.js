import React from 'react'

export default function PatientDetails(props) {
    return <>
            <div>
                <h2><p>name: {props.name}</p></h2>
            </div>
            <div>
                <p>id: {props.id}</p>
                <p>date of birth: {props.dateOfBirth}</p>
                <p>Gender: {props.gender}</p>
                <p>Contact details:</p>
                <ul>
                    <li>Email: {props.email}</li>
                    <li>Phone: {props.phone}</li>
                </ul>
                <p>Prescribtions:</p>
                <ul>
                    {props.prescriptions.map(prescription => {
                    return <li>priscription</li>})}
                </ul>
            </div>
        </>
}
