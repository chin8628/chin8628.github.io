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

});