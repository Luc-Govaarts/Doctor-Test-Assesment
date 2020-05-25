import React, { useState, useEffect } from 'react'
import PatientCard from '../Components/PatientCard'
import axios from 'axios'

export default function PatientDatabase() {
    const patientDataUrl = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients'
    const [patient_data, set_patient_data] = useState([])
    const [sort_by, set_sort_by] = useState(4)

    useEffect(() => {
        async function fetchPatientData(){
            const response = await axios.get(patientDataUrl)
            set_patient_data(response.data)
        }
        fetchPatientData()
    },[])
    
    console.log("patient data test:", patient_data)
    function sortByDoctor(event) {
        set_sort_by(event.target.value)
    }

    function filterPatients(patients) {
        if (sort_by == '1') {
            patients.filter(patient => {
                return patient.doctocId === '1'
            })
        } else if (sort_by == '2') {
            patients.filter(patient => {
                return patient.doctocId === '2'
            })
        } else if (sort_by == '3') {
            patients.filter(patient => {
                return patient.doctocId === '3'
            })
        } else {
            return patients
        }
    }
    const filtered_patients = filterPatients(patient_data)
    console.log("sort by test:", sort_by)
    console.log("filtered patient data test:", filtered_patients)

    const Patientlist = filtered_patients.map((patient, i )=> {
        return <PatientCard 
        key={i}
        name={`${patient.firstName} ${patient.lastName}`} 
        id={patient.id} 
        dateOfBirth={patient.dateOfBirth}/>
    })

    return (
        <div>
            <h1>Patient Database</h1>
            <label>doctor</label>
            <select onChange={sortByDoctor}>
                <option value='1'>Dr. Coventry</option>
                <option value='2'>Dr. Adenet</option>
                <option value='3'>Dr. Tollady</option>
                <option value='4'>All</option>
            </select>
            {Patientlist}
        </div>
    )
}
