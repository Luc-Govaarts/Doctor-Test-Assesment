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

    function sortByDoctor(event) {
        set_sort_by(event.target.value)
    }

    function filterPatients(patients) {
        console.log("Testing patients:", patients)
        if (sort_by === '1') {
            return patients.filter(patient => {
                return patient.doctorId === 1
            })
        } else if (sort_by === '2') {
            return patients.filter(patient => {
                return patient.doctorId === 2
            })
        } else if (sort_by === '3') {
            return patients.filter(patient => {
                return patient.doctorId === 3
            })
        } else {
            return patients
        }
    }
    const filtered_patients = filterPatients(patient_data)
    
    function compare_name(patient_a, patient_b) {
        return patient_a.name.localeCompare(patient_b.name)
    }
    
    const sorted_filtered_patients = filtered_patients.sort(compare_name)

    const Patientlist = sorted_filtered_patients.map((patient, i )=> {
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
