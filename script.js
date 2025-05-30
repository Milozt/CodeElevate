document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents the default form submission
    alert("Thank you for reaching out! Your message has been sent.");
});
// Dynamic date (so you don't need to type it in all the time!)
document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("date");
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = `Published on ${today.toLocaleDateString('en-US', options)}`;
    }
});

// Back to Blog Button
function goBack() {
    window.location.href = "index.html#blog";
}
// Smooth fade-in animation
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");

    const dateElement = document.getElementById("date");
    if (dateElement) {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = `Published on ${today.toLocaleDateString('en-US', options)}`;
    }
});

// Back to Blog Button
function goBack() {
    window.location.href = "index.html#blog";
}
