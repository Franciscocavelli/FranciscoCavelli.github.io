//SCROLL ANIMADO//
let animado = document.querySelectorAll(".animado"),
    animado2 = document.querySelectorAll(".animado2"),
    animado3 = document.querySelectorAll(".animado3"),
    animado4 = document.querySelectorAll(".animado4");
    
    widthValue = $(window).width();
    

function showToScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(widthValue >= "1920"){
            if(alturaAnimado+300 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1680"){
            if(alturaAnimado+200 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1280"){
            if(alturaAnimado+100 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "870"){
            if(alturaAnimado+200 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }else if(widthValue < "870"){
            if(alturaAnimado+200 < scrollTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrarArriba');
            }
        }
    }
}

setTimeout(function showToScroll2(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado2.length; i++){
        let alturaAnimado = animado2[i].offsetTop;
        if(alturaAnimado-200 < scrollTop){
            animado2[i].style.opacity = 1;
            animado2[i].classList.add('mostrarArriba');
        }
    }
}, 3500);

function showToScroll3(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado3.length; i++){
        let alturaAnimado = animado3[i].offsetTop;
        if(widthValue >= "1920"){
            if(alturaAnimado+1200 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1680"){
            if(alturaAnimado+1100 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1280"){
            if(alturaAnimado+900 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1000"){
            if(alturaAnimado+1100 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "870"){
            if(alturaAnimado+1000 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "616"){
            if(alturaAnimado+1600 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }else if(widthValue < "616"){
            if(alturaAnimado+1600 < scrollTop){
                animado3[i].style.opacity = 1;
                animado3[i].classList.add('mostrarArriba');
            }
        }
    }
}

function showToScroll4(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado4.length; i++){
        let alturaAnimado = animado4[i].offsetTop;
        if(widthValue >= "1920"){
            if(alturaAnimado+2100 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1680"){
            if(alturaAnimado+1800 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1280"){
            if(alturaAnimado+1500 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "1000"){
            if(alturaAnimado+1900 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "870"){
            if(alturaAnimado+1800 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue >= "616"){
            if(alturaAnimado+2400 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }else if(widthValue < "616"){
            if(alturaAnimado+2400 < scrollTop){
                animado4[i].style.opacity = 1;
                animado4[i].classList.add('mostrarArriba');
            }
        }
    }
}

//**SCROLL ANIMADO**//
//LOADING PAGE//
window.addEventListener('scroll', showToScroll);
window.addEventListener('scroll', showToScroll3);
window.addEventListener('scroll', showToScroll4);

let gafas1 = document.getElementsByClassName('loadPageObjeto1')[0],
    gafas2 = document.getElementsByClassName('loadPageObjeto2')[0],
    gafasContenedor = document.getElementsByClassName('loadPageContenedor')[0],
    bodyhidden = document.getElementsByClassName('hidden')[0],
    loadpage = document.getElementsByClassName('loadPage')[0],
    ocultarRedes = document.getElementsByClassName('ocultarRedes')[0],
    ocultarEmail = document.getElementsByClassName('ocultarEmail')[0];

window.onload = setTimeout(function (){
    gafas1.style.opacity = 0;
    gafas2.style.opacity = 0;
    bodyhidden.classList.remove('hidden');
    loadpage.style.display = 'none';
    ocultarRedes.classList.remove('ocultarRedes');
    ocultarRedes.classList.add('redesSociales')
    ocultarEmail.classList.remove('ocultarEmail');
    ocultarEmail.classList.add('email');
}, 3000); 
//**LOADING PAGE**//

//IDIOMA//

let idiomaButtonSelector = document.getElementsByClassName('idiomaButtonSelector')[0],
    idiomaButton = document.getElementsByClassName('idiomaButton')[0],
    contadorDeClicksIdioma = 0;

function animacionmostrarIdioma() {
    if(contadorDeClicksIdioma == 0){
        idiomaButtonSelector.style.display = 'block';
        idiomaButtonSelector.style.opacity = 1;
        idiomaButtonSelector.classList.add('idiomaButtonSelectAnimacion');
        contadorDeClicksIdioma = 1;
    }else{
        idiomaButtonSelector.style.display = 'none';
        idiomaButtonSelector.style.opacity = 0;
        idiomaButtonSelector.classList.remove('idiomaButtonSelectAnimacion');
        contadorDeClicksIdioma = 0;
    }
}

idiomaButton.addEventListener('click', animacionmostrarIdioma, true)

let seleccionarIdiomaIngles = document.getElementsByClassName('seleccionarIdiomaIngles')[0];

function viajarAidiomaIngles(){
    if(!window.location.href.includes('indexIngles.html')){
        window.location.href = "indexIngles.html";
    }else if(window.location.href.includes('indexIngles.html')){
        window.location.href = "index.html";
    }
}
seleccionarIdiomaIngles.addEventListener('click', viajarAidiomaIngles, true);

//**IDIOMA**//

//IDIOMA RESPONSIVE//

let botonidiomaResponsiveOtro = document.getElementsByClassName('botonidiomaResponsiveOtro')[0],
    botonidiomaResponsive = document.getElementsByClassName('botonidiomaResponsive')[0],
    contadorClicksIdiomaResponsive = 0;

function clicksIdiomaResponsive() {
    if(contadorClicksIdiomaResponsive == 0){
        botonidiomaResponsiveOtro.classList.add('idiomaButtonSelectAnimacion');
        botonidiomaResponsiveOtro.style.display = 'block';
        contadorClicksIdiomaResponsive = 1;
    }else{
        botonidiomaResponsiveOtro.classList.remove('idiomaButtonSelectAnimacion');
        botonidiomaResponsiveOtro.style.display = 'none';
        contadorClicksIdiomaResponsive = 0;
    }
}

botonidiomaResponsive.addEventListener('click', clicksIdiomaResponsive, true);

//IDIOMA RESPONSIVE//

//RESPONSIVE BUTTON//

let fabars = document.getElementsByClassName('fa-bars')[0],
    navResponsive_Bloque = document.getElementsByClassName('navResponsive_Bloque')[0],
    bloquearExteriorResponsive = document.getElementsByClassName('bloquearExteriorResponsive')[0],
    contadorClicksResponsiveTotal = 0;

function clicksResponsiveTotal() {
    if(contadorClicksResponsiveTotal==0){
        navResponsive_Bloque.classList.add('idiomaButtonSelectAnimacion');
        navResponsive_Bloque.style.display="block";
        bloquearExteriorResponsive.classList.add('idiomaButtonSelectAnimacion');
        bloquearExteriorResponsive.style.display="block";
        contadorClicksResponsiveTotal = 1;
    }else {
        navResponsive_Bloque.classList.remove('idiomaButtonSelectAnimacion');
        navResponsive_Bloque.style.display="none";
        bloquearExteriorResponsive.classList.remove('idiomaButtonSelectAnimacion');
        bloquearExteriorResponsive.style.display="none";
        contadorClicksResponsiveTotal = 0;
    }
}

fabars.addEventListener('click', clicksResponsiveTotal, true);

//**RESPONSIVE BUTTON**//
