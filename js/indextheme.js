
const light = document.getElementById('white-button');
const red = document.getElementById('red-button');
const blue = document.getElementById('blue-button');
const yellow = document.getElementById('yellow-button');
const pink = document.getElementById('pink-button');
const green = document.getElementById('green-button');

const body = document.getElementById('body');
const image = document.getElementById("titlegif");
const scrolldownimage = document.getElementById("scrolldown-gif");

// Check if localStorage is empty at the beginning of a session
if (!sessionStorage.getItem('sessionStarted')) {
    // Clear localStorage
    localStorage.clear();

    // Mark the session as started
    sessionStorage.setItem('sessionStarted', 'true');
}



//carrying theme from previous page
var theme = localStorage.getItem('theme');

if (theme == 'light' || theme == null){
    localStorage.setItem('theme', 'light');
    body.classList.add('light');
    image.src = 'img/title_notext_black.gif'; // Change to dark lines
    scrolldownimage.src = 'img/icons/scrolldown_light.gif';
}
else if (theme == 'red'){
    body.classList.add('red');
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
}
else if (theme == 'blue'){
    body.classList.add('blue');
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
}
else if (theme == 'yellow'){
    body.classList.add('yellow');
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    // image.src = 'img/title_light.gif'; // Change to dark lines
    // scrolldownimage.src = 'img/icons/scrolldown_light.gif';
}
else if (theme == 'pink'){
    body.classList.add('pink');
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
}
else if (theme == 'green'){
    body.classList.add('green');
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
}

light.addEventListener('click', function() {
    if (body.classList.contains('light')){
        //do nothing
    }
    else if (body.classList.contains('red')){
        body.classList.remove('red');
        body.classList.add('light');
    }
    else if (body.classList.contains('blue')){
        body.classList.remove('blue');
        body.classList.add('light');
    }
    else if (body.classList.contains('yellow')){
        body.classList.remove('yellow');
        body.classList.add('light');
    }
    else if (body.classList.contains('pink')){
        body.classList.remove('pink');
        body.classList.add('light');
    }
    else if (body.classList.contains('green')){
        body.classList.remove('green');
        body.classList.add('light');
    }
    image.src = 'img/title_notext_black.gif'; // Change to dark lines
    scrolldownimage.src = 'img/icons/scrolldown_light.gif';
    localStorage.setItem('theme', 'light');
    console.log('light');
});

red.addEventListener('click', function() {
    if (body.classList.contains('red')){
        //do nothing
    }
    else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('red');
    }
    else if (body.classList.contains('blue')){
        body.classList.remove('blue');
        body.classList.add('red');
    }
    else if (body.classList.contains('yellow')){
        body.classList.remove('yellow');
        body.classList.add('red');
    }
    else if (body.classList.contains('pink')){
        body.classList.remove('pink');
        body.classList.add('red');
    }
    else if (body.classList.contains('green')){
        body.classList.remove('green');
        body.classList.add('red');
    }
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    localStorage.setItem('theme', 'red');
    console.log('red');
});

blue.addEventListener('click', function() {
    if (body.classList.contains('blue')){
        //do nothing
    }
    else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('blue');
    }
    else if (body.classList.contains('red')){
        body.classList.remove('red');
        body.classList.add('blue');
    }
    else if (body.classList.contains('yellow')){
        body.classList.remove('yellow');
        body.classList.add('blue');
    }
    else if (body.classList.contains('pink')){
        body.classList.remove('pink');
        body.classList.add('blue');
    }
    else if (body.classList.contains('green')){
        body.classList.remove('green');
        body.classList.add('blue');
    }
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    localStorage.setItem('theme', 'blue');
    console.log('blue');
});

yellow.addEventListener('click', function() {
    if (body.classList.contains('yellow')){
        //do nothing
    }
    else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('yellow');
    }
    else if (body.classList.contains('red')){
        body.classList.remove('red');
        body.classList.add('yellow');
    }
    else if (body.classList.contains('blue')){
        body.classList.remove('blue');
        body.classList.add('yellow');
    }
    else if (body.classList.contains('pink')){
        body.classList.remove('pink');
        body.classList.add('yellow');
    }
    else if (body.classList.contains('green')){
        body.classList.remove('green');
        body.classList.add('yellow');
    }
    // image.src = 'img/title_light.gif'; // Change to dark lines
    // scrolldownimage.src = 'img/icons/scrolldown_light.gif';
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    localStorage.setItem('theme', 'yellow');
    console.log('yellow');
});


pink.addEventListener('click', function() {
    if (body.classList.contains('pink')){
        //do nothing
    }
    else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('pink');
    }
    else if (body.classList.contains('red')){
        body.classList.remove('red');
        body.classList.add('pink');
    }
    else if (body.classList.contains('blue')){
        body.classList.remove('blue');
        body.classList.add('pink');
    }
    else if (body.classList.contains('yellow')){
        body.classList.remove('yellow');
        body.classList.add('pink');
    }
    else if (body.classList.contains('green')){
        body.classList.remove('green');
        body.classList.add('pink');
    }
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    localStorage.setItem('theme', 'pink');
    console.log('pink');
});

green.addEventListener('click', function() {
    if (body.classList.contains('green')){
        //do nothing
    }
    else if (body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('green');
    }
    else if (body.classList.contains('red')){
        body.classList.remove('red');
        body.classList.add('green');
    }
    else if (body.classList.contains('blue')){
        body.classList.remove('blue');
        body.classList.add('green');
    }
    else if (body.classList.contains('yellow')){
        body.classList.remove('yellow');
        body.classList.add('green');
    }
    else if (body.classList.contains('pink')){
        body.classList.remove('pink');
        body.classList.add('green');
    }
    image.src = 'img/title_notext_white.gif'; // Change to light lines
    scrolldownimage.src = 'img/icons/scrolldown_dark.gif'
    localStorage.setItem('theme', 'green');
    console.log('green');
});

