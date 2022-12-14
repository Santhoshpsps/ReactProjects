import classes from './Checkout.module.css'
const Checkout =()=>{
    const submitHandler=(event)=>{
        event.preventDefault();
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name'></input>
            </div>
            <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street'/>
            </div>
            <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal'/>
            </div>
            <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city'/>
            </div>
            <div className={classes.actions}>
            <button type='submit'>Confirm</button> 
            <button type='button'>Cancel</button>
            </div>
             
        </form>
    )
}

export default Checkout;