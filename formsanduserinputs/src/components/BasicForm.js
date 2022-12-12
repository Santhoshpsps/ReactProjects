import { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameisBlur, setFirstNameIsBlured] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const inputIsValid = !firstNameIsValid && firstNameisBlur
  
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const firstNameBlurHandler = () => {
    setFirstNameIsBlured(true);
  };

  const nameInputClasses = !inputIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form>
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
           {inputIsValid && <p className="error-text">PLease enter a valid name</p>}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
