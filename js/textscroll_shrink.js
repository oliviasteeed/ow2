//identify if scrolling up or down

var scrollingUp = false;

var lastScrollTop = 0;

window.addEventListener('scroll', function () {
    currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // console.log('Scrolling down');
        var scrollingUp = false;
    } else {
        // console.log('Scrolling up');
        var scrollingUp = true;
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    // console.log(scrollingUp);
});




var titleFrozen = false;
var windowYOnFreeze;

//scroll up text to a certain point

var scrollingText = document.getElementById('scrolling-text');
var titleGif = document.getElementById('titlegif');

var scrollingO = document.getElementById("o-scrollup");

window.addEventListener('scroll', function () {

    // Calculate the distance scrolled from the top of the page
    var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + (this.window.innerHeight * 0.53);


    var textbox = scrollingText.getBoundingClientRect(); //get text position
    var textboxY = textbox.top;



    //make text smaller when scroll up
    // var scrollPos = window.scrollY;

    // // Define the maximum and minimum font sizes
    // var maxFontSize = 55; // Maximum font size in pixels
    // var minFontSize = 32; // Minimum font size in pixels

    // // Calculate the new font size based on the scroll position
    // var newSize = maxFontSize - (scrollPos * 0.1); // Adjust the factor as needed

    // // Ensure the font size doesn't go below the minimum size
    // newSize = Math.max(newSize, minFontSize);

    // // Update the font size of the element
    // scrollingText.style.fontSize = newSize + 'px';
    


    if (!scrollingUp && textboxY >= 1 || scrollingUp && textboxY >= 1) {   //scroll it up or down


        if (titleFrozen){   //if frozen at top come back down
            var currWindowY = window.scrollY;
            // console.log("currWindowY", currWindowY);
            if (currWindowY < windowYOnFreeze){
                titleFrozen = false;

                scrollingText.style.position = '';
                scrollingO.style.opacity = '0';
            }
        }
            
        if (!titleFrozen){ //scroll again when scroll down
            // console.log("lets move");
            scrollingText.style = '';
            // Adjust text position based on scroll position
            scrollingText.style.bottom = scrollPosition + 'px'; 

            titleGif.style.display = '';
            scrollingO.style.opacity = '0';
        }
    } 




        if (!scrollingUp && textboxY < 1) {    //if scrolled up all the way, stop
            scrollingText.style.position = 'fixed';

            scrollingText.style.top = 1 + 'px';

            windowYOnFreeze = window.scrollY;
            titleFrozen = true;
            // console.log("stop");
            // console.log("windowYOnFreeze", windowYOnFreeze);

            titleGif.style.display = 'none';
            scrollingO.style.opacity = '1';


        }



    
});











// //identify if scrolling up or down

// var scrollingUp = false;

// var lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//     currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScrollTop > lastScrollTop) {
//         console.log('Scrolling down');
//         var scrollingUp = false;
//     } else {
//         console.log('Scrolling up');
//         var scrollingUp = true;
//     }

//     lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

//     console.log(scrollingUp);
// });


// //scroll up text to a certain point

// var scrollingText = document.getElementById('scrolling-text');

// window.addEventListener('scroll', function () {

//     // Calculate the distance scrolled from the top of the page
//     var scrollPosition = (window.pageYOffset || document.documentElement.scrollTop) + (this.window.innerHeight * 0.53);

//     console.log("scroll position", scrollPosition);

//     var y = window.scrollY; //how much page scrolled up
//     console.log("y", y);

//     if (!scrollingUp && y < 300 || scrollingUp && y < 300) {   //scroll it up or down
//         console.log("scroll it up or down");

//         scrollingText.style = '';

//         // Adjust text position based on scroll position
//         scrollingText.style.bottom = scrollPosition + 'px';

//     } 

//         if (!scrollingUp && y >= 300) {    //if scrolled up all the way, stop
//             var textbox = scrollingText.getBoundingClientRect(); //get text position
//             var y = textbox.top;

//             console.log("yyy", y);
//             scrollingText.style.top = 1 + 'px';
//             // scrollingText.style.top = y + 'px';
//             console.log("stop");
//         }



    
// });