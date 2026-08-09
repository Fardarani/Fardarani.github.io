document.addEventListener("DOMContentLoaded", () => {

    const navbarContainer =
        document.querySelector("#navbar");

    if (!navbarContainer) {
        return;
    }


    // =========================
    // Persian Navbar
    // =========================

    navbarContainer.innerHTML = `

        <nav class="navbar" dir="rtl">

            <div class="container">


                <a href="/fa/index.html"
                   class="logo">

                    محمدرضا احمدی دارانی

                </a>


                <!-- =========================
                     Mobile Menu Button
                ========================== -->

                <button class="mobile-menu-toggle"
                        aria-label="باز کردن منو"
                        aria-expanded="false">

                    ☰

                </button>


                <!-- =========================
                     Navigation
                ========================== -->

                <div class="nav-menu">


                    <a href="/fa/index.html">
                        خانه
                    </a>


                    <a href="/fa/about.html">
                        درباره من
                    </a>


                    <a href="/fa/research.html">
                        پژوهش
                    </a>


                    <a href="/fa/publications.html">
                        مقالات
                    </a>


                    <a href="/fa/teaching.html">
                        تدریس
                    </a>


                    <a href="/fa/courses.html">
                        دروس
                    </a>


                    <a href="/fa/videos.html">
                        ویدئوها
                    </a>


                    <a href="/fa/software.html">
                        نرم‌افزار و کدها
                    </a>


                    <a href="/fa/contact.html">
                        تماس
                    </a>


                    <a href="/index.html"
                       class="mobile-language">

                        EN

                    </a>


                </div>


                <!-- =========================
                     Desktop Language
                ========================== -->

                <div class="nav-actions">

                    <a href="/index.html">
                        EN
                    </a>

                </div>


            </div>

        </nav>

    `;


    // =========================
    // Mobile Menu
    // =========================

    const menuButton =
        navbarContainer.querySelector(".mobile-menu-toggle");

    const navMenu =
        navbarContainer.querySelector(".nav-menu");


    if (menuButton && navMenu) {

        menuButton.addEventListener("click", () => {

            navMenu.classList.toggle("mobile-menu-open");


            const isOpen =
                navMenu.classList.contains("mobile-menu-open");


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

    }

});