// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation background on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 11, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 11, 0.9)';
    }
});

// Poem expand functionality
document.querySelectorAll('.poem-expand-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.poem-card-expandable');
        const content = card.querySelector('.poem-content-collapsed');
        
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            this.textContent = 'Read more';
        } else {
            content.classList.add('expanded');
            this.textContent = 'Show less';
        }
    });
});
