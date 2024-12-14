function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");

    // Add an event listener to close the menu when clicking outside
    document.addEventListener("click", function closeMenu(event) {
        // Check if the click is outside the navLinks and toggle button
        if (!navLinks.contains(event.target) && event.target.id !== "hamburger") {
            navLinks.classList.remove("show");
            // Remove the event listener after closing the menu
            document.removeEventListener("click", closeMenu);
        }
    });
}


const galleryImages = [
    "images/cover3.jpg",
    "images/cover1.jpg",
    "images/cover2.jpg",
];

let currentImageIndex = 0;

document.getElementById("next-button").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById("gallery-image").src = galleryImages[currentImageIndex];
});
document.getElementById("enquiry-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !topic || !message) {
        alert("All fields are required!");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits!");
        return;
    }

    alert("Form submitted successfully!");
});
