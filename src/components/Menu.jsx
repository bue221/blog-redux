import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

const Menu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Curso de redux | platzi Blog
        </Typography>
        <Button color="inherit">
          <Link className={classes.link} to="/">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="/users">
            Users
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="/tareas">
            Tareas
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Menu;
