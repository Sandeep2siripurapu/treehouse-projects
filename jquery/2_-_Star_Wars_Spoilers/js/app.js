//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//3. When button pressed
$("button").click(function(){
  //3.1. Show spoiler next to the button clicked
  $(this).prev().show();
  //3.2. Get rid of button
  $(this).remove();
});

// Show default spoiler
$(document).ready(function(){
	$('#spoiler-01').show().before('<h2>Spoiler to Episode I</h2>');
});

var $select = $('#spoilers');

//Bind change listener to the select
$select.change(function(){
  //Change span text from selected option
  var $selected = $('#spoilers option:selected');

  $('.form-element span').text($selected.text());

  // Show selected spoiler and hide other spoilers
  var element = '#' + $('#spoilers').val();

  $('section h2').remove();
  $('.spoiler').hide();
  $(element).before('<h2>'+$selected.text()+'</h2>').show();
});