// =====================================
// CONFIG
// =====================================

const QUESTIONS_PER_QUIZ = 50;

// Label shown on the dashboard -> question data (from data.js and sullivansetA2018.js)
// TIP: rename the variables inside those data files so they match these labels.
const subjects = {
    "Sullivan set A": dataData,
    "Sullivan set B": newData,
};

const CORRECT_MESSAGES = ["Nailed it!", "Correct!", "Exactly right.", "Nice work!"];
const MISS_MESSAGES = [
    "Not quite. Here's the key idea.",
    "Close. Read why below.",
    "Good one to catch now.",
];

// =====================================
// STATE
// =====================================

let currentSubject = null;
let currentSubjectData = [];
let currentQuizIndex = 0;
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let streak = 0;

// =====================================
// ELEMENTS
// =====================================

const $ = (id) => document.getElementById(id);

const dashboard = $("dashboard");
const subjectScreen = $("subject-screen");
const quizScreen = $("quiz-screen");

const quizList = $("quiz-list");
const subjectQuizList = $("subject-quiz-list");
const questionStem = $("question-stem");
const optionsContainer = $("options-container");
const rationaleContainer = $("rationale-container");
const questionContainer = $("question-container");
const questionNav = $("question-nav");
const navButtons = document.querySelector(".navigation-buttons");

const nextBtn = $("next-btn");
const prevBtn = $("prev-btn");
const backBtn = $("back-btn");
const subjectBackBtn = $("subject-back-btn");

// Elements created here so index.html stays simple
const statusEl = document.createElement("div");
statusEl.id = "quiz-status";
$("quiz-title").after(statusEl);

const feedbackEl = document.createElement("p");
feedbackEl.className = "feedback";
rationaleContainer.prepend(feedbackEl);

const resultsPanel = document.createElement("div");
resultsPanel.id = "results-panel";
resultsPanel.className = "hidden";
quizScreen.appendChild(resultsPanel);

// =====================================
// HELPERS
// =====================================

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function progressBar(percent) {
    const bar = el("span", "bar");
    const fill = el("span", "bar-fill");
    fill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
    bar.appendChild(fill);
    return bar;
}

function splitIntoQuizzes(data) {
    const quizzes = [];
    for (let i = 0; i < data.length; i += QUESTIONS_PER_QUIZ) {
        quizzes.push(data.slice(i, i + QUESTIONS_PER_QUIZ));
    }
    return quizzes;
}

function showScreen(screen) {
    [dashboard, subjectScreen, quizScreen].forEach((s) =>
        s.classList.toggle("active", s === screen)
    );
    window.scrollTo(0, 0);
}

function storageKeyFor(subject, quizIndex) {
    return `ptprep:${subject}:quiz${quizIndex}`;
}

function readProgress(subject, quizIndex) {
    try {
        const raw = localStorage.getItem(storageKeyFor(subject, quizIndex));
        return raw ? JSON.parse(raw) : {};
    } catch (e) {
        return {};
    }
}

function saveProgress() {
    try {
        localStorage.setItem(
            storageKeyFor(currentSubject, currentQuizIndex),
            JSON.stringify(userAnswers)
        );
    } catch (e) {
        // Storage unavailable. The app still works for this session.
    }
}

function clearProgress() {
    try {
        localStorage.removeItem(storageKeyFor(currentSubject, currentQuizIndex));
    } catch (e) {}
}

function quizStats(subject, quizIndex, total) {
    const answers = Object.values(readProgress(subject, quizIndex));
    return {
        total,
        answered: answers.length,
        correct: answers.filter((a) => a.selected === a.correct).length,
    };
}

// =====================================
// DASHBOARD
// =====================================

function renderDashboard() {
    quizList.innerHTML = "";

    Object.keys(subjects).forEach((subject, i) => {
        const data = subjects[subject] || [];
        const quizzes = splitIntoQuizzes(data);

        let answered = 0;
        quizzes.forEach((quiz, qi) => {
            answered += quizStats(subject, qi, quiz.length).answered;
        });
        const percent = data.length ? Math.round((answered / data.length) * 100) : 0;

        const btn = el("button", `set-tile tile-${i % 4}`);
        btn.append(
            el("span", "tile-name", subject),
            el(
                "span",
                "tile-meta",
                `${data.length} questions in ${quizzes.length} ${quizzes.length === 1 ? "quiz" : "quizzes"}`
            ),
            progressBar(percent),
            el("span", "tile-progress", answered ? `${percent}% answered` : "Not started")
        );
        btn.onclick = () => openSubject(subject);
        quizList.appendChild(btn);
    });
}

function openSubject(subject) {
    currentSubject = subject;
    currentSubjectData = subjects[subject] || [];

    $("subject-title").textContent = subject;
    renderSubjectQuizzes();
    showScreen(subjectScreen);
}

function renderSubjectQuizzes() {
    subjectQuizList.innerHTML = "";

    splitIntoQuizzes(currentSubjectData).forEach((quiz, index) => {
        const start = index * QUESTIONS_PER_QUIZ + 1;
        const end = start + quiz.length - 1;
        const stats = quizStats(currentSubject, index, quiz.length);
        const done = stats.answered === stats.total;

        let status = "Not started";
        if (done) status = `Done: ${stats.correct} of ${stats.total} correct`;
        else if (stats.answered) status = `${stats.answered} of ${stats.total} answered`;

        const btn = el("button", "quiz-tile" + (done ? " done" : ""));
        btn.append(
            el("span", "qt-title", `Quiz ${index + 1}`),
            el("span", "qt-range", `Questions ${start} to ${end}`),
            progressBar((stats.answered / stats.total) * 100),
            el("span", "qt-status", status)
        );
        btn.onclick = () => startQuiz(index);
        subjectQuizList.appendChild(btn);
    });
}

subjectBackBtn.onclick = () => {
    renderDashboard();
    showScreen(dashboard);
};

// =====================================
// START QUIZ
// =====================================

function startQuiz(quizIndex, { fresh = false } = {}) {
    currentQuizIndex = quizIndex;
    currentQuiz = splitIntoQuizzes(currentSubjectData)[quizIndex];
    currentQuestionIndex = 0;
    streak = 0;

    if (fresh) clearProgress();
    userAnswers = fresh ? {} : readProgress(currentSubject, quizIndex);

    // Resume at the first unanswered question
    const firstUnanswered = currentQuiz.findIndex((_, i) => !userAnswers[i]);
    if (firstUnanswered > 0) currentQuestionIndex = firstUnanswered;

    $("quiz-title").textContent = `${currentSubject}, Quiz ${quizIndex + 1}`;

    hideResults();
    showScreen(quizScreen);
}

// =====================================
// STATUS STRIP
// =====================================

function updateStatus() {
    const answers = Object.values(userAnswers);
    const correct = answers.filter((a) => a.selected === a.correct).length;
    const total = currentQuiz.length;

    statusEl.innerHTML = "";
    statusEl.append(
        progressBar((answers.length / total) * 100),
        el(
            "span",
            "status-text",
            `${answers.length} of ${total} answered · ${correct} correct` +
                (streak >= 2 ? ` · ${streak} in a row` : "")
        )
    );
}

// =====================================
// QUESTION NAVIGATOR
// =====================================

function renderNavigator() {
    questionNav.innerHTML = "";

    currentQuiz.forEach((_, index) => {
        const btn = el("button", "question-number", index + 1);

        const saved = userAnswers[index];
        let label = `Question ${index + 1}, unanswered`;
        if (saved) {
            const ok = saved.selected === saved.correct;
            btn.classList.add(ok ? "question-correct" : "question-wrong");
            label = `Question ${index + 1}, ${ok ? "correct" : "wrong"}`;
        }
        btn.setAttribute("aria-label", label);

        if (index === currentQuestionIndex) {
            btn.classList.add("question-current");
            btn.setAttribute("aria-current", "true");
        }

        btn.onclick = () => {
            currentQuestionIndex = index;
            loadQuestion();
        };

        questionNav.appendChild(btn);
    });

    // Keep the current number in view on the mobile strip
    const current = questionNav.querySelector(".question-current");
    if (current && questionNav.scrollWidth > questionNav.clientWidth) {
        questionNav.scrollLeft =
            current.offsetLeft - questionNav.clientWidth / 2 + current.offsetWidth / 2;
    }
}

// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {
    const q = currentQuiz[currentQuestionIndex];

    rationaleContainer.classList.add("hidden");
    optionsContainer.innerHTML = "";

    questionStem.dataset.num = `Question ${currentQuestionIndex + 1} of ${currentQuiz.length}`;
    questionStem.textContent = q.stem;

    for (const [key, value] of Object.entries(q.options)) {
        const btn = el("button", "option-btn");
        btn.dataset.key = key;
        btn.append(el("span", "opt-key", key), el("span", "opt-text", value));
        btn.onclick = () => checkAnswer(key);
        optionsContainer.appendChild(btn);
    }

    const saved = userAnswers[currentQuestionIndex];
    if (saved) showAnswerState(q, saved.selected);

    const isLast = currentQuestionIndex === currentQuiz.length - 1;
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = false;
    nextBtn.textContent = isLast ? "Finish ✓" : "Next →";

    renderNavigator();
    updateStatus();
}

// =====================================
// ANSWER STATE (shared by check + restore)
// =====================================

function makeMark(text) {
    return el("span", "opt-mark", text);
}

function showAnswerState(q, selectedKey) {
    const gotIt = selectedKey === q.correct;

    optionsContainer.querySelectorAll("button").forEach((btn) => {
        const key = btn.dataset.key;
        btn.disabled = true;

        if (key === q.correct) {
            btn.classList.add("correct");
            btn.appendChild(makeMark(gotIt ? "✓ Correct" : "✓ Right answer"));
        } else if (key === selectedKey) {
            btn.classList.add("incorrect");
            btn.appendChild(makeMark("✕ Your answer"));
        }
    });

    const msgs = gotIt ? CORRECT_MESSAGES : MISS_MESSAGES;
    feedbackEl.textContent = msgs[currentQuestionIndex % msgs.length];
    feedbackEl.className = `feedback ${gotIt ? "good" : "miss"}`;
    rationaleContainer.classList.toggle("good", gotIt);
    rationaleContainer.classList.toggle("miss", !gotIt);

    $("correct-answer-letter").textContent = q.correct;
    $("correct-rationale").textContent = q.correctRationale || "No explanation provided.";
    $("incorrect-rationale").textContent = q.incorrectRationale || "No explanation provided.";

    rationaleContainer.classList.remove("hidden");
}

function checkAnswer(selectedKey) {
    if (userAnswers[currentQuestionIndex]) return; // already answered

    const q = currentQuiz[currentQuestionIndex];

    userAnswers[currentQuestionIndex] = { selected: selectedKey, correct: q.correct };
    streak = selectedKey === q.correct ? streak + 1 : 0;

    saveProgress();
    showAnswerState(q, selectedKey);
    renderNavigator();
    updateStatus();
}

// =====================================
// RESULTS
// =====================================

function resultMessage(percent) {
    if (percent >= 85) return "Board-ready work. Keep it sharp.";
    if (percent >= 70) return "Solid. A quick review of the misses will lock it in.";
    if (percent >= 50) return "Good base. The misses are your study list.";
    return "Every miss here is a point you won't lose on exam day.";
}

function showResults() {
    const total = currentQuiz.length;
    const answered = Object.keys(userAnswers).length;
    const correct = Object.values(userAnswers).filter((a) => a.selected === a.correct).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const unanswered = total - answered;

    resultsPanel.innerHTML = "";

    const card = el("div", "result-card");
    card.append(
        el("h2", "", "Quiz complete"),
        el("p", "result-score", `${correct} / ${total}`),
        el("p", "result-detail", `${percent}% correct` + (unanswered ? `, ${unanswered} unanswered` : "")),
        el("p", "result-message", resultMessage(percent))
    );

    const actions = el("div", "result-actions");
    actions.appendChild(makeActionBtn("Review answers", hideResults, "primary"));

    const missed = currentQuiz
        .map((_, i) => i)
        .filter((i) => !userAnswers[i] || userAnswers[i].selected !== userAnswers[i].correct);
    if (missed.length) {
        actions.appendChild(
            makeActionBtn(
                "Go to first miss",
                () => {
                    currentQuestionIndex = missed[0];
                    hideResults();
                },
                "secondary"
            )
        );
    }
    actions.appendChild(
        makeActionBtn("Retake quiz", () => startQuiz(currentQuizIndex, { fresh: true }), "ghost")
    );

    card.appendChild(actions);
    resultsPanel.appendChild(card);

    [questionNav, questionContainer, rationaleContainer, navButtons, statusEl].forEach((n) =>
        n.classList.add("hidden")
    );
    resultsPanel.classList.remove("hidden");
}

function hideResults() {
    resultsPanel.classList.add("hidden");
    [questionNav, questionContainer, navButtons, statusEl].forEach((n) =>
        n.classList.remove("hidden")
    );
    loadQuestion();
}

function makeActionBtn(label, onClick, variant) {
    const btn = el("button", `result-btn ${variant}`, label);
    btn.onclick = onClick;
    return btn;
}

// =====================================
// NAVIGATION BUTTONS
// =====================================

function goNext() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function goPrev() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

nextBtn.onclick = goNext;
prevBtn.onclick = goPrev;
backBtn.onclick = () => {
    renderSubjectQuizzes();
    showScreen(subjectScreen);
};

// =====================================
// SWIPE (touch screens): left = next, right = previous
// =====================================

let touchStartX = 0;
let touchStartY = 0;
let touchTracking = false;

quizScreen.addEventListener(
    "touchstart",
    (e) => {
        // ignore the scrollable number strip and multi-finger gestures
        touchTracking = e.touches.length === 1 && !questionNav.contains(e.target);
        if (!touchTracking) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    },
    { passive: true }
);

quizScreen.addEventListener(
    "touchend",
    (e) => {
        if (!touchTracking || !resultsPanel.classList.contains("hidden")) return;
        touchTracking = false;

        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;

        // must be a clear, mostly horizontal swipe
        if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 1.8) return;

        if (dx < 0 && currentQuestionIndex < currentQuiz.length - 1) goNext();
        else if (dx > 0) goPrev();
    },
    { passive: true }
);

// =====================================
// KEYBOARD SHORTCUTS
// =====================================

document.addEventListener("keydown", (e) => {
    if (!quizScreen.classList.contains("active")) return;
    if (!resultsPanel.classList.contains("hidden")) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === "ArrowRight") return goNext();
    if (e.key === "ArrowLeft") return goPrev();

    // Press A, B, C, D... to answer
    const key = e.key.toUpperCase();
    const q = currentQuiz[currentQuestionIndex];
    if (q && q.options && key in q.options) checkAnswer(key);
});

// =====================================
// INIT
// =====================================

renderDashboard();
