
function mouseDown(e){
  if(e.button === 0){
    //minimap
    if(e.clientX < c.clientWidth*.125 && e.clientY > c.clientHeight*.76){
      me.isClickedDown = 1;
      me.isOnMiniMap = 0;
      //num of pixels on mm / pixel clicked on * total pixels in map
      me.x = (c.clientWidth*.125 * c.clientWidth / (map.width *map.tilesize) / e.clientX) *map.width * map.tilesize;
      me.y = (c.clientHeight*.24 * c.clientHeight / e.clientY - c.clientHeight*.76) *map.width * map.tilesize; 
    
    }
    else{
      me.isOnGameScreen = 1;
      me.isClickedDown = 1;
      me.dragStartX = e.clientX;
      me.dragStartY = e.clientY;
    }
	}else if(e.button == 2){
		//ctx.strokeText(" right click ",110,100);
	}
	//ctx.strokeText("at X: "+e.clientX+" \nY: "+e.clientY,110,200);
}

function mouseUp(e){
  var u = [];
  var t;
  var x,y,width,height;
  
  if(e.button === 0){
    if(me.isClickedDown){
      if(me.isDragging){//comment here
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
    
        for(var i = 0;i < map.units.length;i++){
          t = map.units[i];
          if(t.isBuilding){
            if((y < t.y - me.y + t.size/2    
            &&  y + height > t.y - me.y - t.size/2) 
            && (x < t.x - me.x + t.size / 2 
            &&  x + width > t.x - me.x - t.size / 2)){
              u[u.length] = t;
            }
          }
          else{
            //units here
            
          }
        }//comment here
      }
      else{
        for(var i = 0;i < map.units.length;i++){
          t = map.units[i];
          if(t.isBuilding){
            if((e.clientX >= t.x - me.x - t.size/2 && e.clientX <= t.x - me.x + t.size/2) &&
              (e.clientY >= t.y - me.y - t.size/2 && e.clientY <= t.y - me.y + t.size/2)){
              u[u.length] = t;
            }
          }
          else{
            //units here
          }
        }
      }
      //alert(u.length);
      me.selection = u;
    }
    me.isOnGameScreen = 0;
    me.isClickedDown = 0;
    me.isDragging = 0;
    //me.dragStartX = e.clientX;
    //me.dragStartY = e.clientY;
	}
  else if(e.button == 2){
    
	}
}

function mouseOut(e){
  me.isOnGameScreen = 0;
  me.isClickedDown = 0;
  me.isDragging = 0;
  if(e.clientY < settings.scrollborder){
    me.cameraMoveY = "north";
  }
  else if(e.clientY > c.height - settings.scrollborder){
    me.cameraMoveY = "south";
  }
  else{
    me.cameraMoveY = "";
  }
  if(e.clientX < settings.scrollborder){
    me.cameraMoveX = "west";
  }
  else if(e.clientX > c.width - settings.scrollborder){
    me.cameraMoveX = "east";
  }
  else{
    me.cameraMoveX = "";
  }
}

function mouseMove(e){
  
		//ctx.strokeText(me.dragNowX,110,100);
  if(me.isClickedDown && me.isOnGameScreen){
    me.dragNowX = e.clientX;
    me.dragNowY = e.clientY;
    
    //ctx.strokeText(me.dragStartX,310,100);
    //ctx.strokeText(me.dragNowX,510,100);
    if(((me.dragNowX - me.dragStartX > 3) 
    ||  (me.dragNowX - me.dragStartX < 3)) 
    || ((me.dragNowY - me.dragStartY > 3) 
    ||  (me.dragNowY - me.dragStartY > 3))){
    
      me.isDragging = 1;
    }
  }
  if(e.clientY < settings.scrollborder){
    me.cameraMoveY = "north";
  }
  else if(e.clientY > c.height - settings.scrollborder){
    me.cameraMoveY = "south";
  }
  else{
    me.cameraMoveY = "";
  }
  if(e.clientX < settings.scrollborder){
    me.cameraMoveX = "west";
  }
  else if(e.clientX > c.width - settings.scrollborder){
    me.cameraMoveX = "east";
  }
  else{
    me.cameraMoveX = "";
  }
}
