$(window).load(function(){
   	$('#loading-page').fadeOut(1000 ,function(){
		$('#profile').fadeIn(3000);
		$('.name-website').fadeIn(3000);
		$('.describe').fadeIn(3000);
		$('.hashtag').fadeIn(3000);
   	});
});

$(document).ready(function(){

    $('.scrollspy').scrollSpy();
    $('#btn-top').hide();
    $('.modal-trigger').leanModal();

    var inview = new Waypoint.Inview({
	  	element: $('.footer')[0],
	  	entered: function() {
	    	$('#btn-top').fadeIn();
	  	},
	  	exited: function() {
	    	$('#btn-top').fadeOut();
		}
	})

	if(jQuery.browser.mobile){
		$('.alert').text("//Ahhh! Online on mobile? This section is not compatible with mobile.");
		console.log('You are using a mobile device!');
	}
	else{
	   console.log('You are using a PC!');
	}

});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-31207546-2', 'auto');
ga('send', 'pageview');