// Get the image element
const image = document.getElementById("test-themeclick");
const scrolldownimage = document.getElementById("scrolldown-gif");
const body = document.getElementById("body");

// Add a click event listener to the image
image.addEventListener('click', function(event) {
    // Check if the click event target is the image
    if (event.target === image) {
        console.log('Mouse clicked on the image!');
        // You can perform any action here

        // body.classList.toggle('dark');

        if (body.classList.contains("light")){
            body.classList.remove("light");
            body.classList.add("red");
            image.src = "img/title_dark.gif"; // Change to light lines
            scrolldownimage.src = "img/icons/scrolldown_dark.gif"
        }
        else if(body.classList.contains("red")){
            body.classList.remove("red");
            body.classList.add("blue");
        }
        else if(body.classList.contains("blue")){
            body.classList.remove("blue");
            body.classList.add("yellow");
            image.src = "img/title_light.gif"; // Change to dark lines
            scrolldownimage.src = "img/icons/scrolldown_light.gif";
        }
        else if(body.classList.contains("yellow")){
            body.classList.remove("yellow");
            body.classList.add("pink");
            image.src = "img/title_dark.gif"; // Change to light lines
            scrolldownimage.src = "img/icons/scrolldown_dark.gif"
        }
        else if(body.classList.contains("pink")){
            body.classList.remove("pink");
            body.classList.add("green");
        }
        else if(body.classList.contains("green")){
            body.classList.remove("green");
            body.classList.add("light");
            image.src = "img/title_light.gif"; // Change to dark lines
            scrolldownimage.src = "img/icons/scrolldown_light.gif";
        }

        

        // if (image.src.includes("title_light.gif")) {
        //     image.src = "img/title_dark.gif"; // Change to light lines
        //     image.src = "img/title_light.gif"; // Change to dark lines
        // }

        // if (scrolldownimage.src.includes("scrolldown_light.gif")) {
        //     scrolldownimage.src = "img/icons/scrolldown_dark.gif"; // Change to image2.jpg
        // } else {
        //     scrolldownimage.src = "img/icons/scrolldown_light.gif"; // Change back to image1.jpg
        // }


    }
});






//backup in case i ruin it lol

// Get the image element
// const image = document.getElementById("test-themeclick");
// const scrolldownimage = document.getElementById("scrolldown-gif");
// const body = document.getElementById("body");

// // Add a click event listener to the image
// image.addEventListener('click', function(event) {
//     // Check if the click event target is the image
//     if (event.target === image) {
//         console.log('Mouse clicked on the image!');
//         // You can perform any action here

//         body.classList.toggle('dark');

//         if (image.src.includes("title_light.gif")) {
//             image.src = "img/title_dark.gif"; // Change to image2.jpg
//         } else {
//             image.src = "img/title_light.gif"; // Change back to image1.jpg
//         }

//         if (scrolldownimage.src.includes("scrolldown_light.gif")) {
//             scrolldownimage.src = "img/icons/scrolldown_dark.gif"; // Change to image2.jpg
//         } else {
//             scrolldownimage.src = "img/icons/scrolldown_light.gif"; // Change back to image1.jpg
//         }


//     }
// });