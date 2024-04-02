var scrollingText = document.getElementById('scrolling-text');
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    scrollingText.style.top = '100%'; // Move text off-screen
  } else {
    // Scrolling up
    if (currentScrollTop <= 100) { // Adjust as needed
      scrollingText.style.top = '50%'; // Move text back to original position
    }
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
});