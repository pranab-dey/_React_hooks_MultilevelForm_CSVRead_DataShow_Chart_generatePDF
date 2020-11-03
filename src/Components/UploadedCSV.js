import React from 'react';

import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import Chart from './Chart';



export default function UploadedCSV (){

    const {csvData,setCurrentStep,csvFinalData, setCsvFinalData,csvUpload} = useContext(multiStepContext);

    const handleCsvSubmit = (event) => {
        event.preventDefault();
        setCsvFinalData({
            ...csvFinalData,
            csvData
        });

        setCurrentStep(1);
    }
    const handleCsvChange =(event) => {

      // setCsvFinalData({
      //       ...csvFinalData,
      //       [event.target.name]: event.target.value});
    }



  return(
    <div>
        <form onSubmit={handleCsvSubmit}>
            <label><b> Max - X </b></label>
            <input
                value={csvData.max_x || ''}
                type = 'number'
                readOnly
                name='max_x'
                onChange = {handleCsvChange}
            /><br></br>
            <label><b> Min - X </b></label>
            <input
                value={csvData.min_x || ''}
                type = 'number'
                readOnly
                name='min_x'
                onChange = {handleCsvChange}
            /><br></br>
            <label><b> Max - Y </b></label>
            <input
                value={csvData.max_y || ''}
                type = 'number'
                readOnly
                name='max_y'
                onChange = {handleCsvChange}
            /><br></br>
            <label><b> Min - Y </b></label>
            <input
                value={csvData.min_y || '' }
                type = 'number'
                readOnly
                name='min_y'
                onChange = {handleCsvChange}
            /><br></br>
            <label><b> Max - Z </b></label>
            <input
                value={csvData.max_z || ''}
                type = 'number'
                readOnly
                name='max_z'
                onChange = {handleCsvChange}
            /><br></br>
            <label><b> Min - Z </b></label>
            <input
                value={csvData.min_z || ''}
                type = 'number'
                readOnly
                name='min_z'
                onChange = {handleCsvChange}
            /><br></br>
        {csvUpload ? <Chart /> : ''} <br></br>
            <div>
                  <button type = 'submit'>
                    Submit
                  </button>
            </div>

        </form>
    </div>

  )
}
