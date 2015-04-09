window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
      function( callback ){
          window.setTimeout(callback, 1000 / 60);
   };
})();
var FPS = 25;							
var w = window.innerWidth;	
var h= window.innerHeight;
var grav = 0.01;						

var $;				
var arr = [];	
var msX = null;		
var msY = null;		

window.onload = function () {
	bubbly();
};

var bubbly = function () {
	var c = document.getElementById("canv");

	c.width = w;
	c.height = h;
	$ = c.getContext("2d");

    c.addEventListener("mousemove", msmv, false);	
    c.addEventListener("mouseout", msout, false);		
	  window.requestAnimFrame(run);
};

var msmv = function (e) {
	var rect = e.target.getBoundingClientRect();
	msX = e.clientX - rect.left;
	msY = e.clientY - rect.top;
};

var msout = function (e) {
	msX = null;
	msY = null;
};

var run = function () {
	more();
	upd();
	draw();
	setTimeout(run, 1000 / FPS);
};

var more = function () {
	if (msX !== null && msY !== null) {
		var p = new Part(msX, msY);
		p.create();
		arr.push(p);
	}
};

var upd = function () {
	var arr2 = [];
	for (var i = 0; i < arr.length; i++) {
		arr[i].upd();

		if (!arr[i].remove) {
			arr2.push(arr[i]);
		}
	}
	arr = arr2;
};

var draw = function () {
	$.fillStyle = "hsla(0,5%,5%,1)";
	$.fillRect(0, 0, w, h);

	$.save();
	$.globalCompositeOperation = "lighter";
	for (var i = 0; i < arr.length; i++) {
		arr[i].draw();
	}
	$.restore();
};


var Part= function (x, y) {
	this.x = x;
	this.y = y;
};


Part.prototype = {
	x: null,		
	y: null,	
	vx: 0,			
	vy: 0,			
	rad: 0,		
	color: null,	
	remove: false,

	create: function () {
		this.vx = Math.random() * 4 - 3;
		this.vy = Math.random() * (-6) - 2;
		this.rad = Math.random() * 1 + 8;
		var r = 190;
		var g = Math.floor(Math.random() * 50 + 5);
		var b = Math.floor(Math.random() * 200 + 50);
		this.color = "rgb(" + r + "," +g + ", " + b + ")";
	},

	upd: function () {
		this.vy += grav;
		this.x += this.vx;
		this.y += this.vy;
		this.rad *= .98;

		if (this.x < 0 || this.x > w || this.y > h) {
			this.remove = true;
		}
	},

	draw: function () {
		$.fillStyle = this.color;
		$.beginPath();
		$.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
		$.fill();
	}
};