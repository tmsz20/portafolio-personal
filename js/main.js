/************************************
 * LOGICA DEL PORTFOLIO
 * 
 * Este archivo se encarga de:
 * 1. Renderizar los proyectos en la pagina
 * 2. Manejar el menu mobile
 * 3. Smooth scroll para los links
 ************************************/

// ==========================================
// 1. RENDERIZAR PROYECTOS
// ==========================================

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    
    // Si no hay proyectos, mostrar mensaje
    if (!projects || projects.length === 0) {
        container.innerHTML = '<p class="projects__empty">Todavia no hay proyectos cargados.</p>';
        return;
    }

    // Generar HTML para cada proyecto
    const projectsHTML = projects.map(project => {
        // Crear tags de tecnologias
        const techTags = project.technologies
            .map(tech => `<span class="project__tag">${tech}</span>`)
            .join('');

        return `
            <article class="project__card">
                <div class="project__header">
                    <h3 class="project__title">${project.title}</h3>
                </div>
                <p class="project__description">${project.description}</p>
                <div class="project__technologies">
                    ${techTags}
                </div>
                <div class="project__links">
                    <a href="${project.demoLink}" 
                       class="project__link project__link--primary" 
                       target="_blank" 
                       rel="noopener"
                       ${project.demoLink === '#' ? 'onclick="event.preventDefault(); alert(\'Demo proximamente\')"' : ''}>
                        Ver Demo
                    </a>
                    <a href="${project.repoLink}" 
                       class="project__link project__link--secondary"
                       target="_blank" 
                       rel="noopener"
                       ${project.repoLink === '#' ? 'onclick="event.preventDefault(); alert(\'Repositorio proximamente\')"' : ''}>
                        Codigo
                    </a>
                </div>
            </article>
        `;
    }).join('');

    container.innerHTML = projectsHTML;
}

// ==========================================
// 2. MENU MOBILE
// ==========================================

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav__menu--open');
        navToggle.classList.toggle('nav__toggle--active');
    });

    // Cerrar menu al hacer click en un link
    navMenu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav__menu--open');
            navToggle.classList.remove('nav__toggle--active');
        });
    });
}

// ==========================================
// 3. SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ==========================================
// INICIALIZACION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initMobileMenu();
    initSmoothScroll();
    
    console.log('Portfolio cargado correctamente');
});
