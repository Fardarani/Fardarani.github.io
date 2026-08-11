window.navbar = `

<header class="navbar">

    <div class="container">

        <a href="/index.html" class="logo">
            MA
        </a>

        <nav class="nav-menu">

            <a href="/index.html">
                Home
            </a>

            <a href="/pages/about.html">
                About
            </a>

            <div class="nav-item has-dropdown">
                <a href="/pages/research.html">
                    Research
                </a>
                <button class="submenu-toggle" aria-label="Toggle Research submenu" aria-expanded="false">
                    ▾
                </button>
                <ul class="submenu">
                    <li><a href="/pages/research.html#areas">Research Areas</a></li>
                    <li><a href="/pages/research.html#projects">Projects</a></li>
                    <li><a href="/pages/software.html">Software &amp; Codes</a></li>
                </ul>
            </div>

            <a href="/pages/publications.html">
                Publications
            </a>

            <div class="nav-item has-dropdown">
                <a href="/pages/teaching.html">
                    Teaching
                </a>
                <button class="submenu-toggle" aria-label="Toggle Teaching submenu" aria-expanded="false">
                    ▾
                </button>
                <ul class="submenu">
                    <li><a href="/pages/courses.html">Courses</a></li>
                    <li><a href="/pages/lecture-notes.html">Lecture Notes</a></li>
                    <li><a href="/pages/videos.html">Videos</a></li>
                </ul>
            </div>

            <a href="/pages/contact.html">
                Contact
            </a>

        </nav>

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

        <button
            class="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded="false">
            ☰
        </button>

    </div>

</header>

`;