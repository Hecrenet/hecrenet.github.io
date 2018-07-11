
//Add Tabs
function addTabs(...names) {
    for (var i = 0; i < names.length; i++) {
        $($(".tab")[0]).append("<button class='tablinks' onlick='openTab(event,\"" + names[i] + "\")'>" + names[i] + "</button>");
    }
    $(".tab .tablinks")[0].class += 'active';
    $(".tab .tablinks")[0].id = 'defaultOpen';
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
