// MODO ESCURO/CLARO

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', () =>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})



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
    duration: 1000,
    distance: '90px'
})

// ESPECIALIDADES

revelar.reveal('.efeito-especialidade1', 
{
    duration: 1000,
    distance: '90px',
    delay: 500
})
revelar.reveal('.efeito-especialidade2', 
{
    duration: 1000,
    distance: '90px',
    delay: 1000
})
revelar.reveal('.efeito-especialidade3', 
{
    duration: 1000,
    distance: '90px',
    delay: 1500
})

// SOBRE

revelar.reveal('.efeito-img-sobre', 
{
    duration: 3000,
    distance: '50px',
    delay: 500,
    origin: 'left'
})
revelar.reveal('.efeito-txt-sobre', 
{
    duration: 4000,
    distance: '50px',
    delay: 800,
    origin: 'right'
})

// PORTFOLIO

revelar.reveal('.efeito-img-port1', 
{
    duration: 1000,
    distance: '90px',
    delay: 500
})
revelar.reveal('.efeito-img-port2', 
{
    duration: 1000,
    distance: '90px',
    delay: 1000
})
revelar.reveal('.efeito-img-port3', 
{
    duration: 1000,
    distance: '90px',
    delay: 1500
})
revelar.reveal('.efeito-img-port4', 
{
    duration: 1000,
    distance: '90px',
    delay: 2000
})

// FORMULARIO

revelar.reveal('.efeito-input1', 
{
    duration: 1000,
    distance: '90px',
    delay: 500
})
revelar.reveal('.efeito-input2', 
{
    duration: 500,
    distance: '90px',
    delay: 900
})
revelar.reveal('.efeito-input3', 
{
    duration: 500,
    distance: '90px',
    delay: 1300
})
revelar.reveal('.efeito-input4', 
{
    duration: 500,
    distance: '90px',
    delay: 1700
})
revelar.reveal('.efeito-input5', 
{
    duration: 500,
    distance: '90px',
    delay: 2100
})

