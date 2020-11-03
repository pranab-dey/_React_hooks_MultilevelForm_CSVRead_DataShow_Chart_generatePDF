import React from 'react';
import "./styles.css";
import Register  from './Components/Register';
import SecondStep  from './Components/SecondStep';
import {Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './Components/StepContext';
import { useContext } from 'react';
import Result from './Components/Result';

function App () {
  const { currentStep,data,csvFinalData,csvUpload } = useContext(multiStepContext);
  // console.log(Object.keys(csvFinalData).length);
  // console.log(csvFinalData);
  // console.log(typeof csvFinalData);
  function showStep (step) {
    switch(step){
      case 1:
      return <Register />
      case 2:
      return <SecondStep />
    }
  }
  return (
    <div className = 'center-stepper'>
    <Stepper style = {{ width: '99%'  }} activeStep = {currentStep - 1} orientation = 'horizontal'>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
    </Stepper>
    <div> {showStep(currentStep)}</div>

    <div>
        {Object.keys(data).length > 0  ? <Result /> : '' }
        {Object.keys(csvFinalData).length > 0  ? <Result /> : '' }

    </div>

    </div>

  );
}

export default App;
