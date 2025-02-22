document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const sections = document.querySelectorAll(".content-section");
    const form = document.querySelector("#register form");


    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sections.forEach(section => section.classList.add("hidden"));
            const targetSection = document.getElementById(this.getAttribute("data-target"));
            if (targetSection) {
                targetSection.classList.remove("hidden");
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        alert(`Thank you, ${name}! Your blood donation registration has been submitted.`);
        form.reset();
    });
});