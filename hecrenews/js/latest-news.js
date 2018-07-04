//This is the only thing you change, or you might break the Hecrenews (unless your Arjvik, but the code shouldn't need changing)
var newsLinks = [
	["/hecrenews/template.html", "#", "#", "#", "#"], //New News [0][x]
	["#", "#", "#", "#", "#"], //Mundane [1][x]
	["#", "#", "#", "#", "#"], //Gossip [2][x]
	["#", "#", "#", "#", "#"], //Political [3][x]
	["#", "#", "#", "#", "#"], //Economics [4][x]
	["#", "#", "#", "#", "#"], //Technology [5][x]
	["#", "#", "#", "#", "#"], //Fashion [6][x]
	["#", "#", "#", "#", "#"], //Food [7][x]
	["#", "#", "#", "#", "#"] //Travel [8][x]
];
//UNDER HERE IS THE SHTUFF YOU DON'T TOUCH
addJQuery();

var newsTitles = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]];
var newNewsImages = ["", "", "", "", "", "", "", "", "",];


function addColNews(category, divName) {
	var anchor, node, element = $("#divName");
	for(var i = 0; i < element.length; i++) {
		//$($(element)[0]).append("<a href=" + newsLinks[category][i] + ">" + newsTitles[category][i] + "</a>");
		anchor = document.createElement("a");
		anchor.href = newsLinks[category][i];
		node = document.createTextNode(newsTitles[category][i]);
		anchor.appendChild(node);
		element[0].appendChild(anchor);
	}
}

function addCardNews(category) {
	var anchor, node, elements = document.getElementsByClassName(category + "-news");
	document.getElementById(category + "-latest").src = newNewsImages[category];
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

function addJQuery() {
	var script = document.createElement("script");
	script.src = "jquery.js";
	script.type = "text/javacsript";
	document.getElementsByTagName("head")[0].appendChild(script);
}
