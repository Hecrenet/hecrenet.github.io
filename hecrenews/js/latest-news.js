//This is the only thing you change, or you might break the Hecrenews (unless your Arjvik, but the code shouldn't need changing)
var newsLinks = [
	["/hecrenews/template.html", "/hecrenews/template.html", "/hecrenews/template.html", "/hecrenews/template.html", "/hecrenews/template.html"], //New News [0][x]
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

//FUNCTIONS THAT GET CALLED FROM HTML
function addCardNews(divName, link) {
	//Add the information
	$.get(link, function(data){
		var authorImg, pubDate, pubTime, authorBio, articleTitle, articlePreview;
		//Get the information from the author page (async false so no variable errors)
		var authorLink = $(data).find("#author-link")[0].innerHTML;
		$.ajax({url: authorLink, type: "get", async: false, success: function(data){
			authorImg = $(data).filter("img")[0].src;
			authorBio = $(data).filter(".news-author")[0];
		}});
		pubDate = $(data).find("#date")[0].innerHTML;
		pubTime = $(data).find("#time")[0].innerHTML;
		articleTitle = $(data).find("#title")[0].innerHTML;
		articlePreview = $(data).find("#preview")[0].innerHTML;
		//Create the card
		$(divName).append("<div class='news-card'><div class='news-card-info'><ul><li><img src=" + authorImg + "></li><li><p>" + pubDate + "</p></li><li><p>" + pubTime + "</p></li></ul>" + authorBio +"</div><a href=" + link + "><img src='/images/birds/legendary/hbird/hbird.jpg'></a><div class='news-card-flavor'><h2><a href=" + link + ">" + articleTitle + "</a></h2><a href='javascript: void(0)' onclick='showNewsInfo(this)'><h2>&#x2193</h2></a><div class='news-card-preview'><p>" + articlePreview + "</p></div></div></div>");
	});
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
	$($(".news-card-info li:first-child")[0]).hover(
		function() {
			var x = $(this).parentsUntil(".news-card");
			$(x[1]).children(".news-author").addClass("open");
		}, function() {
			var x = $(this).parentsUntil(".news-card");
			$(x[1]).children(".news-author").removeClass("open");
		}
	);
	//Keep author's bio showing when hovering on the bio
	$(".news-author").hover(
		function() {
			$(this).addClass("open");
		},
		function() {
			$(this).removeClass("open");
		}
	);
});
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
