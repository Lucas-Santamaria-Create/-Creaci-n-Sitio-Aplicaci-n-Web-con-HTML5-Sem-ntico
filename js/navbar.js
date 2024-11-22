window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    const body = document.body;

    if (window.scrollY > 400) { // Ajusta el umbral si es necesario
        navbar.classList.add('fixed-top');
        body.style.paddingTop = `${navbar.offsetHeight}px`; // Compensa la altura del navbar
    } else {
        navbar.classList.remove('fixed-top');
        body.style.paddingTop = '0'; // Elimina el padding
    }
});
