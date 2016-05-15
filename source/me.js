

var me = {
    selection:[],
    controlGroups:[[],[],[],[],[],[],[],[],[],[]],
    teamID:1,
    teamColor:1,
    x:100,
    y:100,
    dragStartX: 0,
    dragStartY: 0,
    dragNowX: 0,
    dragNowY: 0,
    isClickedDown: 0,
    isDragging: 0,
    isOnGameScreen: 0,
    cameraMoveY: "",
    cameraMoveX: "",
    cameraMoveSpeed: 4,
}; 
function selectUnits(s,units){
  for(var i = 0;i < units.length;i++){
    s[s.length] = units[i];
  }
}
function selectClear(s){
  s=[];
}