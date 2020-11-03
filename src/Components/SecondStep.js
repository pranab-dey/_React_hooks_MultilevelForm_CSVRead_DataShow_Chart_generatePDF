import React from 'react';
import UploadedCSV from './UploadedCSV';
import { TextField, Button } from  '@material-ui/core';

import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

import { multiStepContext } from './StepContext';
import { useContext } from 'react';


import {CSVReader} from 'react-papaparse';

import { Bar } from '@reactchartjs/react-chart.js'

const INITIAL_STATE = {
  max_x: "",
  min_x: "",
  max_y: "",
  min_y: "",
  max_z: "",
  min_z: ""
};


function SecondStep (){
    const {
     handleSubmit,
     handleChange,
     handleBlur,
     values,
     errors,
     isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth);

    const { userData, data ,setData ,csvData, setCsvData, csvUpload, setCsvUpload, csvFinalData } = useContext(multiStepContext);






    const handleOnCsvDrop = (data) => {

        setCsvUpload(true);

        var i ;
        var output_x  = [] ;
        var output_y  = [] ;
        var output_z  = [] ;
        var output_kp = [] ;

        for (i = 0 ; i < data.length ; i++) {

           output_kp.push(Object.values(data[i].data)[0]);
           output_x.push(Object.values(data[i].data)[1]);
           output_y.push(Object.values(data[i].data)[2]);
           output_z.push(Object.values(data[i].data)[3]);

         }

         var min_x = arrayMin(output_x);
         var min_y = arrayMin(output_y);
         var min_z = arrayMin(output_z);

         var max_x = arrayMax(output_x);
         var max_y = arrayMax(output_y);
         var max_z = arrayMax(output_z);

        setCsvData ({
            ...csvData,
            'max_x' : max_x ,
            'min_x' : min_x ,
            'max_y' : max_y ,
            'min_y' : min_y ,
            'max_z' : max_z ,
            'min_z' : min_z ,
            'output_x' : output_x ,
            'output_y' : output_z ,
            'output_z' : output_x,
            'output_kp' : output_kp
        });

     };



     const arrayMin = (arr) => {
         var len = arr.length, min = Infinity;
         while (len--) {
           if (arr[len] < min) {
             min = arr[len];
           }
         }
         return min;
       };

   const arrayMax = (arr) => {
         var len = arr.length, max = -Infinity;
         while (len--) {
           if (arr[len] > max) {

             max = arr[len];
           }
         }
         return max;
       };

   return (
    <div className="container">
        <h1 className='h1'>React Assignment</h1>
        <br></br><br></br>


            <TextField label = "Project Name"
            value = { userData.values['projectName'] }
            margin = 'normal'
            variant = 'outlined'
            color = 'secondary'
            disabled /> <span></span>
            <TextField label = "Project Description"
            value = { userData.values['projectDes'] }
            margin = 'normal'
            variant = 'outlined'
            color = 'secondary'
            disabled /> <span></span>
            <TextField label = "Client"
            value = { userData.values['client'] }
            margin = 'normal'
            variant = 'outlined'
            color = 'secondary'
            disabled /> <span></span>
            <TextField label = "Contractor"
            value = { userData.values['contractor'] }
            margin = 'normal'
            variant = 'outlined'
            color = 'secondary'
            disabled /> <span></span>


    <h4 className = 'label'>Click Or Drag Upload</h4>

        <CSVReader
             onDrop={handleOnCsvDrop}
             config={{ header : true }}
             addRemoveButton
             >
            <span className = 'label' >Drop CSV file here or click to upload.</span>
        </CSVReader> <br></br>


        { csvUpload ?  <UploadedCSV /> :


        <form onSubmit={handleSubmit}>

            <label className='label'><b> Max - X </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="max_x"
                  value={values.max_x }
                  className={errors.max_x && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MAX -X "
                  type = 'number'
                /><br></br>
                {errors.max_x && <p className="error-text">{errors.max_x}</p>}<br></br>

            <label className='label'><b> Min - X </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="min_x"
                  value={values.min_x || '' }
                  className={errors.min_x && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MIN -X "
                  type = 'number'
                /><br></br>
                {errors.min_x && <p className="error-text">{errors.min_x}</p>}<br></br>

            <label className='label'><b> Max - Y </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="max_y"
                  value={values.max_y || '' }
                  className={errors.max_y && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MAX - Y"
                  type = 'number'
                /><br></br>
                {errors.max_y && <p className="error-text">{errors.max_y}</p>}<br></br>

            <label className='label'><b> Min - X </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="min_y"
                  value={values.min_y || ''}
                  className={errors.min_y && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MIN - Y"
                  type = 'number'
                /><br></br>
                {errors.min_y && <p className="error-text">{errors.min_y}</p>}<br></br>

            <label className='label'><b> Max - Z </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="max_z"
                  value={values.max_z || '' }
                  className={errors.max_z && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MAX -Z "
                  type = 'number'
                /><br></br>
                {errors.max_z && <p className="error-text">{errors.max_z}</p>}<br></br>

            <label className='label'><b> Min - Z </b></label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="min_z"
                  value={values.min_z || ''}
                  className={errors.min_z && "error-input"}
                  autoComplete="off"
                  placeholder="Enter MIN - Z"
                  type = 'number'
                /><br></br>
                {errors.min_z && <p className="error-text">{errors.min_z}</p>}<br></br>


            <div className='button1'>
                  <Button  disabled = {isSubmitting} type = 'submit' size = 'large'>
                    <b>Submit</b>
                </Button>
            </div>

        </form>
    }
    </div>
  );
}

export default SecondStep;
