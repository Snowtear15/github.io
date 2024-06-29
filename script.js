document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', smoothScroll);
    }

    // Image slider
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const nextSlide = () => {
        slides[slideIndex].style.display = 'none';
        slideIndex = (slideIndex + 1) % totalSlides;
        slides[slideIndex].style.display = 'block';
    };

    const prevSlide = () => {
        slides[slideIndex].style.display = 'none';
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        slides[slideIndex].style.display = 'block';
    };

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';

    setInterval(nextSlide, 3000); // Auto-slide every 5 seconds
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('showing');
    });
});

// JavaScript for toggling the navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('header nav ul');
    const body = document.querySelector('body');

    // Toggle the 'showing' class when the menu button is clicked
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('showing');
        body.classList.toggle('no-scroll'); // Add or remove 'no-scroll' class
    });

    // Close the menu when a menu item is clicked
    navList.addEventListener('click', function () {
        navList.classList.remove('showing');
        body.classList.remove('no-scroll'); // Remove 'no-scroll' class
    });

    // Close the menu when the menu button is clicked again
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('showing');
        body.classList.toggle('no-scroll'); // Add or remove 'no-scroll' class
    });
});



