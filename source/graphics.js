
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
    var xtileindex, ytileindex, xtilenum, ytilenum, xtilestart, ytilestart;
    xtileindex = Math.floor(me.x/100);
    ytileindex = Math.floor(me.y/100);
    xtilenum = Math.floor(c.width/100) + 2;
    ytilenum = Math.floor(c.height/100) + 1;
    xtilestart = 0 - (me.x % 100);
    ytilestart = 0 - (me.y % 100);
    //alert(xtilenum);
    //alert(ytilenum);
    
    for(var ix = 0;ix < xtilenum; ix++){
      for(var iy = 0;iy < ytilenum; iy++){
        if(map.width <= xtileindex + ix || map.height <= ytileindex + iy){
          continue;
        }
        //ctx.drawImage(placeholder_ui_image, 200, 200, 100, 100);
        //alert((map.tiledata[ytileindex + iy])[xtileindex + ix]);
        //alert(map.tileData[ytileindex + iy][xtileindex + ix]);
        ctx.drawImage(map.floor[map.tiledata[ytileindex + iy][xtileindex + ix]], xtilestart + (ix * 100), ytilestart + (iy * 100), 100, 100);
      }//map.floor[map.tiledata[ytileindex + iy][xtileindex + ix]]
    }
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