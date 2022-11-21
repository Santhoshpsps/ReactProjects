import React from "react";
import User from "./User";
import './UsersList.css'

const UsersList = (props) => {
  // console.log(props);
  if (props.items.length === 0) {
    return <h2 className="userslist__fallback"> Found no expenses.</h2>;
  } else {
    return (
      <ul className="userslist">
        { props.items.map((item) => (
          <User id={item.id} name={item.name} age={item.age} />
        ))}
      </ul>
    );
  }
};

export default UsersList;
