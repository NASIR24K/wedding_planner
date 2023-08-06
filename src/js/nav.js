// JavaScript code to handle the visitor icon click
document.getElementById("visitorIcon").addEventListener("click", function() {
    alert("Welcome, visitor! Thank you for visiting Downs Wedding-Planner!");
});

// Add smooth scrolling behavior for navigation links
const navLinks = document.querySelectorAll("#mainNav a");

for (const link of navLinks) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
}
