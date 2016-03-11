$(function() {
    if (location.pathname !== "/") {
    	$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else {
    	var home = document.getElementById("home-link");
    	home.className = 'current';
    }
});