
function mouseDown(e){
  if(e.button === 0){
    me.isOnGameScreen = 1;
    me.isClickedDown = 1;
    me.dragStartX = e.clientX;
    me.dragStartY = e.clientY;
	}else if(e.button == 2){
		//ctx.strokeText(" right click ",110,100);
	}
	//ctx.strokeText("at X: "+e.clientX+" \nY: "+e.clientY,110,200);
}

function mouseUp(e){
  if(e.button === 0){
    me.isOnGameScreen = 0;
    me.isClickedDown = 0;
    me.isDragging = 0;
    //me.dragStartX = e.clientX;
    //me.dragStartY = e.clientY;
	}else if(e.button == 2){
	}
}

function mouseOut(e){
  me.isOnGameScreen = 0;
  me.isClickedDown = 0;
  me.isDragging = 0;
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
  if(e.clientY < 5){
    me.cameraMoveY = "north";
  }
  else if(e.clientY > c.height - 5){
    me.cameraMoveY = "south";
  }
  else{
    me.cameraMoveY = "";
  }
  if(e.clientX < 5){
    me.cameraMoveX = "west";
  }
  else if(e.clientX > c.width - 5){
    me.cameraMoveX = "east";
  }
  else{
    me.cameraMoveX = "";
  }
}
