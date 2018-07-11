//Add Card(s)
function addCards(divName, ...links) {
	var image, name, info;
	for (var i = 0; i < links.length; i++) {
		$.ajax({url: links[i], type: "get", async: false, success: function(data){
			image = $(data).find("#infoImg")[0].src;
			name = $(data).filter("#infoName")[0].textContent;
			info = $(data).find("#info")[0].textContent;
		}});
		$(divName).append("<a href='" + links[i] + "'><img src='" + image + "'></a><div class='cardContainer'><p>" + name + "</p></div>");
	}
}

//Add Tabs
function addTabs(...names) {
	for (var i = 0; i < names.length; i++) {
		$($(".tab")[0]).append("<button class=\"tablinks\" onclick=\"openTab(event,'" + names[i] + "')\">" + names[i] + "</button>");
	}
	$($(".tab .tablinks")[0]).addClass("active");
	$(".tab .tablinks")[0].id = "defaultOpen";
}

//Switch the content tabs
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
