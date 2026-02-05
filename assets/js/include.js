function loadComponent(id, file){
    fetch(file)
        .then(res => res.text())
        .then(data => document.getElementById(id).innerHTML =data);
}


//layout components
loadComponent("header", "modules/header.html");
loadComponent("navbar", "modules/navbar.html");
loadComponent("footer", "modules/footer.html");

// page sections
loadComponent("projects", "modules/projects.html");
loadComponent("about-me", "modules/abouts.html");
loadComponent("certificates", "modules/certificate.html");
loadComponent("contact-me", "modules/contact.html");


// Wait until modules are loaded
document.addEventListener("click", function(e) {
    if (e.target && e.target.id === "menu-toggle") {
        document.getElementById("nav-menu").classList.toggle("active");
    }
});


// interactivity of abouts tabs
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("tab")) {
        // Remove active from all tabs
        document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
        e.target.classList.add("active");

        // Hide all contents
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

        // Show selected
        const id = e.target.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
    }
});

