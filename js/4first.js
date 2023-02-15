console.log('first file')

const allLi = document.getElementsByTagName('li');
// console.log(allLi);

const allTitles = document.getElementsByClassName('section-title');
// console.log(allTitles);

const secondSection = document.getElementById('second-section');
// console.log(secondSection);

/* -------------------------style in js------------------------- */

secondSection.style.color ='white';
secondSection.style.backgroundColor = 'tomato';

/* ------------------------------------------------- */

// document.querySelectorAll     gives node list  -----> !!!

// document.querySelector       gives first matching  -----> !!!