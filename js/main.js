
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

/** Mudança de cor da navbar quando o usuário ainda está no topo da página **/
const navbarToggler = document.querySelector('.navbar-toggler')

navbarToggler.addEventListener('click', ()=>{
   navbar.classList.toggle('change')
})

/** Colapso da navbar quando o usuário clica em algum link **/

const navLink = document.querySelectorAll('.nav-link')
const collapsableMenu = document.querySelector('.navbar-collapse')

navLink.forEach(a =>{
    a.addEventListener('click', ()=>{
        collapsableMenu.classList.remove('show')
        navbar.classList.remove('change')
        

    })
})
   




 