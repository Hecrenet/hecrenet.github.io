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
	//Figure out how many animal card groups to add
	var animalCardGroups = links.length % ANIMAL_CARD_GROUPS == 0 ? links.length / ANIMAL_CARD_GROUPS :  (ANIMAL_CARD_GROUPS - links.length % ANIMAL_CARD_GROUPS + links.length) / ANIMAL_CARD_GROUPS;
	//Add the animal card groups
	for (var i = 0; i < animalCardGroups; i++) {
		$(divName).append("<div class='animal-card-group'></div>");
	}
	//Add the blank animal cards
	var cardGroup;
	for (var i = 0; i < links.length; i++) {
		cardGroup = i % ANIMAL_CARD_GROUPS == 0 ? i / ANIMAL_CARD_GROUPS : (ANIMAL_CARD_GROUPS - i % ANIMAL_CARD_GROUPS + i) / ANIMAL_CARD_GROUPS - 1;
		$($(divName + " .animal-card-group")[cardGroup]).append("<div class='animal-card'></div>");
	}
	//Get the data from the other page and use the callback function
	for (var i = 0; i < links.length; i++) {$.ajax({url: links[i], type: "get", success: createAnimalCard(i, divName, links)});}
}

/* NOTE */
//I am going to split the appending of the animal card into chunks
//To prevent redundant code and to organize it a bit better
function createAnimalCard(i, divName, links) {
	return function(data) {
		//Init Variables
		var image, name, bio, information;
		//Find Name
		name = data.slice(data.search("<title>") + 7, data.search("</title>"));
		//Set the information variable to array with comments and the information
		information = data.slice(data.search("fillOutPage"), data.length);
		information = information.slice(information.search("\\(") + 1, information.search("\\)"));
		//Set the facts
		//WIP
		information = information.split("\n");
		console.log(information);
		//Set the variables of the other information
		image = information[2].slice(information[2].search('"'), information[2].length - 1);
		bio = information[4].slice(information[4].search('"') + 1, information[4].length - 2);
		//Append the animal card, I wish I could make this look better, because I would refer to note.
		$($(divName + " .animal-card")[i]).append("<div class='animal-img'><a href=" + links[i] + "><img src=" + image + "></a></div><div class='animal-info'><div class='animal-name'><p>" + name + "</p></div><div class='extra-info'><ul></ul></div></div>");
		//Create the extra info stuff
		createExtraInfo(divName + " .animal-card .extra-info ul", i, "quick-facts", "bio", "history", "powers", "trivia");
		//Add all the stuff to the extra info content
		$($(divName + " .animal-card .bio-content")[i]).append(bio);
	}
}

function createExtraInfo(parentElement, i, ...tabNames) {
	for (var j = 0; j < tabNames.length; j++) {
		$($(parentElement)[i]).append("<li class=" + tabNames[j] + " onclick='openExtraInfoContent(this)'><a href='javascript:void(0)'></a><hr><div class='" + tabNames[j] + "-content content'></div></li>");
	}
	$($(parentElement + " .quick-facts a")[i]).html("<i class='fab fa-delicious'></i>");
	$($(parentElement + " .bio a")[i]).html("<i class='fas fa-user' style='#3a3a3a'></li>");
	$($(parentElement + " .history a")[i]).html("<i class='fas fa-clock' style='#3a3a3a'></li>");
	$($(parentElement + " .powers a")[i]).html("<i class='fas fa-hand-rock' style='color: #3a3a3a'></li>");
	$($(parentElement + " .trivia a")[i]).html("<i class='fas fa-chess-queen' style='color: #3a3a3a'></li>");
}

function openExtraInfoContent(object) {
	//Will stop 'bubbling'
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
	
	if ($(object).hasClass("active"))
		$(object).removeClass("active");
	else {
		$(object).parent().children().removeClass("active");
		$(object).addClass("active");
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
		if ($($(idName[i])[0]).hasClass("open"))
			$($(idName[i])[0]).removeClass("open");
		else
			$($(idName[i])[0]).addClass("open");
	}
}
//Add the "open" class to an elements with a common class
function openClass(className) {
	for (var i = 0; i < $(className).length; i++) {
		if ($($(className)[i]).hasClass("open"))
			$($(className)[i]).removeClass("open");
		else
			$($(className)[i]).addClass("open");
	}
}

//Add the "open" class to the obejct that called the function
function openThis(object) {
	if ($(object).hasClass("open"))
		$(object).removeClass("open");
	else
		$(object).addClass("open");
}

/*===================================
  Background Functions
  ===================================*/
(function($) {
	var $window = $(window);
	//Resize stuff
	$window.resize(function resize(){
		if ($window.width() > 672) {$(".dropdown").removeClass("open");}
		setTabStyle();
		changeCardGroupHeight();
	});
})(jQuery);

/*===================================
  Functions used for organization ):
  ===================================*/
//This changes the height of cards, since height % only works if parent height has height
//This sets the fixed height of the cards at the time the function is called
function changeCardGroupHeight() {
	var cardContainers = $(".text-card-group");
	cardContainers.css("height", "auto");
	var myHeight;
	for (var i = 0; i < cardContainers.length; i++) {
		myHeight = String($(cardContainers[i]).height());
		$(cardContainers[i]).css("height", myHeight);
	}
}

//This changes all buttons from being on one row to each button having its own row based on screen size
function setTabStyle() {if ($($(".tab")[0]).height() > 47 && $($(".tab")[0]).width() < MIN_TAB_WIDTH) {$($(".tab button")).css("width", "100%")} else {$($(".tab button")).css("width", "auto");}}
