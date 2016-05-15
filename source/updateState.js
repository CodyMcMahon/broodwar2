function updateState(){
  //c.width -= 1;
  //c.height = document.body.clientHeight;
  //don't do this when on minimap
  if(!me.isOnMiniMap){
    if(me.cameraMoveY === "north"){
      if (me.y > me.cameraMoveSpeed){
        me.y -= me.cameraMoveSpeed;
      }
      else{
        me.y = 0;
      }
    }
    else if(me.cameraMoveY === "south"){
      if (me.y < ((map.height *map.tilesize) - c.height*(4/5) ) - me.cameraMoveSpeed){
        me.y += me.cameraMoveSpeed;
      }
      else{
        me.y = (map.height*map.tilesize) - c.height*(4/5) ;
      }
    }
    if(me.cameraMoveX === "west"){
      if (me.x > me.cameraMoveSpeed){
        me.x -= me.cameraMoveSpeed;
      }
      else{
        me.x = 0;
      }
    }
    else if(me.cameraMoveX === "east"){
      if (me.x < ((map.width*map.tilesize) - c.width) - me.cameraMoveSpeed){
        me.x += me.cameraMoveSpeed;
      }
      else{
        me.x = (map.width*map.tilesize) - c.width;
      }
    }
  }
}