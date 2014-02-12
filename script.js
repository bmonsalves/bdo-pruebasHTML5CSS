$(document).on("ready",configurarApp);

function configurarApp(){
	var canvas = document.getElementById("micanvas");
	var ctx = canvas.getContext('2d');
	canvas.width = screen.availWidth;
	dibujaFooter(canvas,ctx);
}

function dibujaFooter(canvas,ctx){
	ctx.moveTo(0,0);
	ctx.quadraticCurveTo(0,0,canvas.width-100,canvas.height-50);
	ctx.fill();
}