import React from "react";

import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Divider from "@material-ui/core/Divider";

const Comments = ({ data }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ background: "white" }}
          >
            Lista de comentarios
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Comentarios" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {data.map((i, index) => (
              <>
                <ListItem button key={index}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <div>
                    <ListItemText primary={i.email} />
                    <ListItemText primary={i.name} />
                    <Typography variant="caption" display="block" gutterBottom>
                      {i.body}
                    </Typography>
                  </div>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default Comments;
