import React, { useEffect, useState }from 'react'
import Contact from '../Components/Contact'
import './DoctorSchedule.css'
import axios from 'axios'

export default function DoctorSchedule() {
    const [doctors, set_doctors] = useState([])
    const [searchStatus, set_search_status] = useState("idle")
    useEffect(() => {      
        set_search_status("Loading data")  
        async function fetchDoctorData(){
            const response = await axios.get("https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors")
            set_doctors(response.data)
        }
        fetchDoctorData()
        set_search_status("Data loaded")
    },[])
    
    const tableBody = 
        doctors.map(doctor => {
        const doctorName = doctor.doctor 
        const doctorOnDuty = doctor.onDuty ? 'On duty' : 'Not on duty'
            return (
                <tr>
                    <td>{doctorName}</td>
                    <td>{doctorOnDuty}</td>
                </tr>
                )
            })      
        
    function loadingMessage(searchStatus) {
        if (searchStatus === "Loading data") {
            return `${searchStatus}`
        } else {
            return ``
        }
    }


    return (
        <div>
            <h1>Who is on duty?</h1>
            <table>
                <thead>
                    <tr>
                        <th>Doctor</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody[0]}
                    {tableBody[1]}
                    {tableBody[2]}
                </tbody>
            </table>
            <Contact />
            <div>
                {loadingMessage(searchStatus)}
            </div>  
            
        </div>
    )
    }
