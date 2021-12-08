import logo from './logo.svg';
import './App.css';
import React from 'react';
import Inicio from './components/Inicio'
import Form from './components/Form'
import Login from './components/Login'
import Registrarse from './components/Registrarse'
import Contactenos from './components/Contactenos'

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/form2" element={<Form />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrarse" element={<Registrarse />} />
                <Route path="/contactenos" element={<Contactenos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
