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

                </div>


                <div class="nav-actions">

                    <a href="/index.html">
                        EN
                    </a>

                </div>

            </div>

        </nav>

    `;

});