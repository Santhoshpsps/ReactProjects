
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");


  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredmailIsValid,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetmailInput,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));


  let formIsValid = false;
  if (enteredNameIsValid && enteredmailIsValid) formIsValid = true;


  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) return;
    console.log(enteredName);
    resetNameInput();
    resetmailInput();
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
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        ></input>
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
