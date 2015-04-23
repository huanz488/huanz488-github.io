console.log("hello world");

function Particle( x, y, radius ) {
	this.init( x, y, radius );
}

Particle.prototype = {

	init: function( x, y, radius ) {

		this.alive = true;

		this.radius = radius || 10;
		this.wander = 0.15;
		this.theta = random( TWO_PI );
		this.drag = 0.92;
		this.color = '#fff';

		this.x = x || 0.0;
		this.y = y || 0.0;

		this.vx = 0.0;
		this.vy = 0.0;
	},

	move: function() {

		this.x += this.vx;
		this.y += this.vy;

		this.vx *= this.drag;
		this.vy *= this.drag;

		this.theta += random( -0.5, 0.5 ) * this.wander;
		this.vx += sin( this.theta ) * 0.1;
		this.vy += cos( this.theta ) * 0.1;

		this.radius *= 0.96;
		this.alive = this.radius > 0.5;
	},

	draw: function( ctx ) {

		ctx.beginPath();
		ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

$('.menu1').mouseenter(function() {
document.getElementById("minuets").play(); 
});

$('.menu1').mouseleave(function() {
document.getElementById("minuets").pause(); 
});

$('.menu2').mouseenter(function() {
document.getElementById("apollo").play(); 
});

$('.menu2').mouseleave(function() {
document.getElementById("apollo").pause(); 
});

$('.menu3').mouseenter(function() {
document.getElementById("zaide").play(); 
});

$('.menu3').mouseleave(function() {
document.getElementById("zaide").pause(); 
});

$('.menu4').mouseenter(function() {
document.getElementById("arias").play(); 
});

$('.menu4').mouseleave(function() {
document.getElementById("arias").pause(); 
});

$('.menu6').mouseenter(function() {
document.getElementById("duets").play(); 
});

$('.menu6').mouseleave(function() {
document.getElementById("duets").pause(); 
});

$('.inner23').mouseenter(function() {
document.getElementById("piano1").play(); 
});

$('.inner23').mouseleave(function() {
document.getElementById("piano1").pause(); 
});

$('.inner35').mouseenter(function() {
document.getElementById("piano2").play(); 
});

$('.inner35').mouseleave(function() {
document.getElementById("piano2").pause(); 
});

$('.inner49').mouseenter(function() {
document.getElementById("piano3").play(); 
});

$('.inner49').mouseleave(function() {
document.getElementById("piano3").pause(); 
});

$('.inner11').mouseenter(function() {
document.getElementById("piano4").play(); 
});

$('.inner11').mouseleave(function() {
document.getElementById("piano4").pause(); 
});

$('.inner47').mouseenter(function() {
document.getElementById("piano5").play(); 
});

$('.inner47').mouseleave(function() {
document.getElementById("piano5").pause(); 
});

$('.inner45').mouseenter(function() {
document.getElementById("piano6").play(); 
});

$('.inner45').mouseleave(function() {
document.getElementById("piano6").pause(); 
});




$('.inner1apollo').mouseenter(function() {
document.getElementById("piano1").play(); 
});

$('.inner1apollo').mouseleave(function() {
document.getElementById("piano1").pause(); 
});

$('.inner31apollo2').mouseenter(function() {
document.getElementById("piano2").play(); 
});

$('.inner31apollo2').mouseleave(function() {
document.getElementById("piano2").pause(); 
});

$('.inner31apollo1').mouseenter(function() {
document.getElementById("piano3").play(); 
});

$('.inner31apollo1').mouseleave(function() {
document.getElementById("piano3").pause(); 
});

$('.inner39').mouseenter(function() {
document.getElementById("piano4").play(); 
});

$('.inner39').mouseleave(function() {
document.getElementById("piano4").pause(); 
});


$('.inner37apollo').mouseenter(function() {
document.getElementById("piano6").play(); 
});

$('.inner37apollo').mouseleave(function() {
document.getElementById("piano6").pause(); 
});



$('.inner1arias').mouseenter(function() {
document.getElementById("piano1").play(); 
});

$('.inner1arias').mouseleave(function() {
document.getElementById("piano1").pause(); 
});

$('.inner43arias').mouseenter(function() {
document.getElementById("piano2").play(); 
});

$('.inner43arias').mouseleave(function() {
document.getElementById("piano2").pause(); 
});

$('.inner23arias').mouseenter(function() {
document.getElementById("piano3").play(); 
});

$('.inner23arias').mouseleave(function() {
document.getElementById("piano3").pause(); 
});

$('.inner45arias').mouseenter(function() {
document.getElementById("piano4").play(); 
});

$('.inner45arias').mouseleave(function() {
document.getElementById("piano4").pause(); 
});



$('.inner1zaide').mouseenter(function() {
document.getElementById("piano1").play(); 
});

$('.inner1zaide').mouseleave(function() {
document.getElementById("piano1").pause(); 
});

$('.inner23zaide').mouseenter(function() {
document.getElementById("piano2").play(); 
});

$('.inner9').mouseleave(function() {
document.getElementById("piano2").pause(); 
});

$('.inner9').mouseenter(function() {
document.getElementById("piano3").play(); 
});

$('.inner9').mouseleave(function() {
document.getElementById("piano3").pause(); 
});

$('.inner11zaide').mouseenter(function() {
document.getElementById("piano4").play(); 
});

$('.inner11zaide').mouseleave(function() {
document.getElementById("piano4").pause(); 
});



$('.inner9duets').mouseenter(function() {
document.getElementById("piano1").play(); 
});

$('.inner9duets').mouseleave(function() {
document.getElementById("piano1").pause(); 
});

$('.inner49duets').mouseenter(function() {
document.getElementById("piano2").play(); 
});

$('.inner49duets').mouseleave(function() {
document.getElementById("piano2").pause(); 
});

$('.inner11duets').mouseenter(function() {
document.getElementById("piano3").play(); 
});

$('.inner11duets').mouseleave(function() {
document.getElementById("piano3").pause(); 
});

$('.inner45duets').mouseenter(function() {
document.getElementById("piano4").play(); 
});

$('.inner45duets').mouseleave(function() {
document.getElementById("piano4").pause(); 
});

$('.outerm').hover(function() {
    //on
   $(this).addClass('hide');
}, function() {
    // off
});

$('.outerm').hover(function() {
    //on
   $(this).addClass('hide');
}, function() {
    // off
});