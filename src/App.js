import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import DoctorSchedule from './Pages/DoctorSchedule'
import PatientDatabase from './Pages/PatientDatabase'
import PatientSignup from './Pages/PatientSignup'

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <Navbar />
      <Switch>
        <Route path="/sign" component={PatientSignup} />
        <Route path="/schedule" component={DoctorSchedule} />
        <Route path="/database" component={PatientDatabase} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
