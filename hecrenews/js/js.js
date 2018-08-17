/*===================================
  Global Variables
  ===================================*/

/*===================================
  Wait for DOM Elements to load
  ===================================*/
$(function(){
  	//Set the background image of wallpaper divs
	$(".wallpaper").css("background-image", "background-image: url(" + $(".wallpaper").attr('id') + ")");
});
