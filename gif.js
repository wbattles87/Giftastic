var userArray= [];                             // created a blank array
var userInput = $(".categoryinput");           // called the space where user inputs their search
var buttons = $(".headerforbuttons");          // sets the variable for the div class to where buttons will be displayed



function insert()								//this runs off of the submit button in html
{
	userArray.push(userInput.value);            // calls the blank var userArray that is a blank array and puts the submitted items into the array at end
	clearAndShow();								// runs the next function
}



function clearAndShow()
{
	userInput.value. = "";						// trying to clear the field for user input on submit but not working
	console.log([userArray]);
}





