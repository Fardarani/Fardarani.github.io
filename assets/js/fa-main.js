document.addEventListener("DOMContentLoaded", function () {

    const darkModeToggle =
        document.querySelector(".dark-mode-toggle");

    if (!darkModeToggle) {
        return;
    }

    darkModeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

});