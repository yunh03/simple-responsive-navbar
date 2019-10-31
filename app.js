const navSlide = () => {
    const burger = document.querySelector('.y_burger');
    const nav = document.querySelector('.y_nav_links');
    const navLinks = document.querySelectorAll('.y_nav_links li');

    burger.addEventListener('click',() => { 

        nav.classList.toggle('y_nav_active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();