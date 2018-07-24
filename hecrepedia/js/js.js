/*===================================
  Functions that need all DOM objects
  to load first
  ===================================*/
$(function() {
	//Load in the Navigation Bar
	$.ajax({url: "/hecrepedia/nav.html", type: "get", async: false, success: function(data) {
		$("#top-nav").append(data);
	}});
	//Open the designated tab
	//document.getElementById("defaultOpen").click();
	//Set the card group height
	changeCardContainerHeight();
});
/*===================================
  Copied functions from first
  Hecrepedia, compressed a few of them
  ===================================*/
//Add Card(s)
function addAnimalCards(divName, ...links) {
	var image, name, info;
	for (var i = 0; i < links.length; i++) {
		$.ajax({url: links[i], type: "get", async: false, success: function(data){
			image = $(data).find("#infoImg")[0].src;
			name = $(data).filter("#infoName")[0].textContent;
			info = $(data).find("#info")[0].textContent;
		}});
		$(divName).append("<div class='animal-card'><a href='" + links[i] + "'><img src='" + image + "'></a><div class='cardContainer'><p><b>" + name + "</b></p></div></div>");
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
