/*===================================
  Global Variables
  ===================================*/
var MIN_TAB_WIDTH = 326;
var ANIMAL_CARD_GROUPS = 4;

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
//Add Card(s)
function addAnimalCards(divName, ...links) {
	//Figure out how many animal card groups need to be made
	var animalCardGroups = links.length % ANIMAL_CARD_GROUPS ? links.length / ANIMAL_CARD_GROUPS : (ANIMAL_CARD_GROUPS - links.length % ANIMAL_CARD_GROUPS + links.length) / ANIMAL_CARD_GROUPS;
	//Create the animal card groups
	for (var i = 0; i < animalCardGroups; i++) {$(divName).append("<div class='animal-card-group'></div>");}
	//Create the animal card
	for (var i = 0; i < links.length; i++) {$.ajax({url: links[i], type: "get", success: createAnimalCard(i, divName, links)});}
}

function createAnimalCard(i, divName, links) {
	return function(data) {
		var image, name, information, tempNum;
		/*
		//Get the Animal Name
		name = data.slice(data.search("<title>") + 7, data.search("</title>"));
		//Set the information array by splitting the information by new lines in the fillOutPage() function
		information = data.slice(data.search("fillOutPage"), data.length);
		information = information.slice(information.search("\\(") + 1, information.search("\\)"));
		information = information.split("\n");
		//Set the variables to be put into the $.append() line
		image = information[2].slice(information[2].search('"'), information[2].length - 1);
		*/
		//Figure out which Animal Card Group the Animal Card is in
		var divIndex = i % 4 == 0 ? i / 4 : (ANIMAL_CARD_GROUPS - i % ANIMAL_CARD_GROUPS + i) / 4 - 1 ;
		//Append the animal card
		$($(divName + " .animal-card-group")[divIndex]).append("<div class='animal-card'><div class='animal-img'><a href=" + links[i] + "><img></a></div><div class='animal-name'><p>" + name + "</p></div></div>");
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
