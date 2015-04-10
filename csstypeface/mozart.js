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

$(".menu1").mouseenter(function() {
	$(".menu5").hide();
	console.log("enter");
});

$(".menu1").mouseleave(function() {
	$(".menu5").show();
	console.log("leave");
});

$(".menu2").mouseenter(function() {
	$(".menu5").hide();
	console.log("enter");
});

$(".menu2").mouseleave(function() {
	$(".menu5").show();
	console.log("leave");
});

$(".menu3").mouseenter(function() {
	$(".menu5").hide();
	console.log("enter");
});

$(".menu3").mouseleave(function() {
	$(".menu5").show();
	console.log("leave");
});

$(".menu4").mouseenter(function() {
	$(".menu5").hide();
	console.log("enter");
});

$(".menu4").mouseleave(function() {
	$(".menu5").show();
	console.log("leave");
});