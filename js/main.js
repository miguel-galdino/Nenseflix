
// CAROUSEL

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1300:{
            items:5
        }
    }
})



// FIXED TOP BAR -- mudando a cor e a opacidade quando o usuário scrolla a tela

const navbar = document.querySelector('.nav-fixed');

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


