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
