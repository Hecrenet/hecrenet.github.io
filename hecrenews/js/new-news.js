var newNewsLinks = ["/hecrenews/index.html", "/index.html"];
var newNewsTitles = ["Test", "2nd Anchor Test"];
var newNewsImages= ["", ""];
addNewNews();

function addNewNews() {
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
