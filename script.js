document.addEventListener('DOMContentLoaded', function() {

    // Initialize Animate on Scroll (AOS)
    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
        once: true,     // whether animation should happen only once - while scrolling down
    });

    // Initialize Typed.js for the hero section tagline
    const options = {
        strings: ['Electronics Engineer', 'Software Developer', 'IoT Innovator', 'PCB Designer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    };
    const typed = new Typed('#typed-text', options);

    // Hide/show header on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Downscroll
            header.style.top = '-100px'; 
        } else {
            // Upscroll
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });

});