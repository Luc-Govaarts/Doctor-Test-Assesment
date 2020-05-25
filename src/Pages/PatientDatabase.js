import React from 'react'
import PatientCard from '../Components/PatientCard'

export default function PatientDatabase() {
    return (
        <div>
            <h1>Patient Database</h1>
            <label>doctor</label>
            <select>
                <option>Dr. Coventry</option>
                <option>Dr. Adenet</option>
                <option>Dr. Tollady</option>
            </select>
            <PatientCard/>
        </div>
    )
}
