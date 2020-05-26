const express = require('express')

const app = express()

function onRequest () {
    console.log('testing')
  }

app.get(
    '/test', // route to listen on
    onRequest // callback runs when the route is requested
  )

const port = 4000

app.listen(
    port,
    () => console.log(`Listening on :${port}`)
)