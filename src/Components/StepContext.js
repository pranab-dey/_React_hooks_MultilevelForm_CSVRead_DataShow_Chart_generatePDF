import React, { useState } from 'react';
import App from '../App';

export const multiStepContext = React.createContext();


const StepContext = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData,setUserData] = useState([]);
  const [data,setData] = useState([]);
  const [csvData, setCsvData] = React.useState({});
  const [csvUpload, setCsvUpload] = React.useState(false);
  const [csvFinalData, setCsvFinalData] = React.useState({});


  return (
    <div>
      <multiStepContext.Provider
        value = {{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          data,
          setData,
          csvData,
          setCsvData,
          csvUpload,
          setCsvUpload,
          csvFinalData,
          setCsvFinalData
        }}>
        <App />
    </multiStepContext.Provider>
    </div>
  )
}
  export default StepContext;
