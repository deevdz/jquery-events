$(document).ready(function() {
	
	$("#select-link").on("click", function() {
		var allCards = $(".card:not(.highlight_stream)");
		for (var i = 0; i < allCards.length; i++) {
		allCards.css("display", "none");
		}		
	});	
	$("#all-link").on("click", function() {
		if ($(".card").css("display", "none")) {
			$(".card").css("display", "");
		} 
	});	
 
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
