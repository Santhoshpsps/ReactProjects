import useNewInput from "../hooks/use-newInput";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    inputValid: firstinputIsValid,
    changeHandler: firstNameChangeHandler,
    BlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useNewInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    inputValid: lastinputIsValid,
    changeHandler: lastNameChangeHandler,
    BlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useNewInput((value) => value.trim() !== "");

  let basicFormIsValid = false;
  if (firstNameIsValid && lastNameIsValid) basicFormIsValid = true;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(firstName);
    resetFirstName();
    resetLastName();
  };
  const nameInputClasses = !firstinputIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstinputIsValid && (
            <p className="error-text">PLease enter a valid name</p>
          )}
        </div>

        <div className={nameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastinputIsValid && (<p className="error-text">PLease enter a valid name</p>)
          }
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!basicFormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
