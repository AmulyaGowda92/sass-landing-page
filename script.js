const navbar_toggler = document.querySelector('.navbar__top--toggler');
const navbar__collapse = document.querySelector('.navbar__collapse')
navbar_toggler.addEventListener('click',()=>{
    navbar_toggler.classList.toggle('change');
    navbar__collapse.classList.toggle('show__nav');
})