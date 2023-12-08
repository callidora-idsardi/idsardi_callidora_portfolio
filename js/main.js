
(() => {
    console.log("IIFE Fired");



// Hamburger Menu Start
console.log('js is wired!');

    (function () {
    let burgerButton = document.getElementById('burger-button');
    let burgerCon = document.getElementById('burger-con');
    let burgerBg = document.getElementById('burger-bg');

    function hamburgerMenu() {
        burgerButton.classList.toggle('transform'); //transforms button on click 
        burgerCon.classList.toggle('transform');    //transforms button information on click 
        burgerBg.classList.toggle('transform-bg'); //transforms button container background on click 
    }

    burgerButton.addEventListener('click', hamburgerMenu);
})();


})();