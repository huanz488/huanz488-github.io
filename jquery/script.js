$(document).ready(function() {
	var clicked = false;

$("#pirate").remove();

$("body").addClass("grandient");

$("#toggle").click(function(){
	if (!clicked){
    	$("#status").css({"background-color" : "green"});
      $("#toggle").html("Stop");
      $("#toggle").html("GO");
      clicked = true;
  } 
  
  else {
  	  $("#status").html("Stop").css({"backgroung-color":"red"});
      $("#toggle").html("Start");
      clicked = false;
  }
$("#status").mouseenter(function() {
		if (clicked == true) {
			$("#cat").show();
			clicked = true;
		}
	});
$("#status").mouseleave(function() {
		if (clicked == true) {
			$("#cat").hide();
			clicked = true;
		}	
	
	});
	});

});