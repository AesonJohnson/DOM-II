const navLinkHover = document.querySelectorAll('.nav-link');
navLinkHover.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "red";
    })
})