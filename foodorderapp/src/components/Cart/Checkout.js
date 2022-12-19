import { useRef , useState } from 'react';
import classes from './Checkout.module.css';
const isEmpty=(value)=> value.trim() ==='';

const isFiveChar =(value)=> value.trim().length === 5;

const Checkout = (props) => {
    useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })
    const nameInputRef=useRef();
    const streetInputRef=useRef();
    const postalCodeInputRef=useRef();
    const cityInputRef=useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredpostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const strretIsValid = !isEmpty(enteredStreet);
    const postalCodeIsValid = isFiveChar(enteredpostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    const formValid = (nameIsValid && strretIsValid && postalCodeIsValid && cityIsValid);

    if(!formValid){
        return;
    }


  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;