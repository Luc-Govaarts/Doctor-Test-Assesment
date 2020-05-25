import React, { useEffect, useState }from 'react'
import Contact from '../Components/Contact'
import './DoctorSchedule.css'
import axios from 'axios'

export default function DoctorSchedule() {
    const url = "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
    const [doctors, set_doctors] = useState([])
    const [searchStatus, set_search_status] = useState("idle")

    useEffect(() => {        
        async function fetchDoctorData(){  
            set_search_status("Loading data")                  
            const response = await axios.get(url)
            set_doctors(response.data)
        }
        fetchDoctorData()
        set_search_status("Data loaded")
    },[])
    
    const tableBody = 
        doctors.map(doctor => {
        const doctorName = doctor.doctor 
        const doctorOnDuty = doctor.onDuty 
            ? 'On duty' 
            : 'Not on duty'
            return (
                <tr>
                    <td>{doctorName}</td>
                    <td>{doctorOnDuty}</td>
                </tr>
                )
            })      
        
    function loading(searchStatus) {
        if (searchStatus === "Loading data") {
            return {searchStatus}
        } else {
            return ""
        }
    }
    const loadingMessage = loading(searchStatus)
    
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
                {loadingMessage}
            </div>  
            
        </div>
    )
    }
