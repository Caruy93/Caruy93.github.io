function copyText() {
    // Get text and create text field
    const textToCopy = document.getElementById('copy-email').innerText;
    const temp = document.createElement("textarea");
    document.body.appendChild(temp);

    // Copy text from temporary text field
    temp.value = textToCopy;
    temp.select();
    document.execCommand("copy");

    // Remove temporary text field and alert
    document.body.removeChild(temp);
    alert("Copied: "+textToCopy);
}

/* Trigger navbar button click when clicking on nav link */
$('.nav-mobile-container ul li a').click(function(){
    $('input[type="checkbox"]').trigger("click");
});