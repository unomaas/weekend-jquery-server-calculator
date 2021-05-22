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

//#region  ⬇ Creating variables on server to reference later: 
const priorEquations = []; // Empty array to hold prior equation's objects.
//#endregion ⬆ Creating server-side variables above. 

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
  // FOR TOMO: Create the function to do the math, call it below.
  // FOR TOMO: Have it create/add a key value pair of the result to the array.
  // FOR TOMO: Then send that back and create the string interpolation to append it.
  // FOR TOMO: This is a good stopping point and you're doing great! 
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


//  // ⬇ Logic for restartButton below:
//  app.get('/restart', (req, res) => {
//   console.log('Got to /restart');
//   randomNumberGen();
//   roundCount = 0;
//   let rounds = {roundCount};
//   res.send(rounds);
//   // countRounds();
// });

// // ⬇ Logic for generating random number to guess below: 
// function randomNumberGen() {
//   randomNum = Math.ceil(Math.random() * 25);
//   console.log('Random number is:', randomNum);
// }

// // ⬇ Logic for guessing game/numbers below: 
// function checkGuesses(object) {
//   console.log('Test Log: in checkGuesses');
//   // ⬇ Reset guessArray first:
//   guessArray = [];
//   for (let guesses in object) {
//     // ⬇ Placeholder object:
//     let newObj = {};
//     console.log(`${guesses}: ${object[guesses]}`); 
//     // ⬇ If one of the guesses is right, send back true:
//     if (object[guesses] == randomNum) {
//       newObj.won = '<label class="bg-success text-white" >WINNER!</label>';
//     }
//     // ⬇ If the guesses are too high or low, send back high/low: 
//     else if (object[guesses] > randomNum){
//       newObj.won = 'Too high!';
//     }
//     else {
//       newObj.won = 'Too low!';
//     } // End if/else winner conditional. 
//     newObj.player = guesses;
//     newObj.value = object[guesses];
//   guessArray.push(newObj);
//   } // End for in loop. 
//   console.log(guessArray);
// } // End checkGuesses function. 

// // ⬇ Logic for round counter below: 
//  function countRounds(){
//   console.log('Test Log: in countRounds');
//   roundCount += 1;
//   console.log('The round count is: ', roundCount);
//  } // End countRounds function. 