document.addEventListener('DOMContentLoaded', () => {
    // Video Background Handling
    const heroVideo = document.getElementById('heroVideo');
    const videoLoading = document.querySelector('.video-loading');

    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully');
            if (videoLoading) {
                videoLoading.style.display = 'none';
            }
            heroVideo.play().catch(e => console.error('Error playing video:', e));
        });

        heroVideo.addEventListener('error', (e) => {
            console.error('Error loading video:', e);
            // Fallback to a gradient background if video fails to load
            document.querySelector('.video-background').style.display = 'none';
            document.querySelector('.hero-section').style.background = 
                'linear-gradient(135deg, var(--background-dark), var(--background-light))';
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    let isDark = true;

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            root.style.setProperty('--background-dark', '#0a0a0a');
            root.style.setProperty('--background-light', '#1a1a1a');
            root.style.setProperty('--text-color', '#ffffff');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            root.style.setProperty('--background-dark', '#f0f0f0');
            root.style.setProperty('--background-light', '#ffffff');
            root.style.setProperty('--text-color', '#0a0a0a');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission
    const form = document.querySelector('.cyber-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Add glitch effect to submit button
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.classList.add('glitch-text');
            
            // Simulate form submission (replace with actual form handling)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            alert('Message sent successfully!');
            form.reset();
            submitBtn.classList.remove('glitch-text');
        });
    }

    // Parallax Effect for Hero Section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
    });

    // Animate skill bars on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    skillCategories.forEach(category => {
        category.style.opacity = 0;
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'all 0.5s ease-out';
        observer.observe(category);
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
