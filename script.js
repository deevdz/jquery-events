$(document).ready(function() {
    
    $(".card-para").click(function() {
        $(".card-para").toggleClass("pink-bgrd");
    });

    $('p').click(function(){
        $(this).children('a').css("background-color","yellow");
    });
    
    $(".stream-nav").on("click", function() {
    // A selector to match all cards in all streams
    var allStreamsCardsSelector = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStreamCardsSelector = "." + this.id + "-card";

    // First remove the highlight from all of the cards
    $(allStreamsCardsSelector).removeClass("card-highlight");
    // Then apply the highlight to just this stream's cards
    $(thisStreamCardsSelector).addClass("card-highlight");
    });
	
	$("#first_button").click(function(){
        $("#first_para").slideToggle("slow"); 
    }); 
    
    $("#first_button").mouseenter(function(){
        $("#first_button").fadeTo("slow",0.5);
    });
    
    $("#first_button").mouseleave(function(){
        $("#first_button").fadeTo("slow",1);
    });
    

    //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").addClass( "highlight_text");
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });

    /*this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them*/

    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");

    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });
    
    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
});