window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

var c,ctx;
function startup(){
  c = document.getElementById("mat");
  ctx = c.getContext("2d");
  c.width = document.body.clientWidth;
  c.height = 800;//document.body.clientHeight;
  ldassets();
  mapinit();
  //alert("fuck");
  //alert(ctx);
  ctx.drawImage(placeholder_ui_image,0,0,c.width,c.height);
  //alert("fuck2");
  
	window.setInterval(updateState, 5);
  //requestAnimFrame(drawState, that.ctx.canvas);
  //window.setInterval(drawState, 16);
  //alert("fuck");
  c.addEventListener("mousedown", mouseDown, false);
	c.addEventListener("mouseup", mouseUp, false);
  c.addEventListener("mousemove", mouseMove, false);
  c.addEventListener("mouseout", mouseOut, false);
  (function animationLOOP() {
        drawState();
        requestAnimFrame(animationLOOP, c);
  })();
}
