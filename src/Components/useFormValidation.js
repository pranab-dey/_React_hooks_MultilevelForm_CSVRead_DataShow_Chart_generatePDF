import React from "react";

import { multiStepContext } from './StepContext';
import { useContext } from 'react';


function useFormValidation(initialState, validate) {

  const { userData, setUserData,setCurrentStep, data, setData } = useContext(multiStepContext);
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      //setCurrentStep(2);
      if(Object.keys(errors).length === 6){
          setSubmitting(false);
          setCurrentStep(2);
      }
      if (Object.keys(errors).length === 4){
          setSubmitting(false);
          setCurrentStep(1);
      }

      if (noErrors) {
            setSubmitting(false);


      } else {
        setSubmitting(false);
        //setCurrentStep(2);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    setData({
          ...data,
          values});

  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleContinue(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    setUserData({
      ...userData,values
    });

  }

  return {
    handleContinue,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
