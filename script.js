const wrapper = document.querySelector('.wrap');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login-btn');
const closeIcon = document.querySelector('.close-icon');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

closeIcon.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});