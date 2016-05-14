function mkblackman(){
    return {
    speed:9,
    x:500,
    y:500,
    prox:500,
    proy:500,
    is: true,
    idle: [document.getElementById("scream2"),document.getElementById("snowidle2"),document.getElementById("snowidle3"),document.getElementById("snowidle4")],
    idlen: 0,
    walk: [document.getElementById("walkup"),document.getElementById("walkright"),document.getElementById("walkdown"),document.getElementById("walkleft")],
    direction: 0,
    walkn: 0,
	img: document.getElementById("scream"),
}; 
}