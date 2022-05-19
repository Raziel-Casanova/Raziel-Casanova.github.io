import tecnologias from './tech.js';
import portafolio from './portfolio.js';
import acerca from './about.js';
import menu from './menu.js';

const modal = document.querySelector('.modal'),
    $textModal = document.querySelector('.text-modal'),
    $imgModal = document.querySelector('.images-modal'),
    $btn_menu = document.querySelector('.burger-menu'),
    $header = document.querySelector('.header');
document.addEventListener('DOMContentLoaded',(evt)=>{
    tecnologias();
    portafolio(modal, $textModal, $imgModal);
    acerca(modal, $textModal, $imgModal);
    menu($btn_menu, $header);
});
