import React from 'react';

export default function Contactenos() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contactenos</h1>
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
                <textarea class="form-control" rows="3" style={{ width: "100%"}} placeholder="Escriba aquí su mensaje" required></textarea>
                </div>
              </div>
         
                         
              <div class="control-group">
                <div class="controls">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
