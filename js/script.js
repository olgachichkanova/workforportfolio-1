'use strict'

const cards = document.querySelectorAll('.customers__review-card');
const buttons = document.querySelectorAll('.slider-button');

function activate(item) {
    item.classList.add('customers__review-card_active');
};

function deactivate(item) {
    item.classList.remove('customers__review-card_active');
};

buttons.forEach((button, i) => {
    button.onclick = function() {
        cards.forEach(card => {
            deactivate(card);
        });
        activate(cards[i]);
    };
});

//Burger navigation

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.menu__list');
const navLink = document.querySelectorAll('.menu__link');

const navSlide = () => {  
  //Toggle Nav
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('menu__list_active');
    
  //Animate Links
  navLink.forEach((link, index) => {
    //link animation with a delay
    if(link.style.animation) {
      link.style.animation = ''
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1}s`;
      }
  });
    
    //Burger Animation
    burger.classList.toggle('toggle');
  });
  
}

navSlide();