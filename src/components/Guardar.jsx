import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as tareasAction from "./../actions/tareasAction";

import { TextField, Button, Switch } from "@material-ui/core";

import Spinner from "./Spinner";
import Error from "./Fatal";

class Guardar extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id, idtitle },
      },
      tareas,
      cambioTitulo,
      cambioUsuarioId,
    } = this.props;

    if (id && idtitle) {
      const titulo = tareas[id][idtitle].title;
      cambioUsuarioId(id);
      cambioTitulo(titulo);
    }
  }

  cambioUsuarioId = (e) => {
    this.props.cambioUsuarioId(e.target.value);
  };

  cambioTitulo = (e) => {
    this.props.cambioTitulo(e.target.value);
  };

  guardar = () => {
    const {
      match: {
        params: { id, idtitle },
      },
      tareas,
      title,
      usuario_id,
      agregar,
      editar,
    } = this.props;

    const nuevaTarea = {
      userId: usuario_id,
      title: title,
      completed: false,
    };

    if (id && idtitle) {
      const tarea = tareas[id][idtitle];
      const tarea_editada = {
        ...tarea,
        completed: tarea.completed,
        id: tarea.id,
      };

      editar(tarea_editada);
    } else {
      agregar(nuevaTarea);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="margen flex-center">
        {this.props.redirect && <Redirect to="/tareas" />}
        <h1>Guardar tarea</h1>
        {this.props.error ? (
          <Error error={this.props.error} />
        ) : (
          <>
            {this.props.cargar ? (
              <Spinner color="pink" />
            ) : (
              <form
                noValidate
                autoComplete="off"
                className="flex-center"
                style={{ marginTop: "2rem" }}
              >
                <TextField
                  id="standard-basic"
                  label="Usuario id"
                  type="number"
                  value={this.props.usuario_id}
                  onChange={(e) => this.cambioUsuarioId(e)}
                />
                <TextField
                  id="standard-basic"
                  label="inserte tarea"
                  value={this.props.title}
                  onChange={(e) => this.cambioTitulo(e)}
                />
                <Switch checked={false} name="Completada" />
                <Button
                  color="secondary"
                  onClick={this.guardar}
                  disabled={!this.props.title}
                >
                  Guardar
                </Button>
              </form>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => {
  return tareasReducer;
};

export default connect(mapStateToProps, tareasAction)(Guardar);
