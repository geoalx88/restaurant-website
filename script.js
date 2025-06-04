// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

document.querySelector('.prev').addEventListener('click', () => {
    const slides = document.getElementsByClassName("slide");
    slideIndex -= 2;
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides();
});

// Accordion functionality
const accordionTitles = document.getElementsByClassName('accordion-title');
for (let i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].addEventListener('click', function() {
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
}

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        document.getElementById('form-message').textContent = 'Please fill in all required fields.';
        return;
    }
    if (!emailRegex.test(email)) {
        document.getElementById('form-message').textContent = 'Please enter a valid email address.';
        return;
    }
    if (phone && !/^\d{10}$/.test(phone)) {
        document.getElementById('form-message').textContent = 'Please enter a valid 10-digit phone number.';
        return;
    }

    document.getElementById('form-message').textContent = 'Thank you! Your message has been sent. We will contact you soon.';
    document.getElementById('contact-form').reset();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});