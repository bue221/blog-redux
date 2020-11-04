import React from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import VisibilityIcon from "@material-ui/icons/Visibility";

const TableU = ({ usuarios }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Nombre de usuario</TableCell>
              <TableCell align="right">Correo</TableCell>
              <TableCell align="right">website</TableCell>
              <TableCell align="right">ver Publicaciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((i, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {i.name}
                </TableCell>
                <TableCell align="right">{i.username}</TableCell>
                <TableCell align="right">{i.email}</TableCell>
                <TableCell align="right">{i.website}</TableCell>
                <TableCell align="right">
                  <Link to={`/public/${index}/${i.name}`}>
                    {" "}
                    <VisibilityIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableU;
