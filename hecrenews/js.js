var newNewsLinks = ["/hecrenews/index.html", "/index.html"];
var newNewsTitles = ["Test", "2nd Anchor Test"];
addNewNews();

function addNewNews() {
	var anchor;
	var node;
	var element = document.getElementById("colOne");
	for(var i = 0; i < newNewsLinks.length; i++) {
		anchor = document.createElement("a");
		anchor.href = newNewsLinks[i];
		node = newNewsTitles[i];
		element.appendChlid(anchor);
	}
}

//Responsive Navigation
function openNav() {
    	var x = document.getElementById("nav");
    	if (x.className === "nav") {
        	x.className += " responsive";
    	} else {
        	x.className = "nav";
    	}
}
