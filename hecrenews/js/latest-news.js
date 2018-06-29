//Init Arrays
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
var newsTitles = [
	["Template", "No News :(", "No News :(", "No News :(", "No News :("], //New News [0][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Mundane [1][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Gossip [2][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Political [3][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Economics [4][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Technology [5][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Fashion [6][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("], //Food [7][x]
	["No News :(", "No News :(", "No News :(", "No News :(", "No News :("] //Travel [8][x]
];
var newNewsImages = [
	"/images/birds/legendary/hbird/hbird.jpg", //New News
	"#", //Mundande
	"#", //Gossip
	"#", //Political
	"#", //Economics
	"#", //Technology
	"#", //Fashion
	"#", //Food
	"#" //Travel
];


//DON'T CHANGE BOTTOM CODE
function addColNews(category, divName) {
	var anchor, node, element = document.getElementById(divName);
	for(var i = 0; i < newsLinks.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newsLinks[category][i];
		node = document.createTextNode(newsTitles[category][i]);
		anchor.appendChild(node);
		element.appendChild(anchor);
	}
}
function addCardNews(category) {
	var anchor, node, elements = document.getElementsByClassName(category + "-news");
	document.getElementById(category + "-news").src = newNewsImages[category];
	for(var i = 0; i < newsLinks.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newsLinks[category][i];
		node = document.createTextNode(newsTitles[category][i]);
		anchor.appendChild(node);
		if (i > 0) {
			console.log(elements[i]);
			elements[i].appendChild(anchor);
		} else {
			document.getElementById("latest-news").appendChild(anchor);
		}
	}
}
