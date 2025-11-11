document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage) {
            link.classList.add('current');
        }
        
        
        if (linkHref.startsWith('http')) {
            link.setAttribute('target', '_blank');
        }
    });
    
    console.log('Навигация загружена! Текущая страница:', currentPage);
});