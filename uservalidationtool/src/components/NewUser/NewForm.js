import React, { useState , useRef} from "react";
import './NewForm.css';

const NewForm = (props) => {
  const [username, setusername] = useState('');
  const [age, setage] = useState('');
 const age1 =  useRef();

  const onSubmitHandler=(event) =>{
    event.preventDefault();
    const userData ={
      name: username,
      age: age
    }
    props.onSaveUserData(userData);
    setusername('');
    setage('');
  }
  const addUserHandler =(event)=>{
      setusername(event.target.value);
  }
  const addAgeHandler =(event) =>{
    setage(event.target.value);
    console.log(age1.current.value);
    
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="user__controls">
          <div className="user__control">
            <label>Username</label>
            <input type="input" name="username" onChange={addUserHandler} value={username}></input>
          </div>
          <div className="user__control">
            <label>Age (Years)</label>
            <input type="number" name="age" onChange={addAgeHandler} value={age} ref={age1}></input>
          </div>
        </div>
        <div className="user__actions">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default NewForm;
