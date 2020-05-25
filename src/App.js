import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <body>

      </body>
      <Navbar />
      <Switch>
        {/* <Route path="/sign" component={PatientSignup} />
        <Route path="/schedule" component={DoctorSchdule} />
        <Route path="/database" component={PatientDatabase} />
        <Route exact path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default App;
