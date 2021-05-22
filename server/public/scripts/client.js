//#region ⬇⬇ All document setup and global variables below:
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
//#endregion ⬆⬆ All document setup and global variables above. 


//#region ⬇⬇ All GET/POST functionality below: 
//#region ⬇ renderDom functionality below, runs on page load:
function renderDom() { // AKA "Get Messages"
  // ⬇ GET priorEquations from the server:
  $.ajax({
    type: 'GET', 
    url: '/priorEquations'
  }).then( function( response ) {
    console.log( `Client Log: The response is:`, response );
    // ⬇ Declaring variables to be used: 
    let userEquationObject = response;
    let historyOutput = $( '#historyOutput' );
    let resultOutput = $( '#resultOutput' );
    // ⬇ Empty and append each time this runs: 
    historyOutput.empty();
    resultOutput.empty();
    // ⬇ Looping through the object to append DOM with: 
    for ( let i = 0; i < response.length; i++ ) {
      historyOutput.append(`
        <li>${userEquationObject[i].equation}</li>
      `)
      resultOutput.text(`${userEquationObject[i].result}`)
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
//#endregion ⬆⬆ All GET/POST functionality  above. 


//#region ⬇⬇ All operator button functionality below:
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
//#endregion ⬆⬆ All operator button functionality above. 
