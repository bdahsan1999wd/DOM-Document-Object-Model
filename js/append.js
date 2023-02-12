// 1. where to add
const placesList = document.getElementById('places-list');
// console.log(placesList);

// 2. what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);

/* ------------------------------first way-------------------------------- */

// 1. where to ad------------->!!!
const mainContainer = document.getElementById('main-container');

// 2. what to be added-------->!!!
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
// add the child
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText ='biryani'
// add the child
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='borhani' 
// add the child
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad'
// add the child
ul.appendChild(li3);

// add the child----->!!!
section.appendChild(ul);

// 3. add the child----------->!!!
mainContainer.appendChild(section);

/* ------------------------------second way------------------------------ */


// 1. where to add
// const mainContainer = document.getElementById('main-container');

// 2. what to be added
const sectionDress = document.createElement('section');

// set innerHTML directly using backtick symbol ( ` ` )
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sando genji</li>
</ul>
`
// 3. add the child connection
mainContainer.appendChild(sectionDress);