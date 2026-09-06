/* ----------------------------------------
   Site Search
   Simple keyword-based search across a manual page/section index.
   ---------------------------------------- */

const siteIndex = [
    { title: "Home - Showcase", keywords: "home showcase learning portfolio", url: "index.html" },
    { title: "Home - Bio & Web Technologies", keywords: "bio personal introduction hobbies github web hosting code editor browsers frameworks database cloud", url: "index.html#bio" },
    { title: "Home - Web Development Competence", keywords: "html5 css3 javascript competence skills rating", url: "index.html#competence" },
    { title: "Home - Statement of Authenticity", keywords: "authenticity original work academic integrity", url: "index.html#statement" },

    { title: "Form Page - HTML Form", keywords: "form contact name address gender phone mobile provider", url: "form.html#collapseOne" },
    { title: "Form Page - Google Form", keywords: "google form spreadsheet submission", url: "form.html#collapseTwo" },

    { title: "Web API - JSON Rules", keywords: "json rules syntax data format", url: "webapi.html#accordionOne" },
    { title: "Web API - REST API", keywords: "rest api supabase http get post put delete", url: "webapi.html#accordionTwo" },

    { title: "JavaScript - Slideshows", keywords: "slideshow movies automatic manual customisation dark mode", url: "javascript.html#collapseOne" },
    { title: "JavaScript - Product Catalog", keywords: "products cart shopping search filter sort add to cart", url: "javascript.html#collapseTwo" },
    { title: "JavaScript - Quiz", keywords: "quiz web dev knowledge questions score", url: "javascript.html#collapseThree" },   
    { title: "JavaScript - Authentication", keywords: "login signup account authentication supabase password", url: "javascript.html#collapseFour" },

    { title: "Research - Copyright & CC Licenses", keywords: "copyright creative commons fair use licenses", url: "research.html" },
    { title: "Research - Privacy Policy", keywords: "privacy policy personal information act principles", url: "research.html" },
    { title: "Research - SEO", keywords: "seo search engine optimisation visibility", url: "research.html" },
    { title: "Research - Web Hosting", keywords: "web hosting provider server uptime", url: "research.html" },
    { title: "Research - Performance & Maintenance", keywords: "performance maintenance page speed loading time", url: "research.html" },
    { title: "Research - Web Security", keywords: "security cyber attacks phishing sql injection xss", url: "research.html" }
];

function performSearch(query) {
    const resultsContainer = document.getElementById("siteSearchResults");
    const trimmedQuery = query.trim().toLowerCase();

    if (!resultsContainer) return;

    if (trimmedQuery === "") {
        resultsContainer.innerHTML = "";
        return;
    }

    const matches = siteIndex.filter(entry =>
        entry.title.toLowerCase().includes(trimmedQuery) ||
        entry.keywords.toLowerCase().includes(trimmedQuery)
    );

    if (matches.length === 0) {
        resultsContainer.innerHTML = `<p class="text-muted small mb-0">No results found.</p>`;
        return;
    }

    resultsContainer.innerHTML = matches.map(entry => `
        <a href="${entry.url}" class="d-block small py-1 border-bottom text-decoration-none">
            ${entry.title}
        </a>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("siteSearchInput");
    if (input) {
        input.addEventListener("input", (e) => performSearch(e.target.value));
    }
});