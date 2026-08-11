document.addEventListener("DOMContentLoaded", () => {

    const navbarContainer =
        document.querySelector("#navbar");

    if (!navbarContainer) {
        return;
    }

    navbarContainer.innerHTML = `
        <nav class="navbar" dir="rtl">

            <div class="container">

                <a href="/fa/index.html" class="logo">
                    محمدرضا احمدی دارانی
                </a>

                <div class="nav-menu">

                    <a href="/fa/index.html">
                        خانه
                    </a>

                    <a href="/fa/pages/about.html">
                        درباره من
                    </a>

                    <div class="nav-item has-dropdown">
                        <a href="/fa/pages/research.html">
                            پژوهش
                        </a>
                        <button class="submenu-toggle" aria-label="باز و بسته کردن زیرمنوی پژوهش" aria-expanded="false">
                            ▾
                        </button>
                        <ul class="submenu">
                            <li><a href="/fa/pages/research.html#areas">حوزه‌های پژوهشی</a></li>
                            <li><a href="/fa/pages/research.html#projects">پروژه‌ها</a></li>
                            <li><a href="/fa/pages/software.html">نرم‌افزار و کدها</a></li>
                        </ul>
                    </div>

                    <a href="/fa/pages/publications.html">
                        مقالات
                    </a>

                    <div class="nav-item has-dropdown">
                        <a href="/fa/pages/teaching.html">
                            تدریس
                        </a>
                        <button class="submenu-toggle" aria-label="باز و بسته کردن زیرمنوی تدریس" aria-expanded="false">
                            ▾
                        </button>
                        <ul class="submenu">
                            <li><a href="/fa/pages/courses.html">دروس</a></li>
                            <li><a href="/fa/pages/lecture-notes.html">جزوات درسی</a></li>
                            <li><a href="/fa/pages/videos.html">ویدئوها</a></li>
                        </ul>
                    </div>

                    <a href="/fa/pages/contact.html">
                        تماس
                    </a>

                </div>

                <div class="nav-actions">

                    <button
                        class="language-switch"
                        onclick="window.location.href='/index.html'">
                        EN
                    </button>

                    <button class="dark-mode-toggle">
                        ◐
                    </button>

                </div>

                <button
                    class="mobile-menu-toggle"
                    aria-label="باز و بسته کردن منو"
                    aria-expanded="false">
                    ☰
                </button>

            </div>

        </nav>
    `;

});