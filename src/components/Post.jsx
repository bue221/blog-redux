import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
  },
}));

const Post = ({ num, autor }) => {
  const classes = useStyles();
  console.log(autor);
  return (
    <div>
      <div className={classes.margen}>
        <Typography variant="h1" component="h2">
          Publicaciones | usuario {num}
        </Typography>
        <div>
          <Chip
            avatar={
              <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8y0JHWtIZj8FIPaxy4qle2A3PIUwU3J2sRZvAmC_w=s32-c-mo" />
            }
            label={autor}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Post;
