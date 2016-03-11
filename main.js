$(function() {
    if (location.pathname !== "/") {
    	$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else {
    	var home = document.getElementById("home").getElementsByTagName('a')[0];
    	home.className = 'current';
    }
});