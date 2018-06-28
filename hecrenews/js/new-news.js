var newNewsLinks = ["/hecrenews/index.html", "/index.html"];
var newNewsTitles = ["Test", "2nd Anchor Test"];
var newNewsImage = "/images/birds/legendary/hbird/hbird.jpg";

//For every article
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

//For the Hecrenews home page
function addCardNewNews() {
	var anchor;
	var node;
	var elements = document.getElementsByClassName("new-news");
	//Add the image
	document.getElementById("new-news").src = newNewsImage;
	//Add the latest news
	anchor = document.createElement("a");
	anchor.href=newNewsLinks[0];
	node = document.createTextNode(newNewsTitles[0]);
	anchor.appendChild(node);
	document.getElementById("latest-news").appendChild(anchor);
	//Add the rest
	for(var i = 1; i < newNewsLinks.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newNewsLinks[i];
		node = document.createTextNode(newNewsTitles[i]);
		anchor.appendChild(node);
		element[i].appendChild(anchor);
	}
}
