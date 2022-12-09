import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const[enteredName, setenteredName]= useState('');
  const nameInputRef = useRef();
  const[enteredNameIsValid,setenteredNameIsValid] = useState(false);
  const[enteredNameTouched,setenteredNameTouched] = useState(false);
  // const[]=useState(false);

  const nameInputChangeHandler =(event)=>{
    setenteredName(event.target.value);

  }
  const nameInputBlurHandler=()=>{

  }
  const submitHandler=(event)=>{
    event.preventDefault();
    setenteredNameTouched(true);
    if(enteredName.trim() === ''){
      setenteredNameIsValid(false);
      return;
    }

    console.log(enteredName);
    const value = nameInputRef.current.value;
    console.log(value);
    setenteredName('');
  }
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = !nameInputIsValid ? 'form-control' :'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} ref={nameInputRef} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
