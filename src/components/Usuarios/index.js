import React, { Component } from "react";
import { connect } from "react-redux";

import * as userAction from "../../actions/userAction";

import Error from "../Fatal";
import Spinner from "../Spinner";
import Table from "../Table";

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
        {this.props.cargar ? (
          <Spinner color="red" />
        ) : (
          <>
            {this.props.error ? (
              <Error error={this.props.error} />
            ) : (
              <Table usuarios={this.props.usuarios} />
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userAction)(usuarios);
