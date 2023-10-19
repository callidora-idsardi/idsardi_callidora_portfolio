console.log('js is wired!');

let projectLink = document.querySelectorAll('.project-link'),
    infoDiv = document.querySelector('#project-con');

// images are filler for now 

let projects = {
    squeezit: {
        Type: 'HTML, CSS, JS, UX/UI, Brand Identity',
        Image: 'img/project1.jpg',
        Name: 'Squeezit',
        Info: 'Developed a website & whole new brand refresh for SQUEEZIT, a squeezable juice company made by General Mills and originally marketed in 1985.',
    },

    relaxify: {
        Type: 'HTML, CSS, JS',
        Image: 'img/project1.jpg',
        Name: 'Relaxify',
        Info: 'Developed a website & whole new brand refresh for SQUEEZIT, a squeezable juice company made by General Mills and originally marketed in 1985. ',
    },

    clearbuds: {
        Type: 'HTML, CSS, JS, UX/UI, Brand Identity',
        Image: 'img/project1.jpg',
        Name: 'Crystal Clear Buds',
        Info: 'Developed a website & whole new brand refresh for SQUEEZIT, a squeezable juice company made by General Mills and originally marketed in 1985. ',
    },

    wormcafe: {
        Type: 'HTML, CSS, UX/UI, Brand Identity',
        Image: 'img/project1.jpg',
        Name: 'Book Worm Cafe',
        Info: 'Developed a website & whole new brand refresh for SQUEEZIT, a squeezable juice company made by General Mills and originally marketed in 1985. ',
    },
};

// functions go here
function listInfo() {
    // empty out the list
    infoDiv.innerHTML = "";

    // name of project
    let header = document.createElement('h2');
    header.textContent = projects[this.dataset.team]['Name'];
    infoDiv.appendChild(header);

    // portfolio projects
    let image = document.createElement('img');
    image.src = projects[this.dataset.team]['Image'];
    infoDiv.appendChild(image);

    // project information
    let info = document.createElement('p');
    bio.textContent = projects[this.dataset.team]['Info'];
    infoDiv.appendChild(info);

    // link to github repos
    let link = document.createElement('a');
    link.href = projects[this.dataset.team]['Link'];
    link.textContent = 'Github';
    infoDiv.appendChild(link);

}



// add event handling here
projectLink.forEach(projectButton => projectButton.addEventListener('click', listInfo)),



    // HAMBURGER MENU

    (function () {
        "use strict";
        console.log("fired");

        let button = document.querySelector("#button");
        let burgerCon = document.querySelector("#burger-con");

        function hamburgerMenu() {
            burgerCon.classList.toggle("slide-toggle");
            button.classList.toggle("expanded");
        };

        // let hamburgerMenu = () => {
        // 	burgerCon.classList.toggle("slide-toggle");
        // 	button.classList.toggle("expanded");
        // };

        button.addEventListener("click", hamburgerMenu, false);
    })();

//Can also be written like this:
//(() => {  })();

// Info about IIFE https://flaviocopes.com/javascript-iife/