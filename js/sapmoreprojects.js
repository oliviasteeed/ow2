// dumbcute hover image //
var dumbcuteimg = document.getElementById("dumbcute-img");
var dumbcutehover = document.getElementById("dumbcute-hover");

dumbcutehover.onmouseenter = function (e){
    dumbcuteimg.style.display="block";
}

dumbcutehover.onmouseleave = function (e){
    dumbcuteimg.style.display="none";
}

dumbcutehover.onmousemove = function (e){
    dumbcuteimg.style.left = e.pageX + 5 + "px";
    dumbcuteimg.style.top = e.pageY - 50 + "px";
}

// // between dreams hover image //
// var betweendreamsimg = document.getElementById("betweendreams-img");
// var betweendreamshover = document.getElementById("betweendreams-hover");

// betweendreamshover.onmouseenter = function (e){
//     betweendreamsimg.style.display="block";
// }

// betweendreamshover.onmouseleave = function (e){
//     betweendreamsimg.style.display="none";
// }

// betweendreamshover.onmousemove = function (e){
//     betweendreamsimg.style.left = e.pageX + 5 + "px";
//     betweendreamsimg.style.top = e.pageY - 30 + "px";
// }

// SAP ua hover //
var sapuaimg = document.getElementById("sapua-img");
var sapuahover = document.getElementById("sapua-hover");

sapuahover.onmouseenter = function (e){
    sapuaimg.style.display="block";
}

sapuahover.onmouseleave = function (e){
    sapuaimg.style.display="none";
}

sapuahover.onmousemove = function (e){
    sapuaimg.style.left = e.pageX + 3 + "px";
    sapuaimg.style.top = e.pageY - 60 + "px";
}