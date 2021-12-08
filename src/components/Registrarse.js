import React from 'react';

export default function Registrarse() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Registrarse</h1>
          </div>
        </div>

        <div className="row">
          <div id="login-box" className="col-6">
            <form class="form-horizontal">
              <div class="control-group">
                <label class="control-label" for="inputId">Documento identificación</label>
                <div class="controls">
                  <input type="text" className="form-control" id="inputId" placeholder="Documento identificación" />
                </div>
              </div>              

              <div class="control-group">
                <label class="control-label" for="inputNombre">Nombre completo</label>
                <div class="controls">
                  <input type="text" id="inputNombre" className="form-control" placeholder="Nombre completo ..." />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="inputContacto">Contacto</label>
                <div class="controls">
                  <input type="text" id="inputContacto" className="form-control" placeholder="+00 000 0000000" />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="inputGenero">Genero</label>
                <div class="controls">
                  <input type="text" id="inputGenero" className="form-control" placeholder="F/M" />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="inputPassword">Fecha de nacimiento</label>
                <div class="controls">
                  <input type="date" id="inputPassword" className="form-control" placeholder="" />
                </div>
              </div>

              <div class="control-group">
                <label class="control-label" for="inputPassword">Password</label>
                <div class="controls">
                  <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                </div>
              </div>
              <div class="control-group">
                <div class="controls">
                  <button type="submit" class="btn btn-primary">Registrarse</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
