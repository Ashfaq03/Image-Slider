const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
let slideshowInterval;

// Function to show the current slide
function showSlide(index) {
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    // Update thumbnails
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
}

// Event Listeners for navigation buttons
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Event Listeners for progress indicators
dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(currentIndex);
    });
});

// Event Listeners for thumbnails
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = parseInt(thumbnail.getAttribute('data-index'));
        showSlide(currentIndex);
    });
});

// Automatic slideshow
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
}

// Pause slideshow on hover
document.querySelector('.slider-container').addEventListener('mouseover', () => {
    clearInterval(slideshowInterval);
});

document.querySelector('.slider-container').addEventListener('mouseout', () => {
    startSlideshow();
});

// Initialize
showSlide(currentIndex);
startSlideshow();



