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
  window.setInterval(drawState, 10);
	window.setInterval(updateState, 10);
  //alert("fuck");
  c.addEventListener("mousedown", mouseDown, false);
	c.addEventListener("mouseup", mouseUp, false);
  c.addEventListener("mousemove", mouseMove, false);
  c.addEventListener("mouseout", mouseOut, false);
}
