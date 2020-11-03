import React from 'react';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

import {multiStepContext} from './StepContext';
import {useContext} from 'react';
import { Button} from  '@material-ui/core';

export default function GeneratePDF () {
const {data,csvFinalData,userData,csvUpload} = useContext(multiStepContext);
const generate = () => {
  const doc = new jsPDF();
  const tableRows = [];
  const tData = [];
  const tableColumn = ['project Name', 'Project Description','Client','Contractor','Max-X','Min-X','Max-Y','Min-Y','Max-Z','Min-Z'];

  if(csvUpload){
      const tData = [ userData.values.projectName,
                    userData.values.projectDes,
                    userData.values.client,userData.values.contractor,
                    csvFinalData.csvData.max_x,csvFinalData.csvData.min_x,csvFinalData.csvData.max_y,
                    csvFinalData.csvData.min_y,csvFinalData.csvData.max_z,csvFinalData.csvData.min_z ];
        tableRows.push(tData);
        doc.autoTable(tableColumn,tableRows, {startY : 30 });
        doc.text('Report',14,15);
        doc.save('Report_react_assignment.pdf');
    } else {
        const tData = [ userData.values.projectName,
                      userData.values.projectDes,
                      userData.values.client,userData.values.contractor,
                      data.values.max_x,data.values.min_x,data.values.max_y,
                      data.values.min_y,data.values.max_z,data.values.min_z ];
          tableRows.push(tData);
          doc.autoTable(tableColumn,tableRows, {startY : 30 });
          doc.text('Report',14,15);
          doc.save('Report_react_assignment.pdf');

    }
}

return (
  <>
  <Button variant = 'contained'
          color= 'primary'
          onClick={() => generate()}>
          Generate PDF Report
  </Button>
  </>
)
}
