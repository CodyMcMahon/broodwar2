var c,ctx,vc,swapc;
function startup(){
  vc = document.getElementById("mat2");
  c = document.getElementById("mat");
  c.style.visibility = "hidden";
  ctx = c.getContext("2d");
  c.width = document.body.clientWidth;
  c.height = 800;//document.body.clientHeight;
  vc.width = document.body.clientWidth;
  vc.height = 800;//document.body.clientHeight;
  ldassets();
  mapinit();
  //alert("fuck");
  //alert(ctx);
  ctx.drawImage(placeholder_ui_image,0,0,c.width,c.height);
  //alert("fuck2");
  window.setInterval(drawState, 16);
	window.setInterval(updateState, 5);
  //alert("fuck");
  c.addEventListener("mousedown", mouseDown, false);
	c.addEventListener("mouseup", mouseUp, false);
  c.addEventListener("mousemove", mouseMove, false);
  c.addEventListener("mouseout", mouseOut, false);
}
