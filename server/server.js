//#region ⬇⬇ All server setup and global variables below:
//#region ⬇ Server setup & functionality below:
// ⬇ Server setup code below:
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
// ⬇ This must be added before GET & POST routes below:
app.use(bodyParser.urlencoded({extended:true}))
// ⬇ Serve up static files (HTML, CSS, Client JS) below:
app.use(express.static('server/public'));
// ⬇ Shows when the server is running below:
app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
//#endregion ⬆ Server setup & functionality above.

//#region  ⬇ Creating global variables on server to reference later: 
const priorEquations = []; // Empty array to hold prior equation's objects.
//#endregion ⬆ Creating global server-side variables above. 
//#endregion ⬆⬆ All server setup and global variables above. 


//#region ⬇ GET & POST Routes below:
// ⬇ GET priorEquations to load on DOM: 
app.get('/priorEquations', ( req, res ) => {
  console.log( 'Server Log: Got to /priorEquations GET' );
  // ⬇ Sending priorEquations array in GET response: 
  res.send( priorEquations );
}); // End GET priorEquations.


// ⬇ POST priorEquations to add to DOM below: 
app.post('/priorEquations', ( req, res ) => {
  console.log( 'Server Log: Got to /priorEquations POST, req.body is:', req.body );
  // ⬇ Adding user's object input to end of priorEquations array:
  priorEquations.push( req.body );
  // ⬇ Saving user's object input as variable to push through function:
  let userEquationObject = req.body;
  // ⬇ Calling processEquation function to do the math:
  processEquation( userEquationObject );
  // ⬇ Logging that the POST was successful and what's in the array:
  console.log( 'Server POST: priorEquations is:', priorEquations ); 
  // ⬇ sendStatus 'Created' below: 
  res.sendStatus( 201 );
}) // End POST priorEquations.
//#endregion ⬆ GET & POST Routes above.


//#region ⬇ Logic for Equations below: 
function processEquation(userEquationObject) {
  // ⬇ Declaring variables to hold each input value:
  let leftInput = Number(userEquationObject.leftInput); // Needs to be Numbers. 
  let rightInput = Number(userEquationObject.rightInput); // Needs to be Numbers. 
  let operator = userEquationObject.operator; // Good as a string. 
  let result = 0; // Empty to hold the result number.  
  // ⬇ Logic to run the equation for each operator: 
  if (operator === '+') {
    result = leftInput + rightInput;
  } else if (operator === '-') {
    result = leftInput - rightInput;
  } else if (operator === '*') {
    result = leftInput * rightInput;
  } else if (operator === '/') {
    result = leftInput / rightInput;
  } // End if/else if operator conditional. 
  // ⬇ Saving the whole equation result as a string to send back:
  let equation = `${leftInput} ${operator} ${rightInput} = ${result}`; 
  // ⬇ Adding results back onto the object to send back to client:
  userEquationObject.equation = equation;
  userEquationObject.result = result;
} // End processEquation function. 
//#endregion ⬆ Logic for Equations above. 
