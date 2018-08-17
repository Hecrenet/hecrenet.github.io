/*===================================
  Global Variables
  ===================================*/
var WALLPAPER_SIZE = 500;

/*===================================
  Wait for DOM Elements to load
  ===================================*/
$(function(){
	//Load in the navigation bar
	$("#top-nav").load("/hecrenews/nav.html");
	wallpaperSetup();
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
	$(".title-box").css("margin-top", String(WALLPAPER_SIZE - $(".title-box").height));
}
