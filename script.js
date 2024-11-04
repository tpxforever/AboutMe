document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("aboutme-button").addEventListener("click", function() {
        const aboutMeSection = document.getElementById("aboutme-section");
        aboutMeSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
    document.getElementById("projects-button").addEventListener("click", function(){
        const projectsSection = document.getElementById("projects-section");

        projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


    });
});
