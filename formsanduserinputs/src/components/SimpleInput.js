import {  useState } from "react";

const SimpleInput = (props) => {
  const[enteredName, setenteredName]= useState('');
  const[enteredNameTouched,setenteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !=='';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler =(event)=>{
    setenteredName(event.target.value);
   }
  const nameInputBlurHandler=()=>{
    setenteredNameTouched(true);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    setenteredNameTouched(true);
    if(!enteredNameIsValid)
    return
    console.log(enteredName);
    setenteredName('');
  }

 
  const nameInputClasses = !nameInputIsValid ? 'form-control' :'form-control invalid';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'
         value={enteredName} 
          onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
