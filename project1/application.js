var test2imgs = ['1.jpg',
                 '1.jpg',
                 '2.jpg',
                 '3.jpg',
                 '4.jpg',
                 '5.jpg',
                 '6.jpg',
                 '8.jpg',
                 '9.jpg',
                 '10.jpg',
                 '11.jpg',
                 '21.jpg',
                 '22.jpg',
                 '23.jpg',
                 '24.jpg',
                 '25.jpg',
                 '26.jpg',
                 '27.jpg',
                 '28.jpg',
                 '29.jpg',
                 '32.jpg',
                 '33.jpg',
                 '34.jpg',
                 '35.jpg',
                ];

var test3imgs = ['36.jpg',
                 '12.jpg',
                 '39.jpg',
                 '36.jpg',
                 '14.jpg',
                 '16.jpg',
                 '36.jpg',
                 '17.jpg',
                 '18.jpg',
                 '38.jpg',
                 '20.jpg',
                 '30.jpg',
                 '37.jpg',
                 '38.jpg',
                 '39.jpg',
                 '40.jpg',
                 '41.jpg',
                 '42.jpg',
                ];


$('.test2').click(function() {
    var random = Math.ceil(Math.random() * test2imgs.length);
    
    $(".backgroundtest").css({ 'background-image': 'url("images/' + test2imgs[random] + '")' });
});


$('.test3').click(function() {
    var random = Math.ceil(Math.random() * test3imgs.length);
    $(".backgroundtest").css({ 'background-image': 'url("images/' + test3imgs[random] + '")' });
});


$('.test3').mouseup(function() {
document.getElementById("lecture-audio").play(); 
});

$('.test3').mouseleave(function() {
document.getElementById("lecture-audio").pause(); 
});