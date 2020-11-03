import React from "react";


import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

import { Button } from '@material-ui/core';


import { multiStepContext } from './StepContext';
import { useContext } from 'react';


const INITIAL_STATE = {
  projectName: "",
  projectDes: "",
  client: "",
  contractor: ""
};

function Register() {
  const {
    handleContinue,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateAuth);

  const {userData,data,csvData,setCurrentStep}= useContext(multiStepContext);

  // console.log(typeof csvData)

  // console.log(data);
  return (
    <div className="container">
      <h1 className='h1'>React Assignment</h1>
      <br></br>
      <form onSubmit={handleContinue}>

        <label  className= 'label'><b>Project Name</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="projectName"
          value={values.projectName}
          className={errors.projectName && "error-input"}
          autoComplete="off"
          placeholder="Enter Project Name"
        /><br></br>
        {errors.projectName && <p className="error-text">{errors.projectName}</p>}<br></br>

        <label className= 'label'><b>Project Description</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.projectDes}
          className={errors.projectDes && "error-input"}
          name="projectDes"
          type="text"
          placeholder="Enter Project Description"
        /><br></br>
        {errors.projectDes && <p className="error-text">{errors.projectDes}</p>}<br></br>

        <label className= 'label'><b>Client</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.client}
          className={errors.client && "error-input"}
          name="client"
          type="text"
          placeholder="Enter Client Name "
        /><br></br>
        {errors.client && <p className="error-text">{errors.client}</p>}<br></br>

    <label className= 'label'><b>Contractor</b></label>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contractor}
          className={errors.contractor && "error-input"}
          name="contractor"
          type="text"
          placeholder="Enter Contractor Name"
        /><br></br>
        {errors.contractor && <p className="error-text">{errors.contractor}</p>}<br></br>

        <div className = "button1">
          <Button Variant = 'outlined'  disabled = {isSubmitting} type = 'submit'  size = 'large' >
            <b>Continue</b>
        </Button>
        </div>
    </form>
    </div>
  );
}

export default Register;
