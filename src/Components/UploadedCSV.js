import React from 'react';

import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import Chart from './Chart';
import { Button } from  '@material-ui/core';



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
            <label className='label'><b> Max - X </b></label>
            <input
                value={csvData.max_x || ''}
                type = 'number'
                readOnly
                name='max_x'
                onChange = {handleCsvChange}
            /><br></br>
            <label className='label'><b> Min - X </b></label>
            <input
                value={csvData.min_x || ''}
                type = 'number'
                readOnly
                name='min_x'
                onChange = {handleCsvChange}
            /><br></br>
            <label className='label'><b> Max - Y </b></label>
            <input
                value={csvData.max_y || ''}
                type = 'number'
                readOnly
                name='max_y'
                onChange = {handleCsvChange}
            /><br></br>
            <label className='label'><b> Min - Y </b></label>
            <input
                value={csvData.min_y || '' }
                type = 'number'
                readOnly
                name='min_y'
                onChange = {handleCsvChange}
            /><br></br>
            <label className='label'><b> Max - Z </b></label>
            <input
                value={csvData.max_z || ''}
                type = 'number'
                readOnly
                name='max_z'
                onChange = {handleCsvChange}
            /><br></br>
            <label className='label'><b> Min - Z </b></label>
            <input
                value={csvData.min_z || ''}
                type = 'number'
                readOnly
                name='min_z'
                onChange = {handleCsvChange}
            /><br></br>
        {csvUpload ? <Chart /> : ''} <br></br>
            <div className='button1'>
                  <Button type = 'submit' size = 'large'>
                    Submit
                </Button>
            </div>

        </form>
    </div>

  )
}
