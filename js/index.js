// mousedown
const navLink = document.querySelectorAll('.nav-link');

navLink[0].addEventListener('mousedown', function(){
    navLink[0].style.color = 'red';
})
navLink[1].addEventListener('mousedown', function(){
    navLink[1].style.color = 'orange';
})
navLink[2].addEventListener('mousedown', function(){
    navLink[2].style.color = 'gold';
})
navLink[3].addEventListener('mousedown', function(){
    navLink[3].style.color = 'yellow';
})

// click
const heading = document.querySelector('.logo-heading');

heading.addEventListener('click', function(){
    heading.textContent = "New Title!";
})

// mouseover
const headingDown = document.querySelector('.logo-heading');

headingDown.addEventListener('mouseover', function(){
    headingDown.style.color = 'blue';
})

// dblclick
const button = document.querySelector('.btn');

button.addEventListener('dblclick', function(){
    button.style.color = 'black';
})

// keydown
const text = document.querySelector('html');

text.addEventListener('keydown', function(){
    text.style.color = 'slategrey';
})

// wheel
const wheelText = document.querySelector('.inverse-content');

wheelText.addEventListener('wheel', function(){
    wheelText.style.color = 'lightblue';
})