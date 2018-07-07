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
addJQuery();

var newsTitles = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
var newNewsImages = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];

addTitlesAndImages();

//FUNCTIONS THAT GET CALLED FROM HTML
function addColNews(category, divName) {
	for(var i = 0; i < element.length; i++) {
		$($("#" + "divName")[0]).append("<a href=" + newsLinks[category][i] + ">" + newsTitles[category][i] + "</a>");
	}
}

function addCardNews(category) {
	var anchor, node, elements = document.getElementsByClassName(category + "-news");
	document.getElementById(category + "-latest").src = newNewsImages[category][0];
	for(var i = 0; i < elements.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newsLinks[category][i];
		node = document.createTextNode(newsTitles[category][i]);
		anchor.appendChild(node);
		if (i > 0) {
			elements[i].appendChild(anchor);
		} else {
			document.getElementById(category + "-news").appendChild(anchor);
		}
	}
}

function addCardNewsTwo(category, title) {
	$("#newNewsDiv").append("<h1>" + title + "</h1>");
	for (var i = 0; i < newsLinks[0].length; i++) {
		$("#newNewsDiv").append("<div class='news-card'><div class='newsImg'><img></div><div class='newsTxt'><p></p></div></div>");
	}
	var newsImg = $(".newsImg");
	var newsTxt = $(".newsTxt");
	for (var i = 0; i < newsLinks[0].length; i++) {
		$(".newsImg")[i] $("img").src = newNewsImages[category][i];
		$(".newsTxt")[i] $("p").text(newsTitles[category][i]);
	}
	
}

//FUNCTIONS THAT GET USED
function addJQuery() {
	var script = document.createElement("script");
	script.src = "jquery.js";
	script.type = "text/javacsript";
	document.getElementsByTagName("head")[0].appendChild(script);
}

function addTitlesAndImages() {
	for (var row = 0; row < newsLinks.length; row++) {
		for (var column = 0; column < newsLinks[row].length; column++) {
			$.ajax({url: newsLinks[row][column], type: "get", async: false, success: function(data){
				newsTitles[row][column] = $(data).filter("#title")[0].textContent;
				newNewsImages[row][column] = $(data).filter("#thumbnail")[0].src;
			}});
		}
	}
}
