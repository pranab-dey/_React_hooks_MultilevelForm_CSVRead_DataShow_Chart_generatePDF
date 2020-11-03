import React from 'react';
import { TableContainer, TableHead, TableBody,TableRow,TableCell, Table} from '@material-ui/core';
import {multiStepContext} from './StepContext';
import {useContext} from 'react';
import '../styles.css';

import GeneratePDF from './GeneratePDF';



export default function Result () {

  const {userData,data,csvFinalData} = useContext(multiStepContext);

  return(
    <div>
      <TableContainer style = {{display: 'flex', justifyContent: 'center'}}>
      <Table border = '1' style = {{ width: '90%', justifyContent : 'center', fontfamily : 'Courier',  background: 'MediumSeaGreen' }} size = 'small' aria-label='caption table' className = 'table'>
        <TableHead>
        <TableRow style= {{backgroundColor: 'burlywood', color: 'aliceblue'}}>
            <TableCell> <b>Project Name </b></TableCell>
            <TableCell> <b>Project Description</b></TableCell>
            <TableCell> <b>Client</b></TableCell>
            <TableCell> <b>Contractor</b></TableCell>
            <TableCell> <b>Max - X</b></TableCell>
            <TableCell> <b>Min - X</b></TableCell>
            <TableCell> <b>Max - Y</b></TableCell>
            <TableCell> <b>Min - Y</b></TableCell>
            <TableCell> <b>Max - Z</b></TableCell>
            <TableCell> <b>Min - Z</b></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>

              <TableRow>
                    <TableCell> {userData.values.projectName}</TableCell>
                    <TableCell>{userData.values.projectDes}</TableCell>
                    <TableCell>{userData.values.client}</TableCell>
                    <TableCell>{userData.values.contractor}</TableCell>

                    { Object.keys(data).length > 0 ?
                    <>
                    <TableCell> {data.values.max_x}</TableCell>
                    <TableCell> {data.values.min_x}</TableCell>
                    <TableCell> {data.values.max_y}</TableCell>
                    <TableCell> {data.values.min_y}</TableCell>
                    <TableCell> {data.values.max_z}</TableCell>
                    <TableCell> {data.values.min_z}</TableCell>
                    </> : ''
                }
                    { Object.keys(csvFinalData).length > 0 ?

                    <>
                    <TableCell> {csvFinalData.csvData.max_x}</TableCell>
                    <TableCell> {csvFinalData.csvData.min_x}</TableCell>
                    <TableCell> {csvFinalData.csvData.max_y}</TableCell>
                    <TableCell> {csvFinalData.csvData.min_y}</TableCell>
                    <TableCell> {csvFinalData.csvData.max_z}</TableCell>
                    <TableCell> {csvFinalData.csvData.min_z}</TableCell>
                </> : ''
            }

              </TableRow>

          </TableBody>
          </Table>
          </TableContainer>
      <div>
         <br></br> <GeneratePDF />
    </div>
    </div>
  )
}
