document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Load Footer
    // =========================

    const footerContainer =
        document.querySelector("#footer");

    if (footerContainer && window.footer) {

        footerContainer.innerHTML = window.footer;

    }


    // =========================
    // Dark Mode Toggle
    // =========================

    const darkModeToggle =
        document.querySelector(".dark-mode-toggle");

    if (darkModeToggle) {

        darkModeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

        });

    }

});

// =========================
// Mobile Menu + Dropdown (پژوهش / تدریس)
// =========================

document.addEventListener("click", function (event) {

    const toggleButton = event.target.closest(".mobile-menu-toggle");
    const submenuToggle = event.target.closest(".submenu-toggle");

    // دکمه همبرگری
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

    // زیرمنوی پژوهش / تدریس
    if (submenuToggle) {

        const navItem = submenuToggle.closest(".nav-item");

        if (!navItem) {
            return;
        }

        const isOpen = navItem.classList.toggle("submenu-open");

        submenuToggle.setAttribute("aria-expanded", isOpen);

        return;

    }

    // بستن منو بعد از کلیک روی یکی از لینک‌ها
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

    // کلیک بیرون از منو، زیرمنوهای باز رو می‌بنده (دسکتاپ)
    if (!event.target.closest(".nav-item")) {

        document.querySelectorAll(".nav-item.submenu-open").forEach(function (item) {
            item.classList.remove("submenu-open");
        });

    }

});

// =========================
// پس‌زمینه ناوبر موقع اسکرول
// =========================

function updateNavbarOnScroll() {

    const navbarEl = document.querySelector(".navbar");

    if (navbarEl) {
        navbarEl.classList.toggle("navbar-scrolled", window.scrollY > 10);
    }

}

document.addEventListener("DOMContentLoaded", updateNavbarOnScroll);

window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });