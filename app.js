window.nodeRequire = require;

var $ = global.jQuery = require('./jquery-2.1.4.min');

e = nodeRequire("electron");
fs = nodeRequire("fs");

let {PythonShell} = require('python-shell')

var dialogs = require('dialogs')()
dialogs.prompt("Please enter your Duolingo name","", function(name){
	//initiate duolingo download.

	var options = {
		  mode: 'text',
		  // pythonPath: 'path/to/python',
		  // pythonOptions: ['-u'], // get print results in real-time
		  // scriptPath: 'path/to/my/scripts',
		  args: [name]
		};

	PythonShell.run('api_connect.py', options, function (err,results) {
	  if (err) throw err;
	  
	  console.log(results)

	});
})

mpos = {x:0,y:0}
var ctx = {};
var clicked_lm = 0;

// var canvas = document.getElementById('canvas');
// if (canvas.getContext) 
// {
// 	ctx = canvas.getContext('2d');
// }


function main(){
	// document.body.addEventListener('mousedown', function(){
	// 	if (mpos.x<canvas.width && mpos.y<canvas.height && mpos.x>0 && mpos.y>0)
	// 	clicked_lm=1;
	// }, true); 

	// document.body.addEventListener('mouseup', function(){
	// 	clicked_lm=3;
	// }, true); 

	// $("canvas").mousemove(function(e) {
	// 	mpos.x = e.pageX - $('canvas').offset().left;
	// 	mpos.y = e.pageY - $('canvas').offset().top;
	// })

	// draw();
}

// function draw(){
// 	ctx.clearRect(0, 0, canvas.width, canvas.height)
// 	ctx.fillStyle="white"
// 	ctx.fillRect(0,0,canvas.width,canvas.height)

// 	requestAnimationFrame(draw);
// }

function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {

	vpw = $(window).width();
	vph = $(window).height();

	var m=detectmob()
}

$(document).ready(resizeDiv)
$(document).ready(main)