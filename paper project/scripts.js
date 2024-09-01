// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 50, // Adjusting for the fixed header
            behavior: 'smooth'
        });
    });
});
function learnMore() {
    alert("Thanks for your interest! Please explore the rest of my portfolio.");
}
function contactMe() {
    alert("Thank you for reaching out! You can contact me at [asmatullahmalikasmatullah@gmail.com].");
}
function showProjectDetails(projectId) {
    var modal = document.getElementById("project-details-modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");

    if (projectId === 'project1') {
        modalTitle.innerText = "Project 1";
        modalDescription.innerText = "Detailed information about Project 1 goes here.";
    } else if (projectId === 'project2') {
        modalTitle.innerText = "Project 2";
        modalDescription.innerText = "Detailed information about Project 2 goes here.";
    } else if (projectId === 'project3') {
        modalTitle.innerText = "Project 3";
        modalDescription.innerText = "Detailed information about Project 3 goes here.";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("project-details-modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("project-details-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function showExperienceDetails(expId) {
    var modal = document.getElementById("experience-details-modal");
    var modalTitle = document.getElementById("modal-title");
    var modalDescription = document.getElementById("modal-description");

    if (expId === 'exp1') {
        modalTitle.innerText = "Job Title 1 - Detailed Experience";
        modalDescription.innerText = "Here is a more detailed description of what you did at Company 1.";
    } else if (expId === 'exp2') {
        modalTitle.innerText = "Job Title 2 - Detailed Experience";
        modalDescription.innerText = "Here is a more detailed description of what you did at Company 2.";
    } else if (expId === 'exp3') {
        modalTitle.innerText = "Job Title 3 - Detailed Experience";
        modalDescription.innerText = "Here is a more detailed description of what you did at Company 3.";
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("experience-details-modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("experience-details-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    var isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("name-error").innerText = "Please enter your name.";
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    // Email validation
    if (email === "") {
        document.getElementById("email-error").innerText = "Please enter your email.";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    // Message validation
    if (message === "") {
        document.getElementById("message-error").innerText = "Please enter your message.";
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("message-error").style.display = "none";
    }

    // If form is valid
    if (isValid) {
        document.getElementById("form-success").innerText = "Your message has been sent!";
        document.getElementById("form-success").style.display = "block";
    }

    return isValid;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Function to validate the newsletter form
function validateNewsletterForm() {
    var name = document.getElementById("newsletter-name").value.trim();
    var email = document.getElementById("newsletter-email").value.trim();
    var isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("newsletter-name-error").innerText = "Please enter your name.";
        document.getElementById("newsletter-name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("newsletter-name-error").style.display = "none";
    }

    // Email validation
    if (email === "") {
        document.getElementById("newsletter-email-error").innerText = "Please enter your email.";
        document.getElementById("newsletter-email-error").style.display = "block";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("newsletter-email-error").innerText = "Please enter a valid email address.";
        document.getElementById("newsletter-email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("newsletter-email-error").style.display = "none";
    }

    if (isValid) {
        // Here you can handle form submission, e.g., sending data to a server.
        // For this example, we'll just show a success message.
        document.getElementById("newsletter-success").innerText = "Thank you for subscribing!";
        document.getElementById("newsletter-success").style.display = "block";

        // Optionally, clear the form
        document.getElementById("newsletter-form").reset();
    }

    return false; // Prevent actual form submission for this example
}

// Helper function to validate email format
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to set the current year dynamically
function setCurrentYear() {
    var yearSpan = document.getElementById("current-year");
    var currentYear = new Date().getFullYear();
    yearSpan.innerText = currentYear;
}

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call setCurrentYear on page load
document.addEventListener("DOMContentLoaded", function() {
    setCurrentYear();
});
// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const modeText = document.getElementById('mode-text');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeText.textContent = 'Dark Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeText.textContent = 'Light Mode';
    }
});

// Initialize the theme based on previous selection
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        themeToggle.checked = true;
        body.classList.add('dark-mode');
        modeText.textContent = 'Dark Mode';
    } else {
        themeToggle.checked = false;
        body.classList.add('light-mode');
        modeText.textContent = 'Light Mode';
    }
});

themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});
