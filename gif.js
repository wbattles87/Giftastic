var userArray= [];                             // created a blank array
var userInput = $("#categoryinput");           // called the space where user inputs their search
var buttons = $(".headerforbuttons");          // sets the variable for the div class to where buttons will be displayed

$("#submitButton").on("click", function()
{
	event.preventDefault();
	insert();

});


$(document).on("click", ".people", function() 				// anytime a button is clicked it will run this function (except submit because it has a diff id)	
{
	var person = $(this).attr("data-name");				// this sets the variable person equal to whatever button is clicked
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=dc6zaTOxFJmzC&limit=10";		// this is the search through the api giphy for the person they entered


    $.ajax(
    {
        url: queryURL,
        method: "GET"
    })											// Performs get request from the var for the url.  

    .done(function(response)					//for when data comes back from the API
    {
    	var results = response.data;			//stores array of results in the results variable
    	for(var i=0; i < results.length; i++)	//loop through the array for every reult item
    	{
    		var gifDiv = $("<div class='item'>");	//creates a div class item and stores it in variable gifDiv
    		var personImage = $("<img>");			// creates img tag and stores it in variable personImage

    		personImage.attr("src", results[i].images.fixed_height.url);	//gives the image tag we just declared the attribute of the property we just pulled off the results

    		gifDiv.append(personImage);				// append the image to the div we created

    		$(".gifcontainer").prepend(gifDiv);
    	}
    });

});


function insert()								//this runs off of the submit button in html
{
	userArray.push($(userInput).val());			            // calls the blank var userArray that is a blank array and puts the submitted items into the array at end
	clearAndShow();								// runs the next function
}

function clearAndShow()
{
	$(userInput).val("");						// trying to clear the field for user input on submit but not working
	console.log(userArray);
	makeButtons();
}

function makeButtons()
{
	$(".headerforbuttons").empty();				//this will empty the div class so we get no repeats
	for(i=0; i < userArray.length; i++)			
	{
		var a=$("<button>");					// this is creating the start and end tag of <button> in html
		a.addClass("people")					// this adds a class to the variable a and the class is people
		a.attr("data-name", userArray[i]);		//adds a data-attribute with a value of userArray at index[i]
		a.text(userArray[i]);					// This adds the text to the button 
		$(".headerforbuttons").append(a);		// this adds the button to the html div class headerforbuttons
	}
}



