/*===================================
  Global Variables
  ===================================*/
var MIN_TAB_WIDTH = 340;

/*===================================
  Add the information
  ===================================*/
function fillOutPage(imgLink, breifDesc, pers, associations, birth, history, moreHis, present, powers, facts, appearances, trivia) {
	//Quick Facts img
	$("#quick-facts img")[0].src = imgLink;
	//Breif Description
	$($("#breif-description .text-card-text")[0]).append("<p>" + breifDesc + "</p>");
	//Personality
	$($("#personality .text-card-text")[0]).append("<p>" + pers + "</p>");
	//Associations
	$($("#associations .text-card-text")[0]).append("<p>" + associations + "</p>");
	//Birth
	$($("#birth .text-card-text")[0]).append("<p>" + birth + "</p>");
	//Historical Stuff
	$($("#historical-stuff .text-card-text")[0]).append("<p>" + history + "</p>");
	//More History
	$($("#more-history .text-card-text")[0]).append("<p>" + moreHis + "</p>");
	//Present Day
	$($("#present-day .text-card-text")[0]).append("<p>" + present + "</p>");
	//Powers
	$($("#powers .text-card-text")[0]).append("<p>" + powers + "</p>");
	//Fun Facts
	$($("#fun-facts .text-card-text")[0]).append("<p>" + facts + "</p>");
	//Special Appearances
	$($("#special-appearances .text-card-text")[0]).append("<p>" + appearances + "</p>");
	//Other Trivia
	$($("#other-trivia .text-card-text")[0]).append("<p>" + trivia + "</p>");
}

function addFactTable(...tableData) {
	if (tableData.length % 2 == 0) {
		$($("#quick-facts")[0]).append("<table></table");
		for (var i = 0; i < tableData.length/2; i++) {
			$($("#quick-facts table")[0]).append("<tr><td>" + tableData[i * 2] + "</td><td>" + tableData[i * 2 + 1] + "</td></tr>")
		}
	}
}

/*===================================
  Functions that need all DOM objects
  to load first
  ===================================*/
function waitForDOM() {
	//Load in the Navigation Bar
	$.ajax({url: "/hecrepedia/nav.html", type: "get", async: false, success: function(data) {
		$("#top-nav").append(data);
	}});
	//Set the style of the tab
	setTabStyle();
	//Open the designated tab
	document.getElementById("defaultOpen").click();
}
/*===================================
  Copied functions from first
  Hecrepedia, compressed a few of them
  ===================================*/
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
	cardContainers.css("height", "auto");
	var myHeight;
	for (var i = 0; i < cardContainers.length; i++) {
		myHeight = String($(cardContainers[i]).height());
		$(cardContainers[i]).css("height", myHeight);
	}
}

function setTabStyle() {
	if ($($(".tab")[0]).height() > 47 && $($(".tab")[0]).width() < MIN_TAB_WIDTH) {$($(".tab button")).css("width", "100%")} else {$($(".tab button")).css("width", "auto"); minTabWidth = $($(".tab")[0]).width(); }
}
