/*function mk_blackman(startx,starty,rallyx,rallyy,ID){
  return {
    isBuilding: 0,
    speed:9,
    x:startx,
    y:starty,
    prox:rallyx,
    proy:rallyy,
    teamID:ID,
    //is: true,
    //idle: 0//[document.getElementById("scream2"),document.getElementById("snowidle2"),document.getElementById("snowidle3"),document.getElementById("snowidle4")],
    //idlen: 0,
    //walk: 0//[document.getElementById("walkup"),document.getElementById("walkright"),document.getElementById("walkdown"),document.getElementById("walkleft")],
    //direction: 0,
    //walkn: 0,
    //img: document.getElementById("scream"),
}; 
}*/

function mktestbuilding(startx,starty,ID){
  //return 1;
  return {
    isBuilding:     1,
    speed:          0,
    x:              startx,
    y:              starty,
    prox:           startx,
    proy:           starty,
    teamID:         ID,
    img:            test_building,
    imgpixels:      96,
    imgnum:         5,
    imgn:           0,
    imgrate:        0.2,
    imgsize:        100,
    portrait:       test_portrait,
    portraitpixels: 80,
    portraitnum:    20,
    portraitn:      0,
    portraitrate:   1,
  };
  //return 0;
}