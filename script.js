var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var space = document.getElementsByClassName("mySlides");
    for (i = 0; i < space.length; i++) {
      space[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > space.length) {slideIndex = 1} 
    space[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 5 seconds
}