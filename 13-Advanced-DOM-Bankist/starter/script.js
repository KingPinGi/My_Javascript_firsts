'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button ...
btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, 
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({behaviour : 'smooth'});
});

//Page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behaviour: 'smooth'});
//   });
// });

//1.Add eventlistener to common parent elemnt
//2. Determine what element orignated the wevnt

document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();

  //Mathching staradegy
  if (e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behaviour: 'smooth'});
  }
});


tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard Clause
  if(!clicked) return;


  //remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  //active tab
  clicked.classList.add('operations__tab--active');

  console.log(clicked.dataset.tab);
  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//Menu fade animation

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout ', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
////////////////////////////////////////
////////////////////////
/////////////////////////////////////\

/*
//Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .insertAdjacentHTML 
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button></button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.parentElement.removeChild(message);
  message.remove(); 
})

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.getAttribute('href'));
console.log(link.href);

//Data Attribute
console.log(logo.dataset.versionNumber);

//classes  
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//dont use
logo.className = 'Jonas';
*/
// const h1 = document.querySelector('h1');

// const alertH1 = function(e){
//   alert('addEventhandler: Great! You are reading the heading :D');

//   h1.removeEventListener('mouseenter', alertH1);
// }
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// h1.onmouseenter = function(e){
//   alert("onmouseenter: addEventListener:Great! YOu are reading the header");
// };
//we can remove eventHandler incase we dont need it anymore

/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => 
`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  //stop Progation
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}, true);

const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

//Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gardient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

//  Going sideways : Siblings
//elements way
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el != h1) el.style.transform = 'scale(0.5)';
});

*/

//Tabbed component

