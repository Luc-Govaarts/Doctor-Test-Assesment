const express = require('express')
const patientData = require('./patientData.json')
const doctorData = require('./doctorData.json')

const app = express()

app.get(
    '/doctors',
    (request, response) => {
        response.send(doctorData)
    }
  )

app.get(
    '/patients',
    (request, response) => {
        response.send(patientData)
    }
  )

app.get('/patients/:id', 
    async (req, res) => {
    const data = patientData.filter(
      (patient) => patient.id === req.params.id
    );
    res.send(data);
  });


const port = 4000

app.listen(
    port,
    () => console.log(`Listening on :${port}`)
)