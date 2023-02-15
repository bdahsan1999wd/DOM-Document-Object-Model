console.log('second file');

// 1. where to add
const secondList = document.getElementById('second-list');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'My dynamic item'
// 3. add the child connection
secondList.appendChild(li);