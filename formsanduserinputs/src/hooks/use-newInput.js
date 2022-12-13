import { useState } from "react"

const useNewInput=(validateFn)=>{
const[enteredValue, setenteredValue] =useState("");
const[isTouched,setIsTouched] = useState(false);

const valueIsValid = validateFn(enteredValue);
const inputIsValid = !valueIsValid && isTouched;


const valueChangeHandler=(event)=>{
    setenteredValue(event.target.value);
}

const valueBlurHandler=()=>{
    setIsTouched(true);
}

const reset=()=>{
    setIsTouched(false);
    setenteredValue('');
}

return{
    value: enteredValue,
    isValid: valueIsValid,
    inputValid: inputIsValid,
    changeHandler: valueChangeHandler,
    BlurHandler: valueBlurHandler,
    reset: reset
}

}

export default useNewInput;