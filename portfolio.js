function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var offset = section.offsetTop;

    window.scrollTo({
        top: offset,
        behavior: "smooth" // Smooth scrolling
    });

    // Close the side menu if open
    closemenu();
}
