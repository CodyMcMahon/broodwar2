var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
window.onload(){
  c.width = document.body.clientWidth;
  c.height = document.body.clientHeight;
  window.setInterval(drawState, 20);
	window.setInterval(updateState, 20);
  c.addEventListener("mousedown", mouseDown, false);
	c.addEventListener("mouseup", mouseUp, false);
}
