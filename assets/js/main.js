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
// Mobile Menu + Dropdown (Research / Teaching)
// =========================

document.addEventListener("click", function (event) {

    const toggleButton = event.target.closest(".mobile-menu-toggle");
    const submenuToggle = event.target.closest(".submenu-toggle");

    // Hamburger toggle
    if (toggleButton) {

        const navMenu = document.querySelector(".nav-menu");

        if (!navMenu) {
            return;
        }

        const isOpen = navMenu.classList.toggle("mobile-menu-open");

        toggleButton.setAttribute("aria-expanded", isOpen);

        if (!isOpen) {

            document.querySelectorAll(".nav-item.submenu-open").forEach(function (item) {
                item.classList.remove("submenu-open");
            });

        }

        return;

    }

    // Research / Teaching submenu toggle
    if (submenuToggle) {

        const navItem = submenuToggle.closest(".nav-item");

        if (!navItem) {
            return;
        }

        const isOpen = navItem.classList.toggle("submenu-open");

        submenuToggle.setAttribute("aria-expanded", isOpen);

        return;

    }

    // Clicking a nav/submenu link closes the mobile menu
    if (event.target.closest(".nav-menu a")) {

        const navMenu = document.querySelector(".nav-menu");
        const openToggle = document.querySelector(".mobile-menu-toggle");

        if (navMenu) {
            navMenu.classList.remove("mobile-menu-open");
        }

        if (openToggle) {
            openToggle.setAttribute("aria-expanded", "false");
        }

        document.querySelectorAll(".nav-item.submenu-open").forEach(function (item) {
            item.classList.remove("submenu-open");
        });

        return;

    }

    // Clicking outside a nav item closes any open submenu (desktop)
    if (!event.target.closest(".nav-item")) {

        document.querySelectorAll(".nav-item.submenu-open").forEach(function (item) {
            item.classList.remove("submenu-open");
        });

    }

});

// =========================
// Navbar background on scroll
// =========================

function updateNavbarOnScroll() {

    const navbarEl = document.querySelector(".navbar");

    if (navbarEl) {
        navbarEl.classList.toggle("navbar-scrolled", window.scrollY > 10);
    }

}

document.addEventListener("DOMContentLoaded", updateNavbarOnScroll);

window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });

// =========================
// Dark Mode Toggle
// =========================

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