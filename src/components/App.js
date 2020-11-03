import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Users from "./Usuarios/index";
import Post from "./Publicaciones/index";
import Menu from "./Menu";

const App = () => (
  <>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/public/:key/:aut" component={Post} />
          <Route path="/tareas">
            <h1>Tareas</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
