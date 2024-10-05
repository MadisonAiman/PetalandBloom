document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('in-view');
        }
    });
});const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show-back-to-top');
    } else {
        backToTopButton.classList.remove('show-back-to-top');
    }
});const testimonials = [
    "Beautiful arrangements and excellent service! -Annie",
    "Petal & Bloom made our wedding day unforgettable! -Steven J.",
    "The freshest flowers in town, always impressed. -Pierce Stefferson",
    "They we such a great gift idea. My partner loved them. - Ryan Christopherson",
    "Couldn't be happier with my mother's day arrangement. -Jessica Rarden", 
    "You can tell they put so much love into every step of the process. I'll be back. -Rachel W."
];
let currentTestimonial = 0;

function rotateTestimonial() {
    const testimonialElement = document.getElementById('testimonial');
    testimonialElement.style.opacity = 0;

    setTimeout(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialElement.innerText = testimonials[currentTestimonial];
        testimonialElement.style.opacity = 1;
    }, 500);
}

setInterval(rotateTestimonial, 6000);



