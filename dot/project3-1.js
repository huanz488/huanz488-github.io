Game = {
    next_puzzle : 0
};

var puzzles = ['project3-2.html',
               'project3-2.html',
               'project3-2.html',
               'project3-2.html'
                ];


var nextVals = [1];
var pathStack = [];
$('.dot').addClass('hovered');
$(".dot[data-position|='1'").removeClass("hovered");
$('.dot').hover(function() {
   // mouse on
   console.log(pathStack);
   var $dot = $(this);
   
   console.log($dot.data('position'));
   console.log(nextVals.indexOf($dot.data('position')));
   if ($dot.hasClass("hovered") == false) {
       document.getElementById("1").play(); 
       if (nextVals.indexOf($dot.data('position')) > -1) {
           $dot.addClass('gone'); //if i hover over this thing, mark it gone
            pathStack.push($dot.data('position'));
           $('.dot').addClass('hovered'); //disable everything!
           $dot.css({ 'background': 'transparent' });

           nextVals = $dot.data('next').split(","); //reenable only these dots
           
           for(var i=0; i<nextVals.length; i++) { 
               nextVals[i] = parseInt(nextVals[i]); 
               $(".dot[data-position|='"+ nextVals[i] +"'").removeClass("hovered");
               $('.dot.gone').addClass("hovered");//if already hovered, deactivate again
           }
        
       }
       //check_path($dot);
      // alert($dot.data("position"));
   }
   
   if ( pathStack.length == 8 ) {
       if( pathStack[pathStack.length - 1] == 2){
           //  alert('you win!');
             //$('.ready').html("");
             $('.ready').css("background-image", "url(bottom/win.png)"); 
             document.getElementById("win").play(); 
             Game.next_puzzle += 1;
             window.location = puzzles[Game.next_puzzle];
       }
    else{
        //$('.ready').html("");
             $('.ready').css("background-image", "url(bottom/lose.png)"); 
             document.getElementById("lose").play(); 
             //alert('you lose!');
    }
    }
   
});

$('.ready').mouseenter(function() {
document.getElementById("ready").play(); 
});

$('.hellopage').mouseenter(function() {
document.getElementById("hellopage").play(); 
});

$('.redo').on("click", function() {
    location.reload();
});


$('.skeleton').hover(function() {
    window.location = 'project3-1.html';
}, function() {
    
});