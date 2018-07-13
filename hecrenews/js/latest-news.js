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
		$($(divName + ".info")[i]).append("<p>" + newNewsInfo[category][i] + "</p>");
		$(divName + " .needLink")[i * 3].href = newsLinks[category][i];
		$(divName + " .needLink")[i * 3 + 1].href = newsLinks[category][i];
		$(divName + " .needLink")[i * 3 + 2].href = newsLinks[category][i];
	}
	
}

//FUNCTIONS THAT GET USED
$(function() {
	$("#navPlaceholder").load("/hecrenews/nav.html");
	for (var i = 0; i < $(".news-card").length; i++) {
		$(".news-card")[i].style.animationDelay = String((i + 1)/4) + "s";
	}
});

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

function openNav() {
    		var x = document.getElementById("nav");
    		if (x.className === "nav") {
        		x.className += " responsive";
    		} else {
        		x.className = "nav";
    		}
	}
