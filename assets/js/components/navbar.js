window.navbar = `

<div class="container">


    <a href="/index.html"
       class="logo">

        MA

    </a>


    <!-- =========================
         Mobile Menu Button
    ========================== -->

    <button class="mobile-menu-toggle"
            aria-label="Open menu"
            aria-expanded="false">

        ☰

    </button>


    <!-- =========================
         Navigation
    ========================== -->

    <nav class="nav-menu">


        <a href="/index.html">
            Home
        </a>


        <a href="/pages/about.html">
            About
        </a>


        <a href="/pages/research.html">
            Research
        </a>


        <a href="/pages/publications.html">
            Publications
        </a>


        <a href="/pages/teaching.html">
            Teaching
        </a>


        <a href="/pages/courses.html">
            Courses
        </a>


        <a href="/pages/contact.html">
            Contact
        </a>


        <!-- Mobile language switch -->

        <a href="/fa/index.html"
           class="mobile-language">

            FA

        </a>


    </nav>


    <!-- =========================
         Desktop Actions
    ========================== -->

    <div class="nav-actions">


        <button
            class="language-switch"
            onclick="window.location.href='/fa/index.html'">

            FA

        </button>


        <button class="dark-mode-toggle">

            ◐

        </button>


    </div>


</div>

`;


// =========================
// Mobile Menu
// =========================

document.addEventListener("DOMContentLoaded", () => {


    const navbar =
        document.querySelector("#navbar");


    if (!navbar) {
        return;
    }


    const menuButton =
        navbar.querySelector(".mobile-menu-toggle");


    const navMenu =
        navbar.querySelector(".nav-menu");


    if (!menuButton || !navMenu) {
        return;
    }


    menuButton.addEventListener("click", () => {


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

    navMenu.querySelectorAll("a").forEach(link => {


        link.addEventListener("click", () => {


            navMenu.classList.remove(
                "mobile-menu-open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


        });


    });

});