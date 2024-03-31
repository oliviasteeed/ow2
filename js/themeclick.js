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

        body.classList.toggle('dark');

        if (image.src.includes("title_light.gif")) {
            image.src = "img/title_dark.gif"; // Change to image2.jpg
        } else {
            image.src = "img/title_light.gif"; // Change back to image1.jpg
        }

        if (scrolldownimage.src.includes("scrolldown_light.gif")) {
            scrolldownimage.src = "img/icons/scrolldown_dark.gif"; // Change to image2.jpg
        } else {
            scrolldownimage.src = "img/icons/scrolldown_light.gif"; // Change back to image1.jpg
        }


    }
});