

// Variable Declarations
var aboutDiv = document.getElementById("aboutDiv")
var timeline = document.getElementById("timeline")
var myProjectsDiv = document.getElementById("myProjectsDiv")
var burger = document.getElementById("burger")
var navList = document.getElementById("navList")
var downloadStudentDatabase = document.getElementById("downloadStudentDatabase")
var downloadPayroll = document.getElementById("downloadPayroll")


function scrollToTimeline(){
    
    timeline.scrollIntoView({
        behavior: 'smooth', // Adds a smooth scrolling effect
        block: 'start' // Aligns the top of the div with the top of the viewport
    });

    setTimeout(() => {
        location.reload();
    }, 900); 
    
}
function scrollToAbout(){
    aboutDiv.scrollIntoView({
        behavior: 'smooth', // Adds a smooth scrolling effect
        block: 'start' // Aligns the top of the div with the top of the viewport
    });
}

function scrollToMyProjects(){
    myProjectsDiv.scrollIntoView()
}

function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function burgerMenu(){
    navList.classList.toggle('show')
}


const carousel = document.querySelector(".carousel3d");
const projects = document.querySelectorAll(".project");
const total = projects.length;

let angle = 360 / total; 
let current = 0;

// Position items in a circle with closer spacing
projects.forEach((item, i) => {
  let rotation = angle * i;
  item.style.transform = `rotateY(${rotation}deg) translateZ(250px)`; 
  // ↓ Decreased from 350px to 250px so items are closer
});

// Controls
document.getElementById("next").addEventListener("click", () => {
  current--;
  carousel.style.transform = `rotateY(${current * angle}deg)`;
});

document.getElementById("prev").addEventListener("click", () => {
  current++;
  carousel.style.transform = `rotateY(${current * angle}deg)`;
});
