let slideIndex = 0;
showSlides(); // Call the function to display the first slide

// Function to display the slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++; // Increase index to show the next slide
    
    // If the index is greater than the number of slides, reset it
    if (slideIndex > slides.length) {slideIndex = 1}  
    
    slides[slideIndex-1].style.display = "block";  // Display the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Function to change slides manually
function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}
    
    // Display the current slide
    showCurrentSlide(slideIndex);
}

// Function to display the current slide
function showCurrentSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[n-1].style.display = "block";  
}
