$(window).load(function(){
   $('#loading-page').fadeOut(1000);
});

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('#btn-top').hide();

    var inview = new Waypoint.Inview({
	  	element: $('.footer')[0],
	  	entered: function() {
	    	$('#btn-top').fadeIn();
	  	},
	  	exited: function() {
	    	$('#btn-top').fadeOut();
		}
	})

    $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal-trigger').leanModal();
	});

});