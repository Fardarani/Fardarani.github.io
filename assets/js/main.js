document.addEventListener("DOMContentLoaded", function () {


    // =========================
    // Load Navbar
    // =========================

    const navbarContainer =
        document.querySelector("#navbar");


    if (navbarContainer && window.navbar) {

        navbarContainer.innerHTML =
            window.navbar;

    }


    // =========================
    // Load Footer
    // =========================

    const footerContainer =
        document.querySelector("#footer");


    if (footerContainer && window.footer) {

        footerContainer.innerHTML =
            window.footer;

    }


    // =========================
    // Mobile Navigation
    // =========================

    const menuButton =
        document.querySelector(".mobile-menu-toggle");


    const navMenu =
        document.querySelector(".nav-menu");


    if (menuButton && navMenu) {


        menuButton.addEventListener("click", function () {


            navMenu.classList.toggle(
                "mobile-menu-open"
            );


            const isOpen =
                navMenu.classList.contains(
                    "mobile-menu-open"
                );


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


        });


        // Close menu after selecting a link

        navMenu.querySelectorAll("a").forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function () {


                        navMenu.classList.remove(
                            "mobile-menu-open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                    }
                );


            }
        );


    }


    // =========================
    // Dark Mode
    // =========================

    const darkModeToggle =
        document.querySelector(".dark-mode-toggle");


    if (darkModeToggle) {


        darkModeToggle.addEventListener(
            "click",
            function () {


                document.body.classList.toggle(
                    "dark-mode"
                );


            }
        );


    }

});


// =========================
// Copy BibTeX
// =========================

document.addEventListener(
    "click",
    function (event) {


        if (
            event.target.classList.contains(
                "copy-bibtex"
            )
        ) {


            const button =
                event.target;


            const bibtex =
                button.nextElementSibling.innerText;


            navigator.clipboard
                .writeText(bibtex)
                .then(function () {


                    button.innerText =
                        "Copied!";


                    setTimeout(
                        function () {


                            button.innerText =
                                "Copy BibTeX";


                        },
                        2000
                    );


                })
                .catch(function (error) {


                    console.error(
                        "Copy failed:",
                        error
                    );


                });


        }


    }
);