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
