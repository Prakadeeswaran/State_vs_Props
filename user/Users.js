import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  state = {
    users: [
      { id: 1, name: "Prakadees", age: 32 },
      { id: 2, name: "Ram", age: 23 },
      { id: 3, name: "Kumar", age: 25 }
    ]
  };
  render() {
    console.log(window);
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.state.users.map(user => (
          <User age={user.age}> {user.name} </User>
        ))}
      </div>
    );
  }
}

export default Users;
