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
