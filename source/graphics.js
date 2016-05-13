function drawState()[
  drawBackground();
  drawUnits();
  drawUI(); 
  drawMiniMap();
  drawBox();
}

function drawBackgroud(){
  
}

function drawUnits(){
  
}

function drawUI(){
  ctx.drawimage(placeholder_ui_image,0,0,c.width,c.height);
}

function drawMiniMap(){
  
}

function drawBox(){
  var x,y,width,height;

  if(me.isDragging){
    if(me.dragStartX < me.dragNowX){
      x = me.dragStartX;
      width = me.dragNowX - me.dragStartX;
    }
    else{
      x = me.dragNowX;
      width = me.dragStartX - me.dragNowX;
    }
    if(me.dragStartY < me.dragNowY){
      y = me.dragStartY;
      height = me.dragNowY - me.dragStartY;
    }
    else{
      y = me.dragNowY;
      height = me.dragStartY - me.dragNowY;
    }
    ctx.strokeRect(x, y, width, height);
    
  }
}