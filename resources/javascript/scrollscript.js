const sectionViewGap = Math.round(Math.max(0, (($(window).height() || 0) - $('#About').height()) / 2));

// Update arrow anchor link based on scroll position
function arrowUpdater() {
    $('section').each(function (index) {

        // Assign height and position variables
        let sectionTop = $(this).position().top;
        let sectionHeight = $(this).outerHeight();
        const scrollPosition = $(document).scrollTop();

        // Adjust intro section height
        sectionHeight = (index === 0) ? sectionHeight - sectionViewGap: sectionHeight;

        // Adjust about section position and height
        if (index === 1) {
            sectionTop -= sectionViewGap;
            sectionHeight += sectionViewGap;
        }

        
        // Condition checks that the element is in view, and assigns new index to arrows
        if(sectionTop <= scrollPosition && (sectionTop + sectionHeight) > scrollPosition) {

            const prevIndex = Math.max(0, index - 1);
            const nextIndex = Math.min(index + 1, $('section').get().length - 1);

            $('#up-arrow').attr('href','#' + $('section').eq(prevIndex).attr('id'));
            $('#down-arrow').attr('href','#' + $('section').eq(nextIndex).attr('id'));

        }
    });
}

// Detect smooth scrolling and add feature where absent
function smoothScroller() {

    if (document.querySelector('main').style.scrollBehavior === undefined) {

        // Add smooth scrolling to all links
        $(".smooth-scroller").on('click', function(event) {
            
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
}

// Calculate the viewport gap when scrolling to about section
function calcSectionViewGap() {
    
    const aboutRule = `.about-section {margin-top: -${sectionViewGap}px}`;
    const aboutBeforeRule = `.about-section::before {height: ${sectionViewGap}px}`;
    
    document.styleSheets[1].insertRule(aboutRule);
    document.styleSheets[1].insertRule(aboutBeforeRule);

}

// Hide navbar when scrolling down, show navbar when scrolling up */
let prevScrollpos = $(document).scrollTop();
// Set rules to apply on each condition (top of the page, scrolling up, scrolling down)
const topStyle = {top: 0, height: '100px', 'box-shadow': 'none'};
const scrollUpStyle = {top: 0, height: '70px', 'box-shadow':  '0px 5px 30px -5px #c0b7a7'}
const scrollDownStyle = {top: '-70px', height: '70px', 'box-shadow': 'none'};

function navBarShift() {
    let currentScrollPos = $(this).scrollTop()

    // Arrow function for how css rules are set
    const stylingOnScroll = () => {
        if (currentScrollPos <= 0) {
            $("header").css(topStyle);
    
        } else {
            prevScrollpos > currentScrollPos ?  
                $("header").css(scrollUpStyle): 
                $("header").css(scrollDownStyle);
        }
        // Reset previous scroll position
        prevScrollpos = currentScrollPos;
    }
 
    // Apply arrow function depending on screen width
    if ($(this).width() > 688) {
        stylingOnScroll();
    } 
    else {
        if($('input[type="checkbox"]').is(":not(:checked)")){
            stylingOnScroll();
        }

    }
}


$(document).ready(arrowUpdater);
$(document).ready(smoothScroller);
$(document).ready(calcSectionViewGap);

$(document).scroll(arrowUpdater);
$(document).scroll(navBarShift);

