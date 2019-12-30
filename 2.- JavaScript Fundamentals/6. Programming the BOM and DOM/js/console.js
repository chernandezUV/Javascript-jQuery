// THE WINDOW OBJECT
console.log('---- THE WINDOW OBJECT  ----');
year = 1996;
console.log(window.year);

// TIMERS
console.log('---- TIMERS  ----');
let interval = setInterval(function(){
    console.log('1 second passed');
},1000);
clearInterval(interval);

// LOCATION
console.log('---- LOCATION  ----');
console.log(location.href);

//SELECTING DOM ELEMENTS
console.log('-- SELECTING DOM ELEMENTS --');
document.getElementById('nombre')
document.getElementsByClassName('nombre')
document.getElementsByTagName('nombre')

//MODIFYING DOM ELEMENTS
console.log('-- MODIFYING DOM ELEMENTS --');
// let element = document.getElementById('elementId');
// element.textContent('');
// element.setAttribute('');
// element.classList.add('');
// element.style.color='blue';