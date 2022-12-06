import { useRef, useState } from "react";

const SimpleInput = (props) => {

  // const[enteredName, setenteredName]= useState('');
  const nameInputRef = useRef();

  // const nameInputChangeHandler =(event)=>{
  //   // setenteredName(event.target.value);

  // }
  const submitHandler=(event)=>{
    event.preventDefault();
    // console.log(enteredName);
    const value = nameInputRef.current.value;
    console.log(value);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
