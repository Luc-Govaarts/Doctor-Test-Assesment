import React from 'react'
import Contact from '../Components/Contact'

export default function DoctorSchedule() {
    return (
        <div>
            <h1>Who is on duty?</h1>
            <table>
                <tr>
                    <th>Doctor</th>
                    <th>Availability</th>
                </tr>
                <tr>
                    <td>Dr. Coventry</td>
                    <td> on duty </td>
                </tr>
                <tr>
                    <td>Dr. Adenet</td>
                    <td> on duty </td>
                </tr>
                <tr>
                    <td>Dr. Tollady</td>
                    <td> on duty </td>
                </tr>
            </table>

            <Contact />
        </div>
    )
}
