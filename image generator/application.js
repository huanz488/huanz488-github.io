var kumamouseimgs = [
                 '1.jpg',
                 '2.jpg',
                 '3.jpg',
                 '1.jpg',
                 '4.jpg',
                 '5.jpg',
                 
                ];





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