// Get the image element
const image = document.getElementById("test-themeclick");
const scrolldownimage = document.getElementById("scrolldown-gif");
const body = document.getElementById("body");

const theme = localStorage.getItem("theme");
if (theme == "light"){
    body.classList.add("light");
}
else if (theme == "red"){
    body.classList.add("red");
}
else if (theme == "blue"){
    body.classList.add("blue");
}
else if (theme == "yellow"){
    body.classList.add("yellow");
}
else if (theme == "pink"){
    body.classList.add("pink");
}
else if (theme == "green"){
    body.classList.add("green");
}


// Add a click event listener to the image
image.addEventListener('click', function(event) {
    // Check if the click event target is the image

    localStorage.setItem('theme', 'light');

    if (event.target === image) {
        console.log('Mouse clicked on the image!');
        // You can perform any action here

        if (body.classList.contains("light")){
            body.classList.remove("light");
            body.classList.add("red");
            image.src = "img/title_dark.gif"; // Change to light lines
            scrolldownimage.src = "img/icons/scrolldown_dark.gif"

            localStorage.setItem('theme', 'red');
        }
        else if(body.classList.contains("red")){
            body.classList.remove("red");
            body.classList.add("blue");

            localStorage.setItem('theme', 'blue');
        }
        else if(body.classList.contains("blue")){
            body.classList.remove("blue");
            body.classList.add("yellow");
            image.src = "img/title_light.gif"; // Change to dark lines
            scrolldownimage.src = "img/icons/scrolldown_light.gif";

            localStorage.setItem('theme', 'yellow');
        }
        else if(body.classList.contains("yellow")){
            body.classList.remove("yellow");
            body.classList.add("pink");
            image.src = "img/title_dark.gif"; // Change to light lines
            scrolldownimage.src = "img/icons/scrolldown_dark.gif"

            localStorage.setItem('theme', 'pink');
        }
        else if(body.classList.contains("pink")){
            body.classList.remove("pink");
            body.classList.add("green");

            localStorage.setItem('theme', 'green');
        }
        else if(body.classList.contains("green")){
            body.classList.remove("green");
            body.classList.add("light");
            image.src = "img/title_light.gif"; // Change to dark lines
            scrolldownimage.src = "img/icons/scrolldown_light.gif";

            localStorage.setItem('theme', 'light');
        }



    }
});



