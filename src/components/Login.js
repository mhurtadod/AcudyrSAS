import React from 'react';

export default function Login() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Iniciar Sesión</h1>
          </div>
        </div>

        <div className="row">
          <div id="login-box" className="col-6">
            <form class="form-horizontal">
              <div class="control-group">
                <label class="control-label" for="inputUser">User name</label>
                <div class="controls">
                  <input type="text" id="inputUser" placeholder="User name" />
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="inputPassword">Password</label>
                <div class="controls">
                  <input type="password" id="inputPassword" placeholder="Password" />
                </div>
              </div>
              <div class="control-group">
                <div class="controls">
                  <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                </div>
              </div>
            </form>
            <hr />

            <div class="control-group">
              <label>Usuario nuevo?</label>
                <div class="controls">
                  <a href="/registrarse" className="btn btn-primary">Registrarse</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }