import { useState } from "react";

const useValidate = (validateValue) => {
    const [fieldValue, setFieldValue] = useState('');
    const [fieldTouched, setFieldTouched] = useState(false);

    const valueIsValid = validateValue(fieldValue);
    const hasError = !valueIsValid && fieldTouched;

    function onChangeHandler(event){
        setFieldValue(event.target.value);
    }

    function onBlurHandler(event){
        setFieldTouched(true);
    }

    function reset(){
        setFieldValue('');
        setFieldTouched(false);
    }

    return{
        value: fieldValue,
        isValid: valueIsValid,
        hasError,
        onChangeHandler,
        onBlurHandler,
        reset
    }

}

export default useValidate;