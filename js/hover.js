//project hover images

// document.body.style.cursor = "url('img/cursor.png'), auto";

//CASE STUDIES //

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

// between dreams hover image //
var betweendreamsimg = document.getElementById("betweendreams-img");
var betweendreamshover = document.getElementById("betweendreams-hover");

betweendreamshover.onmouseenter = function (e){
    betweendreamsimg.style.display="block";
}

betweendreamshover.onmouseleave = function (e){
    betweendreamsimg.style.display="none";
}

betweendreamshover.onmousemove = function (e){
    betweendreamsimg.style.left = e.pageX + 5 + "px";
    betweendreamsimg.style.top = e.pageY - 30 + "px";
}

// runitup hover image //
var runitupimg = document.getElementById("runitup-img");
var runituphover = document.getElementById("runitup-hover");

runituphover.onmouseenter = function (e){
    runitupimg.style.display="block";
}

runituphover.onmouseleave = function (e){
    runitupimg.style.display="none";
}

runituphover.onmousemove = function (e){
    runitupimg.style.left = e.pageX + 5 + "px";
    runitupimg.style.top = e.pageY - 30 + "px";
}

//PERSONAL PROJECTS //

// mytakeaway hover image //
var mytakeawayimg = document.getElementById("mytakeaway-img");
var mytakeawayhover = document.getElementById("mytakeaway-hover");

mytakeawayhover.onmouseenter = function (e){
    mytakeawayimg.style.display="block";
}

mytakeawayhover.onmouseleave = function (e){
    mytakeawayimg.style.display="none";
}

mytakeawayhover.onmousemove = function (e){
    mytakeawayimg.style.left = e.pageX + 3 + "px";
    mytakeawayimg.style.top = e.pageY - 60 + "px";
}

// viavia hover image //
var viaviaimg = document.getElementById("viavia-img");
var viaviahover = document.getElementById("viavia-hover");

viaviahover.onmouseenter = function (e){
    viaviaimg.style.display="block";
}

viaviahover.onmouseleave = function (e){
    viaviaimg.style.display="none";
}

viaviahover.onmousemove = function (e){
    viaviaimg.style.left = e.pageX + 3 + "px";
    viaviaimg.style.top = e.pageY - 100 + "px";
}

// my body is not the project hover image //
var mbintpimg = document.getElementById("mbintp-img");
var mbintphover = document.getElementById("mbintp-hover");

mbintphover.onmouseenter = function (e){
    mbintpimg.style.display="block";
}

mbintphover.onmouseleave = function (e){
    mbintpimg.style.display="none";
}

mbintphover.onmousemove = function (e){
    mbintpimg.style.left = e.pageX + 3  + "px";
    mbintpimg.style.top = e.pageY - 50 + "px";
}