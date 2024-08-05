document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const multipleText = document.querySelector('.multiple-text');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Typed.js for typing animation
    new Typed(multipleText, {
        strings: ['Web Developer', 'Freelancer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Form validation
    window.validateForm = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const subject = document.getElementById('subject').value;
        const msg = document.getElementById('msg').value;
        const nameError = document.getElementById('nameerror');

        if (name === '' || email === '' || number === '' || subject === '' || msg === '') {
            nameError.textContent = 'Please fill in all fields';
            return false;
        }

        nameError.textContent = '';
        return true;
    };

    // ScrollReveal for scroll animations
    ScrollReveal().reveal('.home-content', { delay: 200, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('.home-img', { delay: 400, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('.about-content', { delay: 200, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('.about-img', { delay: 400, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('.skills-container', { delay: 200, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.contact form', { delay: 200, distance: '50px', origin: 'bottom' });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
