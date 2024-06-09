import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AvailableSalonPage from './Pages/AvailableSalons/available-salons-page';
import SearchResultPage from './Pages/SearchResult/search-result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/available-salons' element={<AvailableSalonPage/>}/>
        <Route path='/search-result' element={<SearchResultPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
