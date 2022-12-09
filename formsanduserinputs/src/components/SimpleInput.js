import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const[enteredName, setenteredName]= useState('');
  const nameInputRef = useRef();
  const[enteredNameIsValid,setenteredNameIsValid] = useState(true);

  const nameInputChangeHandler =(event)=>{
    setenteredName(event.target.value);

  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(enteredName.trim() === ''){
      setenteredNameIsValid(false);
      return;
    }

    console.log(enteredName);
    const value = nameInputRef.current.value;
    console.log(value);
    setenteredName('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} ref={nameInputRef} onChange={nameInputChangeHandler} />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
