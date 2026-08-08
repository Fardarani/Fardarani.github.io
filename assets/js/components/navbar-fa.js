document.addEventListener("DOMContentLoaded", () => {

    const navbarContainer =
        document.querySelector("#navbar");

    if (!navbarContainer) {
        return;
    }

    navbarContainer.innerHTML = `
        <nav class="navbar" dir="rtl">

            <div class="container">

                <a href="index.html" class="logo">
                    محمدرضا احمدی دارانی
                </a>

                <div class="nav-menu">

                    <a href="index.html">
                        خانه
                    </a>

                    <a href="about.html">
                        درباره من
                    </a>

                    <a href="research.html">
                        پژوهش
                    </a>

                    <a href="publications.html">
                        مقالات
                    </a>
                    <a href="teaching.html">
                        تدریس
                    </a>
                    <a href="courses.html">
                        دروس
                    </a>

                    <a href="videos.html">
                        ویدئوها
                    </a>

                    <a href="software.html">
                        نرم‌افزار و کدها
                    </a>

                    <a href="contact.html">
                        تماس
                    </a>

                </div>

                <div class="nav-actions">

                    <a href="../index.html">
                        EN
                    </a>

                </div>

            </div>

        </nav>
    `;

});