import React from "react";

const User = props => {
  let age = props.age ? props.age : "NA";
  if (props.children) {
    return (
      <div>
        {" "}
        Name : {props.children} | Age : {age}
      </div>
    );
  }
  return <div />;
};

export default User;
