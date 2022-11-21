import React from "react";
import UsersList from './UsersList'
import './Users.css'
import Card from '../UI/Card';

const Users = (props) => {
  return (
    <Card className="users">
      <UsersList items={props.items}/>
    </Card>
  );
};
export default Users;
