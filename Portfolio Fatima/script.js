
function toggleText() {
    const mainText = document.querySelector('.main-text');
    const hoverText = document.querySelector('.hover-text');
    mainText.style.display = mainText.style.display === 'none' ? 'block' : 'none';
    hoverText.style.display = hoverText.style.display === 'none' ? 'block' : 'none';
}


window.onload = function() {
    document.getElementById('loader').style.display = 'none';
};


function toggleText() {
    const mainText = document.querySelector('.main-text');
    const hoverText = document.querySelector('.hover-text');
    mainText.style.display = mainText.style.display === 'none' ? 'block' : 'none';
    hoverText.style.display = hoverText.style.display === 'none' ? 'block' : 'none';
}

window.onload = function() {
    document.getElementById('loader').style.display = 'none';
};


const projects = [
    {
        image: "littlesprout1.png",
        description: "Project 1: Little Sprout - An online shopping store for baby products, mainly necessities.",
        link: "../Little Sprout/homepage.html"
    },
    {
        image: "Screenshot 2024-07-27 170102.png",
        description: "Baby Life - Using mainly JavaScript, I created a game which simulates life summarized.",
        link: "../Baby Life/index.html"
    },
    {
        image: "PythonQuiz.png",
        description: "Python-based quiz - where you can select from JS, HTML, CSS, and Python with different difficulty levels.",
        link: "../Quizzes/Quiz.py"
    },
    {
        image: "JUSTIT.png",
        description: "JUSTIT Bootcamp quiz, which I made for one of my tasks, involving a large amount of HTML and CSS for design.",
        link: "../Bootcamp Form/indices.html" 
    }
];
let currentProjectIndex = 0;

function updateProjectDisplay() {
    const projectImage = document.getElementById('project-image');
    const projectDescription = document.getElementById('project-description');
    const projectLink = document.getElementById('project-link');
    
    projectImage.src = projects[currentProjectIndex].image;
    projectDescription.textContent = projects[currentProjectIndex].description;
    projectLink.href = projects[currentProjectIndex].link;
}

function previousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProjectDisplay();
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProjectDisplay();
}


document.getElementById('menu-toggle').addEventListener('click', function() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


updateProjectDisplay();
