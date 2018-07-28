/*===================================
  Global Variables
  ===================================*/
var minTabWidth = 0;

/*===================================
  Functions that need all DOM objects
  to load first
  ===================================*/
$(function() {
	//Someone plz help, the changeCardGroupHeight() only works on page refresh, when button is clicked, or when page size changes
	if(document.URL.indexOf("#")==-1) {
		// Set the URL to whatever it was plus "#".
		url = document.URL+"#";
		location = "#";
		//Reload the page
		location.reload(true);
	} else {
		history.pushState(null, null, document.location.href.match(/(^[^#]*)/)[0]);
	}
	//Load in the Navigation Bar
	$.ajax({url: "/hecrepedia/nav.html", type: "get", async: false, success: function(data) {
		$("#top-nav").append(data);
	}});
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
	var image, name, information;
	for (var i = 0; i < links.length; i++) {
		$.ajax({url: links[i], type: "get", async: false, success: function(data){
			name = $(data).find("#animal-name");
			information = data.slice(data.search("fillOutPage"), data.length);
			information = information.slice(information.search("\\(") + 1, information.search("\\)"));
			information = information.split("\n");
			image = information[2].slice(information[2].search('"') - 1, information[2].length - 1);
			console.log(image);
			console.log(name);
		}});
		//$(divName).append("");
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
	var $window = $(window);

	$window.resize(function resize(){
		if ($window.width() > 672) {$(".dropdown").removeClass("open");}
		setTabStyle();
		changeCardGroupHeight();
	}).trigger('resize');
})(jQuery);

/*===================================
  Functions used for organization ):
  ===================================*/
function changeCardGroupHeight() {
	var cardContainers = $(".text-card-group");
	cardContainers.css("height", "initial");
	var myHeight;
	for (var i = 0; i < cardContainers.length; i++) {
		myHeight = String($(cardContainers[i]).height());
		$(cardContainers[i]).css("height", myHeight);
	}
}

function setTabStyle() {
	if ($($(".tab")[0]).height() > 47 && $($(".tab")[0]).width() < minTabWidth) {$($(".tab button")).css("width", "100%")} else {$($(".tab button")).css("width", "auto"); minTabWidth = $($(".tab")[0]).width(); }
}
