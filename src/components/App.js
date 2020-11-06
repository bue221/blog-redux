import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Users from "./Usuarios/index";
import Post from "./Publicaciones/index";
import Tareas from "./Tareas/index";
import Menu from "./Menu";
import Article from "./Article";
import Guardar from "./Guardar";

const App = () => (
  <>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/article/:id" component={Article} />
          <Route exact path="/public/:key/:aut" component={Post} />
          <Route exact path="/tareas/guardar" component={Guardar} />
          <Route
            exact
            path="/tareas/guardar/:id/:idtitle"
            component={Guardar}
          />
          <Route path="/tareas">
            <Tareas />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
