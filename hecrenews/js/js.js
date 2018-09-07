/*===================================
  Global Variables
  ===================================*/
var $window = $(window);
var WALLPAPER_SIZE;

/*===================================
  Wait for DOM Elements to load
  ===================================*/
$(function(){
	//Load in the navigation bar
	$("#top-nav").load("/hecrenews/body-sections/nav.html");
	//Load in the footer
	$("#footer").load("/hecrenews/body-sections/footer.html");
	//Setup the wallpaper divs
	WALLPAPER_SIZE = $window.width() * 0.25;
	wallpaperSetup();
	$window.resize(function resize(){
		WALLPAPER_SIZE = $window.width() * 0.25;
		wallpaperSetup();
	});
});

/*===================================
  Organized Functions
  ===================================*/
function wallpaperSetup() {
	//Set the height and background image of wallpaper divs
	$(".wallpaper").css({
		"background-image" : "url(" + $(".wallpaper").attr('id') + ")",
		"height" : String(WALLPAPER_SIZE) + "px"
	});
	//Center the box
	$(".title-box").css("margin-top", String(WALLPAPER_SIZE / 2 - $(".title-box").height()) + "px");

}

function idExists(idName) {
	return($(idName).length != 0);
}

function insertAuthor(link) {
	//Check if it's an article and add the author
	if (idExists("#author")) {
		$("#author").load(link);
	} 
}

/*===================================
  Add a person card
  ===================================*/
//Add Card(s)
function createPersonCards(divName, ...links) {
	//Get the data from the other page and use the callback function
	for (var i = 0; i < links.length; i++) {
		//Append the empty person card to the specified div
		$(divName).append("<div class='person-card'><div class='person-name'></div><div class='person-image'></div><div class='person-bio'></div></div>");
		//Call the function that addes information to the person card
		$.ajax({url: links[i], type: "get", success: createPersonCard(i, divName, links)});
	}
}

/* NOTE */
//I am going to split the appending of the animal card into chunks
//To prevent redundant code and to organize it a bit better
function createPersonCard(i, divName, links) {
	return function(data) {
		//Init Variables
		var name, image, bio, information;
		//Set the information variable to array with comments and the information
		information = data.slice(data.search("<ul>") + 4, data.search("</ul>"));
		information = information.split("<li>");
		information.splice(0, 1);
		for (var j = 0; j < information.length; j++) {
			information[j] = information[j].slice(0, information[j].search("</li>"));
		}
		//Set the variables of the information
		name = information[0];
		image = information[1];
		bio = information[2];
		console.log(name, i)
		//Add all the information
		$($(divName + " .person-card .person-name")[i]).append("<h1>" + name + "</h1>");
		$($(divName + " .person-card .person-image")[i]).append("<img src=" + image + ">");
		$($(divName + " .person-card .person-bio")[i]).append("<p>" + bio + "</p>");
	}
}
