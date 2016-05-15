
function drawState(){
  ctx.clearRect(0,0,c.width,c.height);
  //ctx.save();
  drawBackground();
  //*
  drawUnits();
  drawUI(); 
  drawMiniMap();
  drawBox();
  /* */
  //ctx.restore();
  //return;
}

function drawBackground(){
    var xtileindex, ytileindex, xtilenum, ytilenum, xtilestart, ytilestart, temp;
    xtileindex = Math.floor(me.x/map.tilesize);
    ytileindex = Math.floor(me.y/map.tilesize);
    xtilenum = Math.floor(c.width/map.tilesize) + 2;
    ytilenum = Math.floor(c.height/map.tilesize) + 1;
    xtilestart = 0 - (me.x % map.tilesize);
    ytilestart = 0 - (me.y % map.tilesize);
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
        temp = map.tiledata[ytileindex + iy][xtileindex + ix];
        //if(temp)
          ctx.drawImage(map.floor[temp], xtilestart + (ix * map.tilesize), ytilestart + (iy * map.tilesize));//, map.tilesize, map.tilesize);
      }//map.floor[map.tiledata[ytileindex + iy][xtileindex + ix]]
    }
}

function drawUnits(){
  var u;
  if(map.units.length){
    for(var i = 0;i < map.units.length;i++){
      u = map.units[i];
      if (((u.x > me.x - (map.tilesize*2)) || (u.x < me.x + c.width + (map.tilesize*2))) && ((u.y > me.y - (map.tilesize*2)) || (u.y < me.y + c.height + (map.tilesize*2)))){
        if(u.isBuilding){
          ctx.drawImage(u.img,
                        Math.floor(u.imgn) * u.imgpixels,0,u.imgpixels,u.imgpixels,
                        u.x-me.x, u.y-me.y, u.imgsize, u.imgsize);
          u.imgn = (u.imgn + u.imgrate) % u.imgnum;
        }
        else{
          
        }
      }
    }
  }
}

function drawUI(){
  var t;
  ctx.drawImage(placeholder_ui_image,0,0,c.width,c.height);
  if(me.selection.length){
    t = me.selection[0];
    ctx.drawImage(t.portrait,Math.floor(t.portraitn) * portraitpixels,0,portraitpixels,portraitpixels,c.clientWidth*.6,c.clientHeight*.8,c.clientWidth*.1,c.clientHeight*.2);
    t.portraitn += t.portraitrate % t.portraitnum;
  }
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