
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

// SAP hover //
var sapimg = document.getElementById("sap-img");
var saphover = document.getElementById("sap-hover");

saphover.onmouseenter = function (e){
    sapimg.style.display="block";
}

saphover.onmouseleave = function (e){
    sapimg.style.display="none";
}

saphover.onmousemove = function (e){
    sapimg.style.left = e.pageX + 20 + "px";
    sapimg.style.top = e.pageY - 20 + "px";
}