import React from "react";


import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";


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
      <h1>React Assignment</h1>
      <br></br>
      <form onSubmit={handleContinue}>

        <label><b>Project Name</b></label>
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

        <label><b>Project Description</b></label>
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

        <label><b>Client</b></label>
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

        <label><b>Contractor</b></label>
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

        <div>
          <button  disabled = {isSubmitting} type = 'submit'>
            Continue
          </button>
        </div>
    </form>
    </div>
  );
}

export default Register;
