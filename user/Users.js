import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <User>Prakadees</User>
        <User age="23" />
        <User age="25">Kumar</User>
      </div>
    );
  }
}

export default Users;
