const mainNavLinks = document.querySelectorAll("nav ol li a");

mainNavLinks.forEach(link => {
    link.addEventListener("click", event => {
        
        event.preventDefault();
        let target = document.querySelector(event.target.hash);
        console.log(target);
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
    });
  });
});
