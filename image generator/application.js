var kumamouseimgs = [
                 '1.jpg',
                 '2.jpg',
                 '3.jpg',
                 '1.jpg',
                 '4.jpg',
                 '5.jpg',
                 
                ];

var quotes =
["Hi.",
"I am Rilakkuma.",
"I am hungry.",
"I want something to eat.",

];



var selectedquote = false;

$(".kumamouse").click(function() {
  
  var nextquote = quotes[Math.floor(Math.random()*quotes.length)];
  
  while (selectedquote == nextquote) {
    nextquote = quotes[Math.floor(Math.random()*quotes.length)];
  }
  
  selectedquote = nextquote;
  
  $(".quote-holder").html(nextquote);
  
$('.kumamouse').click(function() {
    var random = Math.ceil(Math.random() * kumamouseimgs.length);
    $(".backgroundtest").css({ 'background-image': 'url("images/' + kumamouseimgs[random] + '")' });
});


$('.kumamouse').mouseup(function() {
document.getElementById("kumamouse").play(); 
});

$('.kumamouse').mouseleave(function() {
document.getElementById("kumamouse").pause(); 
});
});
