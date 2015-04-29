var Path = {
    current : 0
};

$('.dot').addClass('hovered');
$(".dot[data-position|='1'").removeClass("hovered");
$('.dot').hover(function() {
   // mouse on
   var $dot = $(this);
   
   if (!$dot.hasClass('hovered')) {
       $dot.addClass('hovered');
       $dot.css({ 'background': 'transparent' });
       
       check_path($dot);
      // alert($dot.data("position"));
   }
   
}, function() {
   // mouse out 
});


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