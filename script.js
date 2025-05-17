document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuToggle.style.display = 'none';
    
    const header = document.querySelector('header');
    header.insertBefore(mobileMenuToggle, header.firstChild);
    
    const nav = document.querySelector('nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
    
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';
            nav.style.display = 'none';
        } else {
            mobileMenuToggle.style.display = 'none';
            nav.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    
    // Artist category filtering
    if (document.querySelector('.artists-page')) {
        const categoryButtons = document.querySelectorAll('.category-buttons button');
        const artistCards = document.querySelectorAll('.artist-card');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                artistCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Image hover effect enhancement
    const artItems = document.querySelectorAll('.art-item, .artist-card, .gallery-category');
    artItems.forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            img.style.transition = 'transform 0.5s ease';
            item.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.05)';
            });
            item.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        }
    });
});
