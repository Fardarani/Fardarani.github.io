document.addEventListener("DOMContentLoaded", () => {
    const publicationContainer = document.querySelector("#publication-list");

    if (!publicationContainer) {
        return;
    }

    fetch("../assets/data/publications.json")
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

                        <a href="${pub.doi}" target="_blank" rel="noopener noreferrer">
                            View DOI
                        </a>

                        <details class="citation">
                            <summary>Cite this paper</summary>
                            <div class="citation-box">
                                <button class="copy-bibtex">Copy BibTeX</button>
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
            const publicationItems = document.querySelectorAll(".publication-item");

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
});