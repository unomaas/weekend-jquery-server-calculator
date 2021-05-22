# Todo List

- [X] SERVER SETUP FILE STRUCTURE
    - [X] Make .gitignore file in root folder
    - [] Make readme.md file in root folder
        - [X] Make server folder in root folder
            - [X] Make server.js file in server folder
            - [X] Make modules folder
            - [X] Make public folder
                - [X] Add favicon.ico file in public folder
                - [X] Make index.html in public folder
                    - [X] Link "./styles/style.css"
                    - [X] Source in "./vendors/jquery-3.6.0.js" above
                    - [X] Source in "./scripts/client.js" 
                - [X] Make scripts folder
                    - [X] Make client.js file here
                        - [X] Make sure to source in jQuery
                - [X] Make styles folder
                    - [X] Make style.css file here
                - [X] Make vendors folder
                    - [X] Add jQuery.js file here
                    - [X] Source in bootstrap if you like

- [x] LOGIC FUNCTIONALITY
  - [x] On page load, have everything displayed via GET function. 
  - [x] User inputs two values.
  - [x] User selects mathematical operation.
  - [x] When the submit button (=) is clicked:
    - [x] capture the input, 
    - [x] put into object, 
    - [x] send this object to the server via a POST. 
  - [x] The clear button should clear the user input fields. 

- [] SERVER-SIDE FUNCTIONALITY
  - [x] Build out the server-side logic to compute the numbers as appropriate. 
  - [x] The server should be able to handle: Addition, Subtraction, Multiplication, and Division.
  - [x] Once the calculation is complete, send back the OK (sendStatus 201). 
  - [] You should do a GET request after the POST to get the actual calculation (and to display everything on the DOM).

- [] HISTORY RECORD
  - [] Keep a record of all math operations and solutions on the server.
  - [] Display a list of all previous calculations ont he page when it loads using a GET request.
  - [] Update the list when a new calculation is made. 

​- [x] HTML
  - [x] Create two inputs that take in numbers.  
  - [x] Between those two inputs are four buttons: * / - +. 
  - [x] On the right is two buttons: = Clear.
  - [x] Below that is the result of the equation. 
  - [x] Below that is an UL of the last equations entered. 


