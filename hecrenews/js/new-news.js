var newNewsLinks = ["/hecrenews/index.html", "/index.html"];
var newNewsTitles = ["Test", "2nd Anchor Test"];
var newNewsImage = "/images/birds/legendary/hbird/hbird.jpg";

function addColNewNews() {
	var anchor;
	var node;
	var element = document.getElementById("colOne");
	for(var i = 0; i < newNewsLinks.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newNewsLinks[i];
		node = document.createTextNode(newNewsTitles[i]);
		anchor.appendChild(node);
		
		element.appendChild(anchor);
	}
}

function addCardNewNews() {
	var anchor;
	var node;
	//Add the image
	document.getElementById("new-news").src = newNewsImage;
	//Add the latest news!
	var elements = document.getElementsByClassName("new-news");
	for(var i = 0; i < elements.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newNewsLinks[i];
	}
}
