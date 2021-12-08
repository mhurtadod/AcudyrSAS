import React from 'react';


export default function Inicio() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Inicio</h1>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <a href="/login" className="btn btn-primary">Iniciar Sesión</a>
            <a href="/registrarse" className="btn btn-primary">Registrarse</a>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <img src="https://www.ocu.org/-/media/ocu/images/home/salud/coronavirus/vacuna_ninos_2_800x450.png?rev=c97bae74-aa5b-4ffe-b950-2670089cbcf8&mw=660&hash=8816080364CB8655C4B84C2E24912E57"
                      style={{width: "100%"}} />
          </div>
        </div>
      </div>
      );
  }
  