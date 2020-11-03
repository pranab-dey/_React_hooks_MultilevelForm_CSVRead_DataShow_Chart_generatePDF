
export default function validateAuth (values) {

let errors = {};
  // Project Name Errors
if (!values.projectName) {
    errors.projectName = " * Required Project Name *";
  }
  // Project Description Errors
if (!values.projectDes) {
    errors.projectDes = "* Required Project Description *";
  }
  // Client Name Errors
if (!values.client) {
    errors.client = "* Required Client Name *";
  }
  // Contrator Name Errors
if (!values.contractor) {
    errors.contractor = "* Required Contractor Name *";
    }
// Max-X Errors
if (!values.max_x) {
    errors.max_x = "* Required Max-X *";
    }
// Min-X Errors
if (!values.min_x) {
    errors.min_x = "* Required Min-X *";
    }
// Max-X Errors
if (!values.max_y) {
    errors.max_y = "* Required Max-Y *";
    }
// Min-X Errors
if (!values.min_y) {
    errors.min_y = "* Required Min-Y *";
    }
// Max-X Errors
if (!values.max_z) {
    errors.max_z = "* Required Max-Z *";
    }
// Min-X Errors
if (!values.min_z) {
    errors.min_z = "* Required Min-Z *";
    }


  return errors;
}
