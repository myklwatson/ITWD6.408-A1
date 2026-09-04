/* ----------------------------------------
   DEMO 1: Slideshows + Page Customisation
   Manual Slideshow (PREVIOUS/NEXT Buttons) and Automatic Slideshow.
   Page Customisation - Text Size, Background colour, Dark Mode Toggle.
   ---------------------------------------- */

// --- Movie Data for Slideshows ---
const movies = [
    {
        title: "Oppenheimer",
        year: 2023,
        image: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_FMjpg_UY3454_.jpg",
        description: "During WWII, physicist J. Robert Oppenheimer leads the Manhattan Project, racing to build the atomic bomb before Nazi Germany. The film explores the moral weight of scientific discovery and the political fallout that followed."
    },
    {
        title: "Tenet",
        year: 2020,
        image: "https://m.media-amazon.com/images/M/MV5BYjI0NDQzYmEtNzMwZC00ODA3LTgzZDYtZTk5ODZjY2Y2OTkzXkEyXkFqcGc@._V1_FMjpg_UX729_.jpg",
        description: "A secret agent armed with only one word, Tenet, embarks on a mission through a twilight world of international espionage involving time inversion. His task: prevent a war that threatens to destroy the entire world."
    },
    {
        title: "1917",
        year: 2019,
        image: "https://m.media-amazon.com/images/M/MV5BYzkxZjg2NDQtMGVjMy00NWZkLTk0ZDEtZWE3NDYwYjAyMTg1XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
        description: "Two young British soldiers during World War I are given a seemingly impossible mission: deliver a message deep in enemy territory that will stop a deadly attack on hundreds of soldiers, one of whom is a brother to one of the messengers."
    },
    {
        title: "Interstellar",
        year: 2014,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11DtS2HHLba5FaL0Pp7FhOrxi2huOesValmjDLYr-HgS_lI7xLNosgToP1n5kTPm1JDQpLe2SxoCIljKcWK2uCrgVDFCNIpl1dHY7W0Q&s=10",
        description: "With Earth becoming uninhabitable, a team of explorers travel through a wormhole near Saturn in search of a new home for humanity, testing the boundaries of love, time, and the survival of the human race."
    },
    {
        title: "Inception",
        year: 2010,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO, a job that spirals through dreams within dreams."
    },
    {
        title: "District 9",
        year: 2009,
        image: "https://a.ltrbxd.com/resized/film-poster/4/0/8/6/0/40860-district-9-0-2000-0-3000-crop.jpg?v=5fb9b8c5a9",
        description: "An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a chance for freedom when a government agent contracts an alien virus that begins to transform him."
    },
    {
        title: "The Dark Knight",
        year: 2008,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThc4Y92ce7dympNqdBxXSTN5ZJBwf1KiGzsJoxgG76sDTuF_17akzQgr0&s=10",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
        title: "Wall-E",
        year: 2008,
        image: "https://a.ltrbxd.com/resized/film-poster/4/5/9/9/4/45994-walle-0-2000-0-3000-crop.jpg?v=ad27f0ceac",
        description: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind, guided by a spark of curiosity and a love story."
    },
    {
        title: "Talladega Nights",
        year: 2006,
        image: "https://a.ltrbxd.com/resized/film-poster/4/6/8/8/7/46887-talladega-nights-the-ballad-of-ricky-bobby-0-2000-0-3000-crop.jpg?v=8908d69604",
        description: "Ricky Bobby is a champion NASCAR driver, but when a French Formula One driver challenges his position, Ricky's world comes crashing down, forcing him to rebuild his career, family, and pride."
    },
    {
        title: "The Lord of the Rings: Fellowship of the Ring",
        year: 2001,
        image: "https://a.ltrbxd.com/resized/sm/upload/3t/vq/0u/m6/1tX9ZlgVvWjAQhMs1vAfsYpi7VK-0-2000-0-3000-crop.jpg?v=30bbb824e1",
        description: "A meek hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron, facing peril, betrayal, and ancient evil along the way."
    }
];
/* -------------------- MANUAL SLIDESHOW -------------------- */

// Tracks Movie Currently Shown - Manual
let manualIndex = 0;

// Updates Manual Slideshow Elements
function renderManualSlide() {
    const img = document.getElementById("manual-slide-image");
    const movie = movies[manualIndex];

    // Fade Out, Fade In
    img.classList.add("fading");
    setTimeout(() => {
        document.getElementById("manual-slide-title").textContent = movie.title;
        document.getElementById("manual-slide-year").textContent = movie.year;
        img.src = movie.image;
        document.getElementById("manual-slide-description").textContent = movie.description;
        img.classList.remove("fading");
    }, 200);

    applyDescriptionState();
}

// Previous Movie and Loop
function previousSlide() {
    manualIndex = (manualIndex - 1 + movies.length) % movies.length;
    renderManualSlide();
}

// Next Movie and Loop
function nextSlide() {
    manualIndex = (manualIndex + 1) % movies.length;
    renderManualSlide();
}

/* ------------------- MORE / LESS (Movie Description) ------------------- */

// Saved Expanded/Collapsed State 
function applyDescriptionState() {
    const descEl = document.getElementById("manual-slide-description");
    const btn = document.getElementById("descToggleBtn");
    const storageKey = "desc_expanded";  

    const isExpanded = localStorage.getItem(storageKey) === "true";

    if (isExpanded) {
        descEl.classList.remove("truncated");
        btn.textContent = "Hide Movie Description";
    } else {
        descEl.classList.add("truncated");
        btn.textContent = "Show Movie Description";
    }
}

// Toggle Expanded/Collapsed
function toggleDescription() {
    const descEl = document.getElementById("manual-slide-description");
    const btn = document.getElementById("descToggleBtn");
    const storageKey = "desc_expanded";

    const isCurrentlyTruncated = descEl.classList.contains("truncated");

    if (isCurrentlyTruncated) {
        descEl.classList.remove("truncated");
        btn.textContent = "Hide Movie Description";
        localStorage.setItem(storageKey, "true");
    } else {
        descEl.classList.add("truncated");
        btn.textContent = "Show Movie Description";
        localStorage.setItem(storageKey, "false");
    }
}


/* -------------------- AUTOMATIC SLIDESHOW -------------------- */

let autoIndex = 0;
let autoInterval = null; // now tracked so we can pause/resume

function renderAutoSlide() {
    const img = document.getElementById("auto-slide-image");
    const movie = movies[autoIndex];

    img.classList.add("fading");
    setTimeout(() => {
        document.getElementById("auto-slide-title").textContent = movie.title;
        document.getElementById("auto-slide-year").textContent = movie.year;
        img.src = movie.image;
        img.classList.remove("fading");
    }, 200);

    renderDots();
}

function advanceAutoSlide() {
    autoIndex = (autoIndex + 1) % movies.length;
    renderAutoSlide();
}

function startAutoSlideshow() {
    autoInterval = setInterval(advanceAutoSlide, 3000);
}

function stopAutoSlideshow() {
    clearInterval(autoInterval);
}

// Progress Dots
function renderDots() {
    const dotsContainer = document.getElementById("auto-slide-dots");
    dotsContainer.innerHTML = movies.map((_, i) =>
        `<span class="dot ${i === autoIndex ? "active" : ""}"></span>`
    ).join("");
}

// Render Initial Slide
renderAutoSlide();
startAutoSlideshow();

// Pause on Mouse Hover
const autoSlideCard = document.getElementById("auto-slide-image").closest(".col-12");
autoSlideCard.addEventListener("mouseenter", stopAutoSlideshow);
autoSlideCard.addEventListener("mouseleave", startAutoSlideshow);

/* ------------------------ CUSTOMISATION -------------------------- */

renderManualSlide();
// --- Load Selected BG Colour on Page Load ---
if (localStorage.getItem("color_preference") != null) {
    document.getElementById("customisation-card").style.backgroundColor =
        localStorage.getItem("color_preference");

    // Update Dropdown with Selection
    document.getElementById("colorOption").value =
        localStorage.getItem("color_preference");
}

// --- Change BG Colour and Save Preference ---
const changeColor = () => {
    // Select Colour
    let selectedBGColor = document.getElementById("colorOption").value;

    // Apply Colour to Card
    document.getElementById("customisation-card").style.backgroundColor = selectedBGColor;

    // Store the Colour Choice
    localStorage.setItem("color_preference", selectedBGColor);
};

// --- Load Selected Text Size on Page Load ---
if (localStorage.getItem("size_preference") != null) {
    document.getElementById("customisation-card").style.fontSize =
        localStorage.getItem("size_preference");

    document.getElementById("sizeOption").value =
        localStorage.getItem("size_preference");
}

// --- Change Text Size and Save Preference ---
const customizeText = () => {
    let selectedTextSize = document.getElementById("sizeOption").value;

    document.getElementById("customisation-card").style.fontSize = selectedTextSize;

    localStorage.setItem("size_preference", selectedTextSize);
};

// --- Load Selected Dark/Light Mode on Page Load ---
const savedTheme = localStorage.getItem("themePreference") || "light";

if (savedTheme === "dark") {
    document.getElementById("customisation-card").classList.add("dark-mode");
    document.getElementById("themeToggle").checked = true;
}

// --- Toggle Dark/Light Mode ---
const toggleMode = () => {
    let theme = document.getElementById("themeToggle").checked ? "dark" : "light";

    if (theme === "dark") {
        document.getElementById("customisation-card").classList.add("dark-mode");
    } else {
        document.getElementById("customisation-card").classList.remove("dark-mode");
    }

    localStorage.setItem("themePreference", theme);
};