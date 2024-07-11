import React from 'react';
import './App.css';
import HomePage from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AvailableSalonPage from './Pages/AvailableSalons/available-salons-page';
import SearchResultPage from './Pages/SearchResult/search-result';
import AppointmentConfirm from './Pages/SalonProfile/appointment-confirm-page';
import SalonProfile from './Pages/SalonProfile/make-appointment-page';
import SalonUnderServiceType from './Pages/SalonsUnderServiceType/salons-under-service-type';
import AppointmentSuccessful from './Pages/SalonProfile/appointment-successfull';
import TempCustomerLogin from './Pages/Home/tempLogging';
import MapView from './Pages/Map/map';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/temporary-login' element={<TempCustomerLogin/>}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/available-salons' element={<AvailableSalonPage/>}/>
        <Route path='/search-result' element={<SearchResultPage/>}/>
        <Route path="/make-appointment" element={<SalonProfile/>}/>
        <Route path="/confirm-appointment" element={<AppointmentConfirm/>}/>
        <Route path="/available-salons-under-service-type" element={<SalonUnderServiceType/>}/>
        <Route path="/appointment-successful" element={<AppointmentSuccessful/>}/>
        <Route path='/map-view' element={<MapView/>}/>
      </Routes>
    </Router>
  );
}

export default App;
