//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3, When button pressed
$("button").click(function(){
  //3.1, Show spoiler next to the button clicked
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});


$(document).ready(function(){
	$("#spoiler-01").before("<h2>Spoiler to Episode I</h2>");
	$("#spoiler-02").before("<h2>Spoiler to Episode II</h2>");
	$("#spoiler-03").before("<h2>Spoiler to Episode III</h2>");
	$("#spoiler-04").before("<h2>Spoiler to Episode IV</h2>");
	$("#spoiler-05").before("<h2>Spoiler to Episode V</h2>");
	$("#spoiler-06").before("<h2>Spoiler to Episode VI</h2>");
	$("#spoiler-07").before("<h2>Spoiler to Episode VII</h2>");
});
