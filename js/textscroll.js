

var scrollingUp = false;

var lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop){
      console.log('Scrolling down');
      var scrollingUp = false;
    } else {
      console.log('Scrolling up');
      var scrollingUp = true;
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    console.log(scrollingUp);
  });


 // Get the scrolling text element
 var scrollingText = document.getElementById('scrolling-text');
    var fixedPoint = document.getElementById('scroll-stop');

    // var distanceFromTop = scrollingText.getBoundingClientRect().top;
    // var fixedPointPosition = fixedPoint.getBoundingClientRect().top;
    // var scrollingTextHeight = scrollingText.offsetHeight;

 // Update text position on scroll
 window.addEventListener('scroll', function() {

   // Calculate the distance scrolled from the top of the page
   var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + this.window.innerHeight/2;

   // Adjust text position based on scroll position
   scrollingText.style.bottom = scrollPosition + 'px';

   var textbox = scrollingText.getBoundingClientRect(); //get text position
   console.log(textbox.top);

   var titleFixed = false;
   if (scrollingUp && scrollPosition < 700){
    titleFixed = true;
   }

   var siteTitleBox = document.getElementsByClassName("site-title-box")[0];
   var referenceBox = siteTitleBox.getBoundingClientRect();

   console.log("refboxtop", referenceBox.top);

   console.log(scrollPosition);

       if (textbox.top < 10 && !scrollingUp) {
        var x = textbox.left;
        var y = textbox.top;

        scrollingText.style.position = 'fixed';
        scrollingText.style.left = x + 'px';
        scrollingText.style.top = y + 'px';

        console.log("if");

    } else if (scrollingUp && scrollPosition > 700) {
        // scrollingText.removeAttribute('style');

        // var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + this.window.innerHeight/2;
        // scrollingText.style.bottom = scrollPosition + 'px';
        console.log("else");

        scrollingText.style.top + 1;
    
    } else if (!scrollingUp && scrollPosition > 700) {
        // scrollingText.removeAttribute('style');

        // var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + this.window.innerHeight/2;
        // scrollingText.style.bottom = scrollPosition + 'px';
        console.log("else");

        scrollingText.style.top + 1;
    }
    });
























// var scrollingUp = false;

// var lastScrollTop = 0;
//   window.addEventListener('scroll', function() {
//     var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
//     if (currentScrollTop > lastScrollTop){
//       console.log('Scrolling down');
//       var scrollingUp = false;
//     } else {
//       console.log('Scrolling up');
//       var scrollingUp = true;
//     }
    
//     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

//     console.log(scrollingUp);
//   });


//  // Get the scrolling text element
//  var scrollingText = document.getElementById('scrolling-text');
//     var fixedPoint = document.getElementById('scroll-stop');

//     // var distanceFromTop = scrollingText.getBoundingClientRect().top;
//     // var fixedPointPosition = fixedPoint.getBoundingClientRect().top;
//     // var scrollingTextHeight = scrollingText.offsetHeight;

//  // Update text position on scroll
//  window.addEventListener('scroll', function() {

//    // Calculate the distance scrolled from the top of the page
//    var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + this.window.innerHeight/2;

//    // Adjust text position based on scroll position
//    scrollingText.style.bottom = scrollPosition + 'px';

//    var textbox = scrollingText.getBoundingClientRect(); //get text position
//    console.log(textbox.top);

//    console.log(scrollPosition);

//        if (textbox.top < 10 && !scrollingUp) {
//         var x = textbox.left;
//         var y = textbox.top;

//         scrollingText.style.left = x + 'px';
//         scrollingText.style.top = y + 'px';

//         console.log("if");
//     } else {
//         // scrollingText.removeAttribute('style');

//         // var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + this.window.innerHeight/2;
//         // scrollingText.style.bottom = scrollPosition + 'px';
//         console.log("else");

//         scrollingText.style.top - 1;
//     }
// });