import { initDarkMode } from './darkMode.js';
import { initSmoothScroll } from './smoothScroll.js';
import { initProjectFilter } from './projectFilter.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initDarkMode();
    initSmoothScroll();
    initProjectFilter();
    
    // Initialize skill progress bars
    initSkillBars();
    
    // Initialize form handling
    initContactForm();
});

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progress = entry.target.dataset.progress;
                progressBar.style.width = `${progress}%`;
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });

    skillBars.forEach(bar => observer.observe(bar));
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}
