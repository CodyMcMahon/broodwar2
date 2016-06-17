
function mouseDown(e){
  var x,y;
  if(e.button === 0){
    //minimap
    if(e.clientX < c.clientWidth*.125 && e.clientY > c.clientHeight*.76){
      me.isClickedDown = 1;
      me.isOnMiniMap = 1;
      //pixel clicked on / num of pixels on mm  * total pixels in map
      //me.x = ((e.clientX- (c.clientWidth*.125 * c.clientWidth / (map.width *map.tilesize)) / (c.clientWidth*.125)  /2))*map.width * map.tilesize;
      x = e.clientX / (c.clientWidth*.125)*map.width * map.tilesize - c.width / 2;
      if(x<0){
        me.x = 0;
      } 
      else if(x+c.width>map.width * map.tilesize){
        me.x = map.width * map.tilesize - c.width;
      }
      else{
        me.x = x;
      }
      //alert( c.width / (map.height * map.tilesize) / 2 );
      y = (e.clientY - c.clientHeight*.76) / (c.clientHeight*.24 ) *map.height * map.tilesize -  c.height / 2; 
      if(y<0){
        me.y = 0;
      } 
      else if(y+c.height*(4/5)>map.height * map.tilesize){
        me.y = (map.height*map.tilesize) - c.height*(4/5);
      }
      else{
        me.y = y;
      }
       //alert();
    
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
    if(me.isClickedDown && me.isOnGameScreen){
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
      me.selection||me.selection[0].portraitn = 0;
      me.selection = u;
    }
    me.isOnGameScreen = 0;
    me.isClickedDown = 0;
    me.isDragging = 0;
    me.isOnMiniMap = 0;
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
  me.isOnMiniMap = 0;
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
  var x,y;
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
  if(me.isClickedDown && me.isOnMiniMap){
    x = e.clientX / (c.clientWidth*.125)*map.width * map.tilesize - c.width / 2;
      if(x<0){
        me.x = 0;
      } 
      else if(x+c.width>map.width * map.tilesize){
        me.x = map.width * map.tilesize - c.width;
      }
      else{
        me.x = x;
      }
      //alert( c.width / (map.height * map.tilesize) / 2 );
      y = (e.clientY - c.clientHeight*.76) / (c.clientHeight*.24 ) *map.height * map.tilesize -  c.height / 2; 
      if(y<0){
        me.y = 0;
      } 
      else if(y+c.height*(4/5)>map.height * map.tilesize){
        me.y = (map.height*map.tilesize) - c.height*(4/5);
      }
      else{
        me.y = y;
      }
  
  }
}
