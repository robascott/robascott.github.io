$(function() {
	console.log('HEY');
    if ((location.pathname.split("/")[1]) !== ""){
            $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
        }
});