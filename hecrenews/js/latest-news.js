//This is the only thing you change, or you might break the Hecrenews (unless your Arjvik, but the code shouldn't need changing)
var newsLinks = [
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //New News [0][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Mundane [1][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Gossip [2][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Political [3][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Economics [4][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Technology [5][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Fashion [6][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"], //Food [7][x]
	["/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html", "/hecrenews/nothing.html"] //Travel [8][x]
];
//UNDER HERE IS THE SHTUFF YOU DON'T TOUCH
var newsTitles = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
var newNewsImages = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
var newNewsInfo = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];

addTitlesAndImagesAndInfo();

//FUNCTIONS THAT GET CALLED FROM HTML
function addCardNews(category, title, divName,) {
	if (title != "") {
		$(divName).append("<h1>" + title + "</h1>");
	}
	for (var i = 0; i < newsLinks[0].length; i++) {
		$(divName).append("<div class='news-card'><div class='newsImg'><div class='info'><a class='needLink'>Go to article</a></div><a class='needLink'><img class='needImage'></a></div><div class='newsTxt'><a class='needTxt needLink'></p></div></div>");
	}
	for (var i = 0; i < newsLinks[0].length; i++) {
		$(divName + " .needImage")[i].src = newNewsImages[category][i];
		$($(divName + " .needTxt")[i]).text(newsTitles[category][i]);
		$($(divName + " .info")[i]).append("<p>" + newNewsInfo[category][i] + "</p>");
		$(divName + " .needLink")[i * 3].href = newsLinks[category][i];
		$(divName + " .needLink")[i * 3 + 1].href = newsLinks[category][i];
		$(divName + " .needLink")[i * 3 + 2].href = newsLinks[category][i];
	}
	
}

//FUNCTIONS THAT GET USED
//Functions that need to wait for DOM elements to load
$(function() {
	//Load in the Navigation Bar
	$("#navPlaceholder").load("/hecrenews/nav.html");
	for (var i = 0; i < $(".news-card").length; i++) {
		$(".news-card")[i].style.animationDelay = String((i + 1)/4) + "s";
	}
	//Show the author's bio on hover
	$(".news-card-info li:first-child")[0].hover(
	function() {
		var x = $(this).parentsUntil(".news-card-info");
		console.log(x);
	}, function() {
	}
);
});
//Fill in the arrays
function addTitlesAndImagesAndInfo() {
	for (var row = 0; row < newsLinks.length; row++) {
		for (var column = 0; column < newsLinks[row].length; column++) {
			$.ajax({url: newsLinks[row][column], type: "get", async: false, success: function(data){
				newsTitles[row][column] = $(data).filter("#title")[0].textContent;
				newNewsImages[row][column] = $(data).filter("#thumbnail")[0].src;
				newNewsInfo[row][column] = $(data).filter("#info")[0].textContent;
			}});
		}
	}
}
//Add the open class to an element
function openId(...idName) {
	var x;
	for (var i = 0; i < idName.length; i++) {
		x = $(idName[i])[0];
		if (x.className == "") {x.className = "open";} else {x.className = "";}
	}
}
//Show the news 'info' (more like preview) of the News Card that called this function
function showNewsInfo(object) {
	var x = object.parentElement.children;
	if (x[2].className == "news-card-preview") {x[2].className += " open"; object.innerHTML = "<h2>&#x2191</h2>";} else {x[2].className = "news-card-preview"; object.innerHTML = "<h2>&#x2193</h2>"};
	
}
