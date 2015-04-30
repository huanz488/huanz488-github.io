var Path = {
    current : 0
};

var nextVals = [1];

$('.dot').addClass('hovered');
$(".dot[data-position|='1'").removeClass("hovered");
$('.dot').hover(function() {
   // mouse on
   var $dot = $(this);
   
   console.log($dot.data('position'));
   console.log(nextVals.indexOf($dot.data('position')));
   if ($dot.hasClass("hovered") == false) {
       if (nextVals.indexOf($dot.data('position')) > -1) {
           $dot.addClass('gone'); //if i hover over this thing, mark it gone
           
           $('.dot').addClass('hovered'); //disable everything!
           $dot.css({ 'background': 'transparent' });

           nextVals = $dot.data('next').split(","); //reenable only these dots
           
           for(var i=0; i<nextVals.length; i++) { 
               nextVals[i] = parseInt(nextVals[i]); 
               $(".dot[data-position|='"+ nextVals[i] +"'").removeClass("hovered");
               $('.dot.gone').addClass("hovered");//if already hovered, deactivate again
           }
           console.log(nextVals);
       }
       //check_path($dot);
      // alert($dot.data("position"));
   }
   
});

$('.redo')({".redo" : "",
".redo:hover" : ""})

$('.dot').addClass('hovered');
$(".dot[data-position|='13'").removeClass("hovered");

function check_path($dot) {
    var hovered_path = parseInt( $dot.data('position') ) + 1;
    $(".dot[data-position|='"+ hovered_path +"'").removeClass('hovered');
    //remove class hovered of the dot below this one. 
    
    var hovered_path = parseInt( $dot.data('position') ) + 5;
    $(".dot[data-position|='"+ hovered_path +"'").removeClass('hovered');
   /* 
    if (Path.current + 1 == hovered_path) {
        // they did the right thing
        Path.current += 1;
    } else {
        // they did the wrong thing
        $('.dot').removeClass('hovered');
        $('.dot').removeAttr('style');
        //alert('Start over!');
        Path.current = 0;
    }*/
}