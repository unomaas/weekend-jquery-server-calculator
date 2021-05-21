//#region ⬇ readyNow document ready functionality below:
$( readyNow );
function readyNow() {
  // ⬇ Document ready & rendered:
  console.log( "jQuery is loaded!" ) 
  renderDom();
  // ⬇ Click listeners below:
  $( '#equalsButton' ).on( 'click', clickedEquals );
} // End handleReady function. 
//#endregion ⬆ readyNow document ready functionality above. 


//#region ⬇ renderDom functionality below, runs on page load:
function renderDom() {
  // ⬇ Get the priorEquations from the server:
  $.ajax({
    type: 'GET', 
    url: '/priorEquations'
  }).then( function( response ) {
    // ⬇ Empty and append each time this runs: 
    let historyOutput = $( '#historyOutput' );
    historyOutput.empty();
    // for ( let i=0; i<response.length; i++ ) {
    //   let priorEquations = response[i];
    //   historyOutput.append(`
    //     <li>${leftInput}.val() ${.operatorSelected} ${rightInput}.val() = ${result}</li>
    //   `) // Put a pin in this for now, go see how the inputs make an object, then we can reference them here.  
    // } // End for loop. 
  }).catch( function( error ) {
    alert( 'Unable to get prior equations, please try again later.' )
    console.log( error );
  }) // End Ajax .then & .catch.
} // End renderDom function. 
//#endregion ⬆ renderDom functionality above. 


//#region ⬇ clickedEquals functionality below:
function clickedEquals() {
  console.log('Test Log: in clickedEquals');
  // ⬇ Declaring variables to hold each input value:
  
} // End clickedEquals function. 
//#endregion ⬆ clickedEquals functionality above. 


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