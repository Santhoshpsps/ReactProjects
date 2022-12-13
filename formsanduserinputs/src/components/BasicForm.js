
import useNewInput from "../hooks/use-newInput";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    inputValid: inputIsValid,
    changeHandler: firstNameChangeHandler,
    BlurHandler: firstNameBlurHandler,
    reset:resetFirstName

  }= useNewInput((value) => value.trim() !== "");

  let basicFormIsValid = false;
  if(firstNameIsValid)
  basicFormIsValid=true;
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(firstName);
    resetFirstName();
  };
  const nameInputClasses = !inputIsValid
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
          {inputIsValid && (
            <p className="error-text">PLease enter a valid name</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
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
