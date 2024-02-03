
// MENU MOBILE

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

// REVEAL

window.revelar = ScrollReveal({reset:true})

// TOPO DO SITE

revelar.reveal('.efeito-txt-topo', 
{
    duration: 2000,
    distance: '90px'
})

revelar.reveal('.efeito-img-topo', 
{
    duration: 2000,
    distance: '90px',
    delay: 500
})

// TITULOS DAS SEÇÕES

revelar.reveal('.titulo', 
{
    duration: 2000,
    distance: '90px'
})

// ESPECIALIDADES

revelar.reveal('.efeito-especialidade1', 
{
    duration: 2000,
    distance: '90px',
    delay: 500
})
revelar.reveal('.efeito-especialidade2', 
{
    duration: 2000,
    distance: '90px',
    delay: 1000
})
revelar.reveal('.efeito-especialidade3', 
{
    duration: 2000,
    distance: '90px',
    delay: 1500
})


