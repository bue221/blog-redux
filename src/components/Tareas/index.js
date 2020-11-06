import React, { Component } from "react";
import { connect } from "react-redux";

import * as tareasAction from "../../actions/tareasAction";

import Spinner from "../Spinner";
import Error from "../Fatal";

import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTareas();
    }
  }

  componentDidUpdate() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTareas();
    }
  }
  mostrarTareas(us_id) {
    const { tareas } = this.props;
    const porUsuario = {
      ...tareas[us_id],
    };

    return (
      <>
        {Object.keys(porUsuario).map((tar, index) => (
          <div>
            <Typography variant="body2" component="p">
              <Switch
                defaultChecked={porUsuario[tar].completed}
                name="checkedB"
                color="primary"
              />
              {porUsuario[tar].title}
              <br />
            </Typography>
            <Button color="primary">
              <Link className="Link" to={`/tareas/guardar/${us_id}/${tar}`}>
                edit
              </Link>
            </Button>
            <Button color="secondary" onClick={() => this.props.eliminar(tar)}>
              delete
            </Button>
          </div>
        ))}
        <div className="flex-center">
          <Button color="default">
            <Link className="Link" to="/tareas/guardar">
              Añadir tareas
            </Link>
          </Button>
        </div>
      </>
    );
  }

  render() {
    //console.log(this.props.tareas[1]);
    return (
      <div className="margen flex-wrap">
        {this.props.error ? (
          <Error error={this.props.error} />
        ) : (
          <>
            {this.props.cargar ? (
              <Spinner color="orange" />
            ) : (
              <>
                {Object.keys(this.props.tareas).map((us_id, index) => {
                  console.log(us_id);
                  return (
                    <Card key={index}>
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          Usuario {us_id}
                        </Typography>
                        {this.mostrarTareas(us_id)}
                      </CardContent>
                    </Card>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasAction)(Tareas);
