import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../Post";

import * as publiAction from "../../actions/publiAction";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Error from "../Fatal";
import Spinner from "../Spinner";

class index extends Component {
  componentDidMount() {
    var num = parseInt(this.props.match.params.key) + 1;
    this.props.traerTodos(num);
  }
  render() {
    console.log(this.props.publiReducer.publicaciones);
    return (
      <div>
        {this.props.publiReducer.cargar ? (
          <Spinner />
        ) : (
          <>
            {this.props.publiReducer.error ||
            this.props.publiReducer.publicaciones.id == 0 ? (
              <Error />
            ) : (
              <>
                <Post
                  num={parseInt(this.props.match.params.key) + 1}
                  autor={this.props.match.params.aut}
                />
                <div className="publis">
                  {this.props.publiReducer.publicaciones.map((i, index) => (
                    <Card variant="outlined" className="publi">
                      <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                          usuario {i.userId}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {i.title}
                        </Typography>
                        <Typography color="textSecondary">
                          Post {i.id}
                        </Typography>
                        <Typography variant="body2" component="p">
                          {i.body}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Leer mas...</Button>
                      </CardActions>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducers, publiReducer }) => {
  return { userReducers, publiReducer };
};

const mapDisptchToProps = { ...publiAction };

export default connect(mapStateToProps, mapDisptchToProps)(index);
