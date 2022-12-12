import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const{value: enteredName,
     hasError: nameInputHasError, 
     isValid : enteredNameIsValid,
     valueChangeHandler: nameChangedHandler, 
     inputBlurHandler: nameBlurHandler,
    reset: resetNameInput}=useInput(value => value.trim() !== '')


  const [enteredEmail, setenteredEmail] = useState('');
  const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  // const nameInputIsValid = !enteredNameIsValid && nameBlurHandler;

  const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes('@');
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid ) formIsValid = true;



  const emailInputChangeHandler=(event)=>{
    setenteredEmail(event.target.value);
  }
  const emailINputBlurHandler=()=>{
    setenteredEmailTouched(true);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) return;
    console.log(enteredName);
    resetNameInput();
  };

  const nameInputClasses = !nameInputHasError
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailInputChangeHandler}
        onBlur={emailINputBlurHandler}></input>
        {emailInputIsValid && 
        <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
