console.log('third file');

// 1. where to add
const main = document.getElementById('main-container');
// 2. what to be added
const section = document.createElement('section');
// set innerHTML directly using backtick symbol ( ` ` )
section.innerHTML = `
    <h1> My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
// 3. connection
main.appendChild(section);