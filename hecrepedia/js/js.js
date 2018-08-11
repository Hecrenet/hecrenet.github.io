/*===================================
  Global Variables
  ===================================*/
var MIN_TAB_WIDTH = 326;
var ANIMAL_CARD_GROUPS = 2;

/*===================================
  Functions that need all DOM objects
  to load first
  ===================================*/
$(function() {
	//Load in the Navigation Bar
	$("#top-nav").load("/hecrepedia/nav.html");
	//Set the style of the tab
	setTabStyle();
	//Open the designated tab
	document.getElementById("defaultOpen").click();
});

/*===================================
  Copied functions from first
  Hecrepedia, compressed a few of them
  ===================================*/
/* WELCOME TO THE PROBLEM ZONE */
//These two function do not work, as intended
//Using Chrome developer tools, I have discovered that the requests are being sent at successed in the correct order
//But, they do not appear on the page in the correct order, because it is random, and I do not know why this is
//If it wasn't random, I could fix it. When I had hard-coded the ANIMAL_CARD_GROUPS as 2, and didn't even use ANIMAL_CARD_GROUPS as a variable, it worked
//Now, I do not know what is happening.

//The animal-card-group divs are being created correctly, and the animal cards are being created as intended, just in the wrong order
//Also, I do not know how return functions work, I just copied and pasted from somewhere
//By that, I mean that I don't know how the return function is being passed the data parameter from the ajax success function
//I think that's it

//Add Card(s)
function addAnimalCards(divName, ...links) {
	//Figure out how many animal card groups to add
	var animalCardGroups = links.length % ANIMAL_CARD_GROUPS == 0 ? links.length / ANIMAL_CARD_GROUPS :  (ANIMAL_CARD_GROUPS - links.length % ANIMAL_CARD_GROUPS + links.length) / ANIMAL_CARD_GROUPS;
	//Add the animal card groups
	for (var i = 0; i < animalCardGroups; i++) {$(divName).append("<div class='animal-card-group'></div>");}
	//Ajax... I have to use async true because synchronous is too slow
	for (var i = 0; i < links.length; i++) {$.ajax({url: links[i], type: "get", success: createAnimalCard(i, divName, links)});}
}

function createAnimalCard(i, divName, links) {
	return function(data) {
		//Init Variables
		var image, name, information, tempNum;
		//Find Name
		name = data.slice(data.search("<title>") + 7, data.search("</title>"));
		//Set the information variable to array with comments and the information
		information = data.slice(data.search("fillOutPage"), data.length);
		information = information.slice(information.search("\\(") + 1, information.search("\\)"));
		information = information.split("\n");
		//Set the variables of the other information
		image = information[2].slice(information[2].search('"'), information[2].length - 1);
		
		tempNum = i % ANIMAL_CARD_GROUPS == 0 ? i / ANIMAL_CARD_GROUPS : (ANIMAL_CARD_GROUPS - i % ANIMAL_CARD_GROUPS + i) / ANIMAL_CARD_GROUPS - 1;
		console.log("Animal Card Group: " + tempNum);
		console.log("Animal Number in Loop: " + i);
		if (i % ANIMAL_CARD_GROUPS == 0) {
			$($(divName + " .animal-card-group")[i / ANIMAL_CARD_GROUPS]).append("<div class='animal-card'><div class='animal-img'><a href=" + links[i] + "><img src=" + image + "></a></div><div class='animal-name'><p>" + name + "</p></div></div>");
		} else {
			$($(divName + " .animal-card-group")[( ANIMAL_CARD_GROUPS - i % ANIMAL_CARD_GROUPS + i) / ANIMAL_CARD_GROUPS - 1]).append("<div class='animal-card'><div class='animal-img'><a href=" + links[i] + "><img src=" + image + "></a></div><div class='animal-name'><p>" + name + "</p></div></div>");
		}
	}
}

//Add Tabs
function addTabs(...names) {for (var i = 0; i < names.length; i++) {$($(".tab")[0]).append("<button class=\"tablinks\" onclick=\"openTab(event,'" + names[i] + "')\">" + names[i] + "</button>");}$($(".tab .tablinks")[0]).addClass("active");$(".tab .tablinks")[0].id = "defaultOpen";}
//Switch the content tabs
function openTab(evt, tabName) {var i, tabcontent, tablinks;tabcontent = document.getElementsByClassName("tabcontent");for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}tablinks = document.getElementsByClassName("tablinks");for (i = 0; i < tablinks.length; i++) {tablinks[i].className = tablinks[i].className.replace(" active", "");}document.getElementById(tabName).style.display = "block";evt.currentTarget.className += " active";changeCardGroupHeight();}

/*===================================
  Onclick functions
  ===================================*/
//Add the "open" class to an element with an id
function openId(...idName) {
	for (var i = 0; i < idName.length; i++) {
		if ($($(idName[i])[0]).hasClass("open")) {
			$($(idName[i])[0]).removeClass("open");
		} else {
			$($(idName[i])[0]).addClass("open");
		}
	}
}
//Add the "open" class to an elements with a common class
function openClass(className) {
	for (var i = 0; i < $(className).length; i++) {
		if ($($(className)[i]).hasClass("open")) {
			$($(className)[i]).removeClass("open")
		} else {
			$($(className)[i]).addClass("open")
		}
	}
}

/*===================================
  Background Functions
  ===================================*/
(function($) {
	//Resize Stuff
	var $window = $(window);

	$window.resize(function resize(){
		if ($window.width() > 672) {$(".dropdown").removeClass("open");}
		setTabStyle();
		changeCardGroupHeight();
	});
})(jQuery);

/*===================================
  Functions used for organization ):
  ===================================*/
function changeCardGroupHeight() {
	var cardContainers = $(".text-card-group");
	cardContainers.css("height", "auto");
	var myHeight;
	for (var i = 0; i < cardContainers.length; i++) {
		myHeight = String($(cardContainers[i]).height());
		$(cardContainers[i]).css("height", myHeight);
	}
}

function setTabStyle() {
	if ($($(".tab")[0]).height() > 47 && $($(".tab")[0]).width() < MIN_TAB_WIDTH) {$($(".tab button")).css("width", "100%")} else {$($(".tab button")).css("width", "auto");}
}
