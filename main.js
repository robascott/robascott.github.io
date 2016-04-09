$(function() {
    if (location.pathname !== "/") {
    	$('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    } else {
    	console.log('hey');
    	var home = document.getElementById("home-link");
    	home.className = 'nav-link active';
    }
});