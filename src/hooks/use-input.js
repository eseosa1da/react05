import { useState } from "react";

const useInput = (inputValidHandler) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = inputValidHandler(enteredValue);

  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
