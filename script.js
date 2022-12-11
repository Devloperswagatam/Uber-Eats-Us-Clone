function changeBg(){
    // let navbar = document.getElementById('navbar');
    let navbar = document.querySelector('.transparent');
    let scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('white');
        navbar.style.borderBottom = 'none';
    }else{
        navbar.classList.add('white');
        navbar.style.borderBottom = '1px solid lightgrey';
    }
}
window.addEventListener('scroll', changeBg);

// END OF NAVBAR BACKGROUND COLOR

function viewAdress(){
    let address = document.querySelector('.address');
    let scrollValue = window.scrollY;
    if(scrollValue < 400){
        address.style.display = 'none';
    }else{
        address.style.display = 'block';
    }
}
window.addEventListener('scroll', viewAdress);

// SIDE BAR OPEN AND CLOSE AND PREVENT SCROLL WHEN SIDEBAR OPENS
const menuBtn = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');
const boxShadow = document.querySelector('.box-shadow');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    sidebar.style.left = '0';
    boxShadow.style.display = 'block';
    body.style.overflow = 'hidden';
})

boxShadow.addEventListener('click', ()=> {
    sidebar.style.left = '-300px';
    boxShadow.style.display = 'none';
    body.style.overflow = 'scroll';
})



