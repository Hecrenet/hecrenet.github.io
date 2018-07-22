/*===================================
  Functions that need DOM to load first
  ===================================*/
$(function() {
	//Load in the Navigation Bar
	$.ajax({url: "/hecrepedia2/nav.html", type: "get", async: false, success: function(data) {
		$("#top-nav").append(data);
	}});
});
