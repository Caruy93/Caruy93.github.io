// When user scrolls, execute myFunction
const window.onscroll = () => {
    stickyBar()
};

// Get navbar
var navbar = document.getElementById("navbar");

// Get offset position fo the navbar
var sticky = navbar.offsetTop;

// Add sticky class to nav when it reaches scroll position. Remove when it leaves position
function stickyBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}