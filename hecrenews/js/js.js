/*===================================
  Global Variables
  ===================================*/

/*===================================
  Wait for DOM Elements to load
  ===================================*/
$(function(){
	//Load in the navigation bar
	$("#top-nav").load("/hecrenews/nav.html");
  	//Set the background image of wallpaper divs
	$(".wallpaper").css("background-image", "url(" + $(".wallpaper").attr('id') + ")");
});
