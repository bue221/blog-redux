import React, { Component } from "react";
import { connect } from "react-redux";

import * as userAction from "../../actions/userAction";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    this.props.traerTodos();
  }

  render() {
    console.log(this.props);
    return (
      <div className="margen">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Nombre de usuario</TableCell>
                <TableCell align="right">Correo</TableCell>
                <TableCell align="right">website</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.usuarios.map((i, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {i.name}
                  </TableCell>
                  <TableCell align="right">{i.username}</TableCell>
                  <TableCell align="right">{i.email}</TableCell>
                  <TableCell align="right">{i.website}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userAction)(usuarios);
