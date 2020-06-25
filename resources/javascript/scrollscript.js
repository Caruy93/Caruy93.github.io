
// Capture element height of ID: About
let divElement = document.getElementById('About');
let strHeight = document.defaultView.getComputedStyle(divElement).height;
let height = parseInt(strHeight);
var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
function spacer(elementHeight) {
    return (vh - elementHeight) / 2;
}

// Calculate and insert rules about section spacing
const aboutRule = `.about-section {margin-top: ${spacer(height)}px}`;
const aboutBeforeRule = `.about-section::before {height: ${spacer(height)}px}`;
console.log(document.styleSheets[1]);
document.styleSheets[1].insertRule(aboutRule);
document.styleSheets[1].insertRule(aboutBeforeRule);


// Allow smooth scrolling when document is ready
$(document).ready(function() {

    if (navigator.userAgent === 'safari') {
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                let hash = this.hash;

                // Use Jquery'y animate() method to add smooth page scroll
                // The optional number (800) specifies number of ml seconds it takes to scroll to the specified area
                $('html, body').animate(
                    {scrollTop: $(hash).offset().top},
                    800,
                    function() {
                        //Add hash (#) to URL when done scrolling (Default click behavior)
                        window.location.hash = hash;
                });
            } // End of if
        });
    }
});