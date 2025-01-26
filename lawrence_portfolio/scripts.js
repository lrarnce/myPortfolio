

// Variable Declarations
var aboutDiv = document.getElementById("aboutDiv")
var myProjectsDiv = document.getElementById("myProjectsDiv")
var burger = document.getElementById("burger")
var navList = document.getElementById("navList")



function scrollToAbout(){
    aboutDiv.scrollIntoView()
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