// mouseover
const navLink = document.querySelectorAll('.nav-link');

navLink[0].addEventListener('mouseover', function(){
    navLink[0].style.color = 'red';})
navLink[1].addEventListener('mouseover', function(){
    navLink[1].style.color = 'orange';})
navLink[2].addEventListener('mouseover', function(){
    navLink[2].style.color = 'gold';})
navLink[3].addEventListener('mouseover', function(){
    navLink[3].style.color = 'yellow';})

// click
const heading = document.querySelector('.logo-heading');

heading.addEventListener('click', function(){
    heading.textContent = "New Title!";
})




// const headerRotate = document.querySelector('.logo-heading');

// headerRotate.addEventListener('click', function(){
//     headerRotate.style.transform = 'rotateX(180)';
//     headerRotate.style.transform = 'all 0.5s';
// })
