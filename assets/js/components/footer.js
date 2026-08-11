document.addEventListener("DOMContentLoaded", () => {

    const footerContainer =
        document.querySelector("#footer");

    if (!footerContainer) {
        return;
    }

    const isPersian =
        document.documentElement.lang === "fa";

    const currentYear = new Date().getFullYear();

    const displayYear = isPersian
        ? currentYear.toLocaleString("fa-IR", { useGrouping: false })
        : currentYear;

    const usefulLinks = [
        {
            label: "www.sku.ac.ir",
            description: { fa: "دانشگاه شهرکرد", en: "Shahrekord University" },
            url: "https://www.sku.ac.ir"
        },
        {
            label: "www.sciencedirect.com",
            description: { fa: "پایگاه مقالات علمی", en: "Scientific paper database" },
            url: "https://www.sciencedirect.com"
        }
    ];

    const content = isPersian ? {

        name: "محمدرضا احمدی دارانی",

        titleLines: [
            "دانشیار",
            "گروه علوم کامپیوتر",
            "دانشگاه شهرکرد"
        ],

        links: [
            { label: "🎓 Google Scholar", url: "https://scholar.google.com/citations?user=truGKZ8AAAAJ&hl=en" },
            { label: "🟢 ORCID", url: "https://orcid.org" },
            { label: "🔷 ResearchGate", url: "https://www.researchgate.net" },
            { label: "⚫ GitHub", url: "https://github.com/Fardarani" }
        ],

        usefulLinksTitle: "لینک‌های مفید",

        copyright: `© ${displayYear} محمدرضا احمدی دارانی. تمامی حقوق محفوظ است.`

    } : {

        name: "Mohammadreza Ahmadi Darani",

        titleLines: [
            "Associate Professor",
            "Department of Computer Sciences",
            "Shahrekord University"
        ],

        links: [
            { label: "🎓 Google Scholar", url: "https://scholar.google.com/citations?user=truGKZ8AAAAJ&hl=en" },
            { label: "🟢 ORCID", url: "https://orcid.org" },
            { label: "🔷 ResearchGate", url: "https://www.researchgate.net" },
            { label: "⚫ GitHub", url: "https://github.com/Fardarani" }
        ],

        usefulLinksTitle: "Useful Links",

        copyright: `© ${displayYear} Mohammadreza Ahmadi Darani. All rights reserved.`

    };

    const linksHtml = content.links.map(link => `
        <a href="${link.url}"
        target="_blank"
        rel="noopener noreferrer">
            ${link.label}
        </a>
    `).join("");

    const usefulLinksHtml = usefulLinks.map(link => `
        <a href="${link.url}"
        target="_blank"
        rel="noopener noreferrer">
            <span class="useful-link-desc">${isPersian ? link.description.fa : link.description.en}</span>
            <span class="useful-link-label">${link.label}</span>
        </a>
    `).join("");

    window.footer = `
        <footer class="footer" dir="${isPersian ? "rtl" : "ltr"}">

            <div class="container">

                <div class="footer-content">

                    <div class="footer-brand">

                        <h3>
                            ${content.name}
                        </h3>

                        <p>
                            ${content.titleLines.join("<br>")}
                        </p>

                    </div>

                    <div class="footer-right">

                        <div class="footer-links">
                            ${linksHtml}
                        </div>

                        <div class="footer-useful-links">

                            <h4>
                                ${content.usefulLinksTitle}
                            </h4>

                            <div class="footer-useful-links-list">
                                ${usefulLinksHtml}
                            </div>

                        </div>

                    </div>

                </div>

                <div class="footer-bottom">

                    <p>
                        ${content.copyright}
                    </p>

                </div>


            </div>

        </footer>
    `;

    footerContainer.innerHTML = window.footer;

});