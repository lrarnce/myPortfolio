

// Variable Declarations
var aboutDiv = document.getElementById("aboutDiv")
var myProjectsDiv = document.getElementById("myProjectsDiv")
var burger = document.getElementById("burger")
var navList = document.getElementById("navList")
var downloadStudentDatabase = document.getElementById("downloadStudentDatabase")
var downloadPayroll = document.getElementById("downloadPayroll")




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

// Event listener for downloading a file
if (downloadStudentDatabase) {
    downloadStudentDatabase.addEventListener("click", function () {
        // Assuming a file URL to download
        const fileURL = './assets/downloadables/db.docx'; // Replace with your actual file path
        const anchor = document.createElement('a');
        anchor.href = fileURL;
        anchor.download = 'student-database.docx'; // File name for the downloaded file
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
}

// Event listener for downloading a file
if (downloadPayroll) {
    downloadPayroll.addEventListener("click", function () {
        // Assuming a file URL to download
        const fileURL = './assets/downloadables/pr.docx'; // Replace with your actual file path
        const anchor = document.createElement('a');
        anchor.href = fileURL;
        anchor.download = 'payroll-management-system.docx'; // File name for the downloaded file
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
}