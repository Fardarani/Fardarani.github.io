document.addEventListener("DOMContentLoaded", function () {


    // =========================
    // Load Navbar
    // =========================

    const navbarContainer = document.querySelector("#navbar");


    if (navbarContainer && window.navbar) {

        navbarContainer.innerHTML = window.navbar;

    }



    // =========================
    // Load Footer
    // =========================

    const footerContainer = document.querySelector("#footer");


    if (footerContainer && window.footer) {

        footerContainer.innerHTML = window.footer;

    }



});



// =========================
// Copy BibTeX
// =========================

document.addEventListener("click", function(event) {


    if (event.target.classList.contains("copy-bibtex")) {


        const button = event.target;


        const bibtex =
            button.nextElementSibling.innerText;



        navigator.clipboard.writeText(bibtex)

        .then(() => {


            button.innerText = "Copied!";


            setTimeout(() => {

                button.innerText = "Copy BibTeX";

            }, 2000);


        })

        .catch(error => {

            console.error(
                "Copy failed:",
                error
            );

        });


    }


});