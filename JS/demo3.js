/* ----------------------------------------
   DEMO 3: Web Dev Quiz
   10 questions, randomised order, score modal, best score via localStorage.
   ---------------------------------------- */

const quizQuestions = [
    {
        question: "What does 'CC' stand for in Creative Commons licensing?",
        options: ["Copyright Clause", "Creative Commons", "Content Control", "Certified Copy"],
        correctIndex: 1
    },
    {
        question: "Which HTTP method is used to retrieve data from a server without changing it?",
        options: ["POST", "DELETE", "GET", "PUT"],
        correctIndex: 2
    },
    {
        question: "What does SEO stand for?",
        options: ["Search Engine Optimization", "Site Element Order", "Secure Encrypted Output", "Search Efficiency Online"],
        correctIndex: 0
    },
    {
        question: "Which CSS property is used to create a flexible box layout?",
        options: ["display: grid", "display: flex", "position: relative", "float: left"],
        correctIndex: 1
    },
    {
        question: "What is the purpose of a website's privacy policy?",
        options: [
            "To list the site's color scheme",
            "To explain how user data is collected and used",
            "To describe the site's hosting provider",
            "To show the site's search ranking"
        ],
        correctIndex: 1
    },
    {
        question: "Which of these is a common cyber attack that tricks users into revealing sensitive information?",
        options: ["Phishing", "Caching", "Rendering", "Minifying"],
        correctIndex: 0
    },
    {
        question: "What data format does a typical Web API commonly use to transmit data?",
        options: ["JSON", "DOCX", "MP3", "EXE"],
        correctIndex: 0
    },
    {
        question: "What does 'mobile-first' mean in responsive web design?",
        options: [
            "Designing for desktop first, then shrinking down",
            "Only supporting mobile devices",
            "Styling for mobile screens first, then scaling up with media queries",
            "Using a mobile app instead of a website"
        ],
        correctIndex: 2
    },
    {
        question: "Which of these helps reduce a website's page loading time?",
        options: [
            "Adding more unminified JavaScript files",
            "Compressing images",
            "Increasing image resolution unnecessarily",
            "Avoiding a Content Delivery Network"
        ],
        correctIndex: 1
    },
    {
        question: "In JSON, which of the following is NOT a valid value type?",
        options: ["String", "Number", "Function", "Boolean"],
        correctIndex: 2
    }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

/* -------------------- START / INIT -------------------- */

function startQuiz() {
    shuffledQuestions = shuffleArray(quizQuestions);
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("quiz-results").classList.add("d-none");
    document.getElementById("quiz-active").classList.remove("d-none");

    document.getElementById("progress-text").textContent = `Question 1 of ${shuffledQuestions.length}`;
    document.getElementById("live-score-text").textContent = `Score: 0 / 0`;
    document.getElementById("quiz-progress-bar").style.width = "0%";

    updateBestScoreDisplay();
    renderAllQuestions();
}

function updateBestScoreDisplay() {
    const previousBest = localStorage.getItem("quiz-best-score");
    const display = document.getElementById("best-score-display");
    display.textContent = previousBest !== null
        ? `Your best score: ${previousBest} / ${quizQuestions.length}`
        : "";
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/* -------------------- RENDER ALL QUESTIONS AT ONCE -------------------- */

function buildQuestionBlock(q, index) {
    const optionsHTML = q.options.map((option, optIndex) => `
        <button type="button" class="quiz-option-btn" data-question="${index}" data-option="${optIndex}">
            ${option}
        </button>
    `).join("");

    return `
        <div class="question-block ${index === 0 ? "" : "locked"}" id="question-block-${index}">
            <h6 class="mb-2">${index + 1}. ${q.question}</h6>
            ${optionsHTML}
        </div>
    `;
}

function renderAllQuestions() {
    const container = document.getElementById("questions-list");
    container.innerHTML = shuffledQuestions.map(buildQuestionBlock).join("");
}

/* -------------------- ANSWER HANDLING -------------------- */

function handleOptionClick(e) {
    if (!e.target.classList.contains("quiz-option-btn")) return;

    const questionIndex = Number(e.target.dataset.question);

    // Ignore clicks on any question that isn't the current active one
    if (questionIndex !== currentQuestionIndex) return;

    const selectedOption = Number(e.target.dataset.option);
    selectAnswer(questionIndex, selectedOption, e.target);
}

function selectAnswer(questionIndex, selectedOption, clickedBtn) {
    const q = shuffledQuestions[questionIndex];
    const block = document.getElementById(`question-block-${questionIndex}`);
    const allButtons = block.querySelectorAll(".quiz-option-btn");

    allButtons.forEach(btn => btn.disabled = true);
    allButtons[q.correctIndex].classList.add("correct");

    if (selectedOption !== q.correctIndex) {
        clickedBtn.classList.add("incorrect");
    } else {
        score++;
    }

    setTimeout(() => {
        currentQuestionIndex++;

        document.getElementById("live-score-text").textContent =
            `Score: ${score} / ${currentQuestionIndex}`;

        const progressPercent = (currentQuestionIndex / shuffledQuestions.length) * 100;
        document.getElementById("quiz-progress-bar").style.width = `${progressPercent}%`;

        if (currentQuestionIndex < shuffledQuestions.length) {
            document.getElementById("progress-text").textContent =
                `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;

            const nextBlock = document.getElementById(`question-block-${currentQuestionIndex}`);
            nextBlock.classList.remove("locked");
            nextBlock.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            showResults();
        }
    }, 900);
}

/* -------------------- SCORE / RESULTS -------------------- */

function showResults() {
    document.getElementById("quiz-active").classList.add("d-none");
    document.getElementById("quiz-results").classList.remove("d-none");

    document.getElementById("score-text").textContent =
        `You scored ${score} / ${shuffledQuestions.length}`;

    const bestKey = "quiz-best-score";
    const previousBest = parseInt(localStorage.getItem(bestKey)) || 0;
    const newBest = Math.max(score, previousBest);
    localStorage.setItem(bestKey, newBest);

    document.getElementById("best-score-text").textContent =
        `Best: ${newBest} / ${shuffledQuestions.length}`;
}

/* -------------------- RETRY -------------------- */

function retryQuiz() {
    document.getElementById("quiz-results").classList.add("d-none");
    startQuiz();
}

/* -------------------- RESET MID-QUIZ -------------------- */

function resetQuizAttempt() {
    const confirmed = confirm("Restart the quiz? Your current progress will be lost.");
    if (!confirmed) return;

    startQuiz();
}

/* -------------------- RESET BEST SCORE -------------------- */

function resetBestScore() {
    localStorage.removeItem("quiz-best-score");
    document.getElementById("best-score-text").textContent = "Best score reset.";
}

/* -------------------- INIT -------------------- */

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("retry-quiz-btn").addEventListener("click", retryQuiz);
    document.getElementById("reset-quiz-btn").addEventListener("click", resetBestScore);
    document.getElementById("reset-quiz-attempt-btn").addEventListener("click", resetQuizAttempt);
    document.getElementById("questions-list").addEventListener("click", handleOptionClick);

    startQuiz();
});