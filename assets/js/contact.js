document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill all fields!");
            return;
        }

        // Fake success (frontend only)
        alert("Message sent successfully! 🚀");

        // Clear form
        form.reset();
    });
});
