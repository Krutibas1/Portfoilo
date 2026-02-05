document.addEventListener("submit", function (e) {
    if (e.target.matches(".contact-form")) {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields!");
            return;
        }

        alert("Message sent successfully! 🚀");
        form.reset();
    }
});
