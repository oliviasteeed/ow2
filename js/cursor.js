'use strict';

var cursor = document.getElementById("cursor");

var customCursor = function customCursor(e){
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    console.log("cursoring");            
  }

  document.addEventListener('mousemove', customCursor);

// var addCursorExpand = function cursorExpand(){
//   cursor.classList.add('cursor-expand');
// }

// var removeCursorExpand = function cursorExpand(){
//   cursor.classList.remove('cursor-expand');
// }

// var links = document.querySelectorAll('a');
  
//   for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('mouseover', addCursorExpand);
//     links[i].addEventListener('mouseleave', removeCursorExpand);
//     console.log("corsor ober link"); 
//   }
  
  
//   document.addEventListener('mousedown', addCursorExpand);
//   document.addEventListener('mouseup', removeCursorExpand);

  









//   var getMouse = function getMouseLocation(e){
//     console.log("in get mouse");
//     // var x = e.clientX;
//     // var y = e.clientY;
//     // cursor.style.transform = "translate(x, y)";
//     // console.log("xy" +x, y);
//   }

//   document.addEventListener('load', getMouse);



// if (window.innerWidth > 768) {
//         cursor.classList.add('cursor-gradient');
//       }

