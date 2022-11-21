import React from "react";
import "./User.css";
import '../UI/Card'
import Card from "../UI/Card";

const User = (props) => {
  console.log(props);
  return (
    
    <Card className="user">
      <div className="user-item__description">
        <h2 >
          {props.name} ({props.age} years old)
        </h2>
      </div>
    </Card>
  );
};

export default User;
