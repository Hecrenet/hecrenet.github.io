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
	$("#top-nav").load("/hecrenews/nav.html");
	//Setup the wallpaper divs
	WALLPAPER_SIZE = $window.width() * 0.25;
	wallpaperSetup();
	$window.resize(function resize(){
		WALLPAPER_SIZE = $window.width() * 0.25;
		wallpaperSetup();
	});
});

/*===================================
  Reuseable Functions
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

//Add Card(s)
function createPersonCards(divName, ...links) {
	//Get the data from the other page and use the callback function
	for (var i = 0; i < links.length; i++) {$.ajax({url: links[i], type: "get", success: createAnimalCard(i, divName, links)});}
}

/* NOTE */
//I am going to split the appending of the animal card into chunks
//To prevent redundant code and to organize it a bit better
function createAnimalCard(i, divName, links) {
	return function(data) {
		//Init Variables
		var name, image, bio, information;
		//Set the information variable to array with comments and the information
		information = data.slice(data.search("<ul>") + 4, data.search("</ul>"));
		information = information.split("<li>");
		information.splice(0, 1);
		for (var j = 0; j < information.length; j++) {
			information[j].slice(0, information[j].length - 4);
		}
		console.log(information);
		//Set the variables of the information
		name = information[0];
		image = information[1];
		bio = information[2];
		console.log(name + "\n" + image + "\n" + bio);
		/*
		//Append the animal card, I wish I could make this look better, because I would refer to note.
		$($(divName)[i]).append("<div class='animal-img'><a href=" + links[i] + "><img src=" + image + "></a></div><div class='animal-info'><div class='animal-name'><p>" + name + "</p></div><div class='extra-info'><ul></ul></div></div>");
		//Add all the information
		$($(divName + " ")[i]).append("Coming Soon");
		$($(divName + " ")[i]).append(bio);
		$($(divName + " ")[i]).append(history);
		$($(divName + " ")[i]).append("Coming Soon");
		$($(divName + " ")[i]).append(trivia);
		*/
	}
}

/*===================================
  Test
  ===================================*/
/*
(function($) {
	//Resize Stuff
	$window.resize(function resize(){
		WALLPAPER_SIZE = $window.height() / 2;
		wallpaperSetup();
	});
})(jQuery);
*/
