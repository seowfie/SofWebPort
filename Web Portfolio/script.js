document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Select specific elements to swap
    const profileImg = document.getElementById('profile-img');
    const heroDoodleImg = document.getElementById('hero-doodle-img');
    
    // Select ALL social icons (since you have 4 of them)
    const socialIcons = document.querySelectorAll('.social-icon');

    // 1. Check Local Storage on load
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        updateAssets('dark');
    }

    // 2. Toggle Button Click Event
    toggleBtn.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.removeAttribute('data-theme');
            localStorage.setItem('portfolio-theme', 'light');
            updateAssets('light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
            updateAssets('dark');
        }
    });

    // 3. The Function to Swap Images
    function updateAssets(theme) {
        // Swap Profile Picture
        if (profileImg) {
            profileImg.src = theme === 'dark' ? 'assets/homedark.png' : 'assets/homelight.png';
        }

        // Swap Hero Doodle
        if (heroDoodleImg) {
            heroDoodleImg.src = theme === 'dark' ? 'assets/doodledark.png' : 'assets/doodlelight.png';
        }

        // Swap Social Icons
        socialIcons.forEach(icon => {
            // Get the current source path
            let currentSrc = icon.getAttribute('src');

            if (theme === 'dark') {
                // Change 'socialslight' folder to 'socialsdark'
                if (currentSrc.includes('socialslight')) {
                    icon.src = currentSrc.replace('socialslight', 'socialsdark');
                }
            } else {
                // Change 'socialsdark' folder back to 'socialslight'
                if (currentSrc.includes('socialsdark')) {
                    icon.src = currentSrc.replace('socialsdark', 'socialslight');
                }
            }
        });

        // Swap About Page Hero Image
        const aboutHeroImg = document.getElementById('about-hero-img');
        if (aboutHeroImg) {
            if (theme === 'dark') {
                aboutHeroImg.src = 'assets/aboutdark.png';
            } else {
                aboutHeroImg.src = 'assets/aboutlight.png';
            }
        }

        // Swap Contact Page Doodle
        const contactDoodleImg = document.getElementById('contact-doodle-img');
        if (contactDoodleImg) {
            if (theme === 'dark') {
                contactDoodleImg.src = 'assets/doodledark.png';
            } else {
                contactDoodleImg.src = 'assets/doodlelight.png';
            }
        }

        // Swap Resume Hero Image
        const resumeHeroImg = document.getElementById('resume-hero-img');
        if (resumeHeroImg) {
            if (theme === 'dark') {
                resumeHeroImg.src = 'assets/resumedark.png';
            } else {
                resumeHeroImg.src = 'assets/resumelight.png';
            }
        }
    }
});