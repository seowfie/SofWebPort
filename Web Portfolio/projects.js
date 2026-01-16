/* --- projects.js --- */

// 1. DATA: Store project details here
const projectData = {
    floravia: {
        title: "Floravia: Flower Shop System",
        tags: ["Web Design", "MongoDB", "Vue.js"],
        img: "assets/projects/floravia.png",
        desc: "A comprehensive e-commerce solution for a local flower shop. Included features for inventory management, order tracking, and a customer-facing storefront.",
        link: "https://github.com/seowfie" // Replace with specific link if you have one
    },
    app: {
        title: "Productivity Mobile App",
        tags: ["Mobile", "Flutter"],
        img: "assets/projects/productivityapp.png", 
        desc: "A cross-platform mobile application designed to help students manage their tasks using the Pomodoro technique.",
        link: "https://github.com/seowfie"
    },
    portfolio: {
        title: "My Portfolio Website",
        tags: ["Web Design", "HTML/CSS"],
        img: "assets/projects/portfolio.png",
        desc: "The website you are looking at right now! Built with vanilla HTML, CSS, and JS to demonstrate core web development skills.",
        link: "https://github.com/seowfie"
    },
    pokemon: {
        title: "Pokemon Center Web",
        tags: ["Angular", "Tailwind"],
        img: "assets/projects/pokemon.png",
        desc: "A fun project fetching data from the PokeAPI to display Pokemon stats in a retro-game style interface.",
        link: "https://github.com/seowfie"
    },
    ai: {
        title: "AI Conference Landing Page",
        tags: ["UI/UX", "Web Design"],
        img: "assets/projects/aiconference.png",
        desc: "A high-conversion landing page for a tech conference, focusing on clear typography and easy registration flow.",
        link: "https://github.com/seowfie"
    }
};

// 2. SEARCH & FILTER LOGIC
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('project-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    // Filter Function
    function filterProjects(category, searchTerm) {
        projects.forEach(project => {
            const projectCategory = project.getAttribute('data-category');
            // Check if element exists before getting innerText to prevent errors
            const titleEl = project.querySelector('h3');
            const projectTitle = titleEl ? titleEl.innerText.toLowerCase() : '';
            const term = searchTerm.toLowerCase();

            // Check Category Match
            const categoryMatch = category === 'all' || (projectCategory && projectCategory.includes(category));
            
            // Check Search Match
            const searchMatch = projectTitle.includes(term);

            if (categoryMatch && searchMatch) {
                project.style.display = 'flex';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Event Listener: Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');
            
            const currentCategory = btn.getAttribute('data-filter');
            filterProjects(currentCategory, searchInput ? searchInput.value : '');
        });
    });

    // Event Listener: Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const currentCategory = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
            filterProjects(currentCategory, e.target.value);
        });
    }
});

// 3. MODAL LOGIC
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

function openModal(projectId) {
    const data = projectData[projectId];
    if(!data) return;

    // Check theme for colors
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    const titleColor = isDark ? '#C3F208' : '#775635';
    // For button text: In dark mode (lime bg), text is dark. In light mode (brown bg), text is white.
    const btnTextColor = isDark ? '#161B22' : '#ffffff'; 

    // Build Modal Content dynamically
    modalBody.innerHTML = `
        <h2 style="font-size:2rem; margin-bottom:10px; color:${titleColor}">${data.title}</h2>
        <p style="opacity:0.7; margin-bottom:20px;">${data.tags.join(' • ')}</p>
        ${data.img ? `<img src="${data.img}" style="width:100%; border-radius:20px; margin-bottom:20px; object-fit:cover;">` : ''}
        <p style="line-height:1.6; font-size:1.1rem;">${data.desc}</p>
        <br>
        <button class="btn btn-primary" 
            style="border:none; color:${btnTextColor}; cursor:pointer;" 
            onclick="window.open('${data.link}', '_blank')">
            See Live Project
        </button>
    `;
    
    modal.style.display = 'flex';
}

// Close Modal Logic
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}