document.addEventListener("DOMContentLoaded", () => {
    const publicationContainer = document.querySelector("#publication-list");

    if (!publicationContainer) {
        return;
    }

    const isPersian =
        document.documentElement.lang === "fa" ||
        document.documentElement.dir === "rtl" ||
        window.location.pathname.startsWith("/fa/");

    const labels = isPersian
        ? {
            viewDoi: "مشاهده DOI",
            citations: "استنادها:",
            citeThis: "استناد به این مقاله",
            copyBibtex: "کپی BibTeX",
            copied: "کپی شد!"
        }
        : {
            viewDoi: "View DOI",
            citations: "Citations:",
            citeThis: "Cite this paper",
            copyBibtex: "Copy BibTeX",
            copied: "Copied!"
        };

    fetch("/assets/data/publications.json")
        .then(response => response.json())
        .then(publications => {
            const sortedPublications = publications
                .map(publication => ({
                    ...publication,
                    year: Number(publication.year)
                }))
                .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

            sortedPublications.forEach(pub => {
                const item = document.createElement("div");
                item.className = "publication-item";
                item.dataset.type = pub.type;

                item.innerHTML = `
                    <div class="publication-year">${pub.year}</div>
                    <div class="publication-details">
                        <h3>${pub.title}</h3>
                        <p>${pub.authors}</p>
                        <p><strong>${pub.journal}</strong></p>
                        <p><strong>${pub.type}</strong></p>

                        <div class="publication-keywords">
                            ${pub.keywords.map(keyword => `<span>${keyword}</span>`).join("")}
                        </div>

                        ${pub.doi
                            ? `<a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer">
                                ${labels.viewDoi}
                               </a>`
                            : ""}

                        <span class="publication-citation-count">
                            ${labels.citations} <span>${pub.citations ?? 0}</span>
                        </span>

                        <details class="citation">
                            <summary>${labels.citeThis}</summary>
                            <div class="citation-box">
                                <button class="copy-bibtex">${labels.copyBibtex}</button>
                                <pre>@article{Ahmadi${pub.year},
author = {${pub.authors}},
title = {${pub.title}},
journal = {${pub.journal}},
year = {${pub.year}}
}</pre>
                            </div>
                        </details>
                    </div>
                `;

                publicationContainer.appendChild(item);
            });

            const filterButtons = document.querySelectorAll(".filter-btn");
            const publicationItems = publicationContainer.querySelectorAll(".publication-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", function () {
                    const filter = this.dataset.filter;

                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");

                    publicationItems.forEach(item => {
                        item.style.display =
                            filter === "all" || item.dataset.type === filter ? "flex" : "none";
                    });
                });
            });
        })
        .catch(error => {
            console.error("Error loading publications:", error);
        });

    // =========================
    // Copy BibTeX
    // (moved here from main.js so it works on both languages,
    //  since publications.js is shared between fa/ and en)
    // =========================

    publicationContainer.addEventListener("click", function (event) {

        if (!event.target.classList.contains("copy-bibtex")) {
            return;
        }

        const button = event.target;
        const originalText = button.innerText;
        const bibtex = button.nextElementSibling.innerText;

        navigator.clipboard.writeText(bibtex)
            .then(() => {

                button.innerText = labels.copied;

                setTimeout(() => {
                    button.innerText = originalText;
                }, 2000);

            })
            .catch(error => {
                console.error("Copy failed:", error);
            });

    });

});