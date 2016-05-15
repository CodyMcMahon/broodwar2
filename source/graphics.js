
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
                        u.x-me.x - u.imgsize / 2, u.y-me.y - u.imgsize / 2, u.imgsize, u.imgsize);
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
  var i=0;
  ctx.drawImage(placeholder_ui_image,0,0,c.width,c.height);
  if(me.selection.length){
    t = me.selection[0];
      ctx.drawImage(t.portrait,Math.floor(t.portraitn) * t.portraitpixels,0,t.portraitpixels,t.portraitpixels,c.clientWidth*.62,c.clientHeight*.8,c.clientWidth*.1,c.clientHeight*.2);
      t.portraitn = (t.portraitn + t.portraitrate) % t.portraitnum;
    if(me.selection.length > 1){
      for(iy = 0;iy < 2;iy++){
        for(ix = 0;ix < 6;ix++){
          if(me.selection.length > i){
            ctx.drawImage(t.img,0,0,t.imgpixels,t.imgpixels,
                          (c.clientWidth*.20)  + ix * (c.clientWidth *.06),
                          (c.clientHeight*.8) + iy * (c.clientHeight*.1),
                          c.clientWidth*.06,
                          c.clientHeight*.1);
          }
          i++;
        }
        
      }
      
      
    }
    else{
      
    }
  }
  //alert(mm);
}

function drawMiniMap(){
  
  var u;
  var size = 2;
  ctx.drawImage(mm, 0,c.clientHeight*.76,c.clientWidth*.125,c.clientHeight*.24);
  ctx.strokeRect(0 + c.clientWidth*.125 * (me.x / (map.width *map.tilesize)),
                 c.clientHeight*.76 + c.clientHeight*.24 * me.y / (map.height * map.tilesize),
                 c.clientWidth*.125 * c.clientWidth / (map.width *map.tilesize),
                 c.clientHeight*.24 * c.clientHeight / (map.height *map.tilesize));
                 //alert("test");
  if(map.units.length){
    ctx.save();
    for(var i = 0;i < map.units.length;i++){
      u = map.units[i];
      if(u.isBuilding){
        size = 6;
      }
        
          ctx.fillRect((0) + (u.x / (map.width * map.tilesize)) * (c.clientWidth * .125) - size/2,
                         (c.clientHeight * .76) + (u.y / (map.height * map.tilesize)) * (c.clientHeight * .24) - size / 2,
                         size,
                         size);
          //u.imgn = (u.imgn + u.imgrate) % u.imgnum;
        
         
        
      
    }
    ctx.restore();
  }
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
    
    //ctx.strokeStyle="#FF0F50";
    ctx.strokeRect(x, y, width, height);
  }
  
}