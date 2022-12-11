import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredNameTouched, setenteredNameTouched] = useState(false);
  const [enteredEmail, setenteredEmail] = useState('');
  const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "" && enteredEmail.includes('@');
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid ) formIsValid = true;

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setenteredNameTouched(true);
  };

  const emailInputChangeHandler=(event)=>{
    setenteredEmail(event.target.value);
  }
  const emailINputBlurHandler=()=>{
    setenteredEmailTouched(true);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);
    if (!enteredNameIsValid) return;
    console.log(enteredName);
    setenteredName("");
    setenteredNameTouched(false);
  };

  const nameInputClasses = !nameInputIsValid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsValid && (
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
