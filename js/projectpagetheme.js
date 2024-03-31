
const light = document.getElementById('white-button');
const red = document.getElementById('red-button');
const blue = document.getElementById('blue-button');
const yellow = document.getElementById('yellow-button');
const pink = document.getElementById('pink-button');
const green = document.getElementById('green-button');

const body = document.getElementById('body');
const closebutton = document.getElementById("closebutton");

// // Check if localStorage is empty at the beginning of a session
// if (!sessionStorage.getItem('sessionStarted')) {
//     // Clear localStorage
//     localStorage.clear();

//     // Mark the session as started
//     sessionStorage.setItem('sessionStarted', 'true');
// }

//carrying theme from previous page
var theme = localStorage.getItem('theme');

if (theme == 'light'){
    body.classList.add('light');
    closebutton.src = '../img/icons/xicon_dark.png'; // Change to dark x
}
else if (theme == 'red'){
    body.classList.add('red');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
}
else if (theme == 'blue'){
    body.classList.add('blue');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
}
else if (theme == 'yellow'){
    body.classList.add('yellow');
    closebutton.src = '../img/icons/xicon_dark.png'; // Change to dark x
}
else if (theme == 'pink'){
    body.classList.add('pink');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
}
else if (theme == 'green'){
    body.classList.add('green');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
}


//clicking buttons

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
    localStorage.setItem('theme', 'light');
    closebutton.src = '../img/icons/xicon_dark.png'; // Change to dark x
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
    localStorage.setItem('theme', 'red');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
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
    localStorage.setItem('theme', 'blue');
    console.log('blue');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
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
    localStorage.setItem('theme', 'yellow');
    closebutton.src = '../img/icons/xicon_dark.png'; // Change to dark x
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
    localStorage.setItem('theme', 'pink');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
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
    localStorage.setItem('theme', 'green');
    closebutton.src = '../img/icons/xicon.png'; // Change to light x
    console.log('green');
});

