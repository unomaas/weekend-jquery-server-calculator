//#region ⬇ All document setup and global variables below:
//#region ⬇ readyNow document ready functionality below:
$( readyNow );
function readyNow() {
  // ⬇ Document ready & rendered:
  console.log( "jQuery is loaded!" ) 
  renderDom();
  // ⬇ Click listeners below:
  $( '#equalsButton' ).on( 'click', clickedEquals );
  $( '#plusButton' ).on( 'click', clickedPlus );
  $( '#minusButton' ).on( 'click', clickedMinus );
  $( '#multiplyButton' ).on( 'click', clickedMultiply );
  $( '#divideButton' ).on( 'click', clickedDivide );
  $( '#clearButton' ).on( 'click', clickedClear );
} // End handleReady function. 
//#endregion ⬆ readyNow document ready functionality above. 


//#region ⬇ Global variables below:
let userEquationObject = {};
//#endregion ⬆ Global variables above. 
//#endregion ⬆ All document setup and global variables above. 


//#region ⬇ All GET/POST functionality below: 
//#region ⬇ renderDom functionality below, runs on page load:
function renderDom() { // AKA "Get Messages"
  // ⬇ GET priorEquations from the server:
  $.ajax({
    type: 'GET', 
    url: '/priorEquations'
  }).then( function( response ) {
    console.log( response );
    // ⬇ Empty and append each time this runs: 
    let historyOutput = $( '#historyOutput' );
    historyOutput.empty();
    for ( let i = 0; i < response.length; i++ ) {
      let priorEquations = response[i];
      //⬇ FIX THIS CODE TOMO, IT NEEDS POST OUTPUT FUNCTIONALITY AND TO ADD RESULT KEY
      // ${priorEquations[i].leftInput} ${priorEquations[i].operator} ${priorEquations[i].rightInput} = ${priorEquations[i].result}
      historyOutput.append(`
        Test Test Test
      `)
    } // End for loop. 
  }).catch( function( error ) {
    alert( 'Unable to GET prior equations, please try again later.' )
    console.log( error );
  }) // End Ajax .then & .catch.
} // End renderDom function. 
//#endregion ⬆ renderDom functionality above. 


//#region ⬇ clickedEquals functionality below:
function clickedEquals() { // AKA "Send Messages" / "SUBMIT"
  console.log( 'Test Log: in clickedEquals' );
  // ⬇ Declaring variables to hold each input value:
  let leftInput = $( '#leftInput' ).val();
  let rightInput = $( '#rightInput' ).val();
  // ⬇ Adding those inputs to the userEquationObject:
  userEquationObject.leftInput = leftInput;
  userEquationObject.rightInput = rightInput;
  console.log( 'Test Log: userEquationObject is:', userEquationObject );
  // ⬇ POST priorEquations from the server:
  $.ajax({
    type: 'POST',
    url: '/priorEquations',
    data: userEquationObject,
  }).then( function( response ){
    console.log( response );
    // ⬇ GET & Re-render DOM with updated information:
    renderDom();
  }).catch( function( error ) {
    alert( 'Unable to POST prior equations, please try again later.' )
    console.log( error );
  }) // End Ajax .then & .catch.
} // End clickedEquals function. 
//#endregion ⬆ clickedEquals functionality above. 
//#endregion ⬆ All GET/POST functionality  above. 


//#region ⬇ All operator button functionality below:
//#region ⬇ clickedPlus functionality below: 
function clickedPlus() {
  console.log( 'Test Log: in clickedPlus' );
  userEquationObject.operator = '+';
} // End clickedPlus.
//#endregion ⬆ clickedPlus functionality above. 


//#region ⬇ clickedMinus functionality below: 
function clickedMinus() {
  console.log( 'Test Log: in clickedMinus' );
  userEquationObject.operator = '-';
} // End clickedMinus.
//#endregion ⬆ clickedMinus functionality above. 


//#region ⬇ clickedMultiply functionality below: 
function clickedMultiply() {
  console.log( 'Test Log: in clickedMultiply' );
  userEquationObject.operator = '*';
} // End clickedMultiply.
//#endregion ⬆ clickedMultiply functionality above. 


//#region ⬇ clickedDivide functionality below: 
function clickedDivide() {
  console.log( 'Test Log: in clickedDivide' );
  userEquationObject.operator = '/';
} // End clickedDivide.
//#endregion ⬆ clickedDivide functionality above. 


//#region ⬇ clickedClear functionality below: 
function clickedClear() {
  console.log( 'Test Log: in clickedClear' );
  // ⬇ Clearing input values (and possibly object?) on click:
  $( '.numberInputs' ).val('');
} // End clickedClear.
//#endregion ⬆ clickedClear functionality above. 
//#endregion ⬆ All operator button functionality above. 

// let roundInfo = [];

// function clickedSubmit() {
//   console.log('Test Log: in clickedSubmit');
//   let guess1 = $('#player1Input').val();
//   let guess2 = $('#player2Input').val();
//   let guess3 = $('#player3Input').val();
//   let guess4 = $('#player4Input').val();
//   // ⬇ Create output object to store those inputs:
//   let guesses = {
//     guess1: guess1,
//     guess2: guess2,
//     guess3: guess3,
//     guess4: guess4
//   }
//   // ⬇ Logging the guesses for us to see: 
//   console.log('The guesses are: ', guesses);
//   // ⬇ Sending those guesses to the server:
//   $.ajax({
//     method: 'POST', // Posting information. 
//     url: '/guesses', // Called a "route".
//     data: guesses, 
//   }).then(function (response) { // .then handles happy things; 2XX responses.
//     console.log(response);
//   }).catch(function (error) { // .catch handles bad things; 4XX or 5XX errors. 
//     console.log(error)
//     alert('Something went wrong with GET, try again.')
//   }) // End Ajax .then and .catch functions. 
//   // ⬇ Getting those guesses from the server:
//   $.ajax({
//     method: 'GET',
//     url: '/results'
//   }).then(function (response) {
//     console.log(response);
//     renderDom(response);
//   }).catch(function (error) {
//     console.log(error);
//     alert('Something went wrong with GET')
//   })
// } // End clickedSubmit function. 

// // ⬇ Events to run when clicking Restart:
// function clickedRestart() {
//   console.log('clicked restart')
//   $('#guessOutput').text("");
//   $.ajax({
//     method: 'GET',
//     url: '/restart',
//   }).then(function (response) {
//     console.log(response);
//   }).catch(function (error) {
//     console.log(error);
//     alert('Something went wrong with GET, try again.')
//   }) // Ajax GET .then call. 
// } // End clickedRestart function

// // ⬇ Function to renderDom:
// function renderDom(info) {
//   // ⬇ Appending to DOM: 
//   $('#guessOutput').append(`
//     <tr>
//       <td class="roundNum">${info[4].rounds}</td>
//       <td class="p1GuessCell">${info[0].value}</td>
//       <td class="p1WinCell">${info[0].won}</td>
//       <td class="p2GuessCell">${info[1].value}</td>
//       <td class="p2WinCell">${info[1].won}</td>
//       <td class="p3GuessCell">${info[2].value}</td>
//       <td class="p3WinCell">${info[2].won}</td>
//       <td class="p4GuessCell">${info[3].value}</td>
//       <td class="p4WinCell">${info[3].won}</td>
//     </tr>
//   `);
// }