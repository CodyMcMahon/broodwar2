
function drawState(){
  drawBackground();
  drawUnits();
  drawUI(); 
  drawMiniMap();
  drawBox();
  //return;
}

function drawBackground(){
    ctx.clearRect(0,0,c.width,c.height);
}

function drawUnits(){
  
}

function drawUI(){
  ctx.drawImage(placeholder_ui_image,0,0,c.width,c.height);
}

function drawMiniMap(){
  
}

function drawBox(){
  var x,y,width,height;
  if(me.isDragging){
    
//ctx.strokeText(me.dragStartX,110,100);
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
    
    ctx.strokeStyle="#FF00F0";
    ctx.strokeRect(x, y, width, height);
  }
  
}