import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser.js";
import Users from "./components/Users/Users.js";
import swal from 'sweetalert';
const dummy_users = [
  {
    id: "u1",
    name: "Santhosh",
    age: "22",
  },
  {
    id: "u2",
    name: "Harish",
    age: "17",
  },
  {
    id: "u3",
    name: "Malathi",
    age: "50",
  },
];
function App() {
  const [users, setUsers] = useState(dummy_users);

  console.log(users);
  const newuserDataHandler = (data) => {
    if(data.name === '' || data.age === ''){
      console.log("empty");
      swal("", "Either name or Age is empty, Kindly Check:)", "warning")
      // alert("empty");
    }
    else if(data.age <0){
      swal("", "User's Age is invalid , Kindly Check:)", "error")
      console.log("<0");
    }
    else{
      setUsers((prevState) => {
        return [data, ...prevState];
      });
      swal("Great Job!!", "Validation Success", "success")
    }
    
    // console.log(data);
  };
  return (
    <div>
      <NewUser newuserData={newuserDataHandler}></NewUser>
      <Users items={users} />
    </div>
  );
}

export default App;
