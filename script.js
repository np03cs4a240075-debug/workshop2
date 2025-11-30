// Menu toggle (mobile)
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.innerText = isOpen ? '✕' : '☰';
});

// Close mobile menu when a link is clicked (good UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuButton.setAttribute('aria-expanded', false);
            menuButton.innerText = '☰';
        }
    });
});

// Scroll progress bar
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';
});

// Contact form handling & validation
const contactForm = document.getElementById('contactForm');
const msg = document.getElementById('msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        msg.textContent = 'Please fill out all required fields.';
        msg.style.color = 'crimson';
        return;
    }

    // basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = 'crimson';
        return;
    }

    // Mock submission behavior
    msg.textContent = 'Thank you for your message! I will be in touch shortly.';
    msg.style.color = 'green';
    contactForm.reset();

    // Optionally we could store to localStorage or send to backend if available
});

// Small helper: set current year in footer
document.getElementById('year').innerText = new Date().getFullYear();
