import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Axios from 'axios'
import Button from '../Components/Button'

export default function PatientDetails() {
    const [patientData, set_patientData] = useState([])
    const params = useParams()
  
    useEffect(() => {
        const navigateToPatientDetails = async () => {
            const response = await Axios.get(`https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${params.patientid}`)
            set_patientData(response.data)
          }
          navigateToPatientDetails();
    },[])
      
    console.log("testing patient data:", patientData)
    console.log("testing parans:", params)
    const prescriptions = patientData.prescriptions
    console.log("testing prescriptions:", prescriptions)

    return <>
            <h3>{patientData.firstName} {patientData.lastName}</h3>
            <div>
                <p>Id: {patientData.id}</p>
                <p>Date of birth: {patientData.dateOfBirth}</p>
                <p>Gender {patientData.gender}</p>
            </div>
            <h5>Contact Details</h5>
            <ul>
                <li>Email: {patientData.email}</li>
                <li>Phone Number: {patientData.phoneNumber}</li>
            </ul>
            <h5>Prescriptions</h5>
            {/* <ul>
                {prescriptions.map(prescription => {
                    return <li>{prescription}</li>
                })}
            </ul> */}
            <p>{prescriptions}</p>
            <Button goto="/database"
            display="Go back to the database"/>
         </>
}
