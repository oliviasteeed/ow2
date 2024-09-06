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

// SAP research hover //
var sapresearchimg = document.getElementById("sapresearch-img");
var sapresearchhover = document.getElementById("sapresearch-hover");

sapresearchhover.onmouseenter = function (e){
    sapresearchimg.style.display="block";
}

sapresearchhover.onmouseleave = function (e){
    sapresearchimg.style.display="none";
}

sapresearchhover.onmousemove = function (e){
    sapresearchimg.style.left = e.pageX + 3 + "px";
    sapresearchimg.style.top = e.pageY - 55 + "px";
}