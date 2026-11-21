// =====================================
// SPLIT QUESTIONS INTO QUIZZES
// =====================================

const questionsPerQuiz = 50;
const quizzes = [];

for (let i = 0; i < quizData.length; i += questionsPerQuiz) {
    quizzes.push(
        quizData.slice(i, i + questionsPerQuiz)
    );
}

// =====================================
// STATE
// =====================================

let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = {};

// =====================================
// ELEMENTS
// =====================================

const dashboard =
    document.getElementById("dashboard");

const quizScreen =
    document.getElementById("quiz-screen");

const quizList =
    document.getElementById("quiz-list");

const questionStem =
    document.getElementById("question-stem");

const optionsContainer =
    document.getElementById("options-container");

const rationaleContainer =
    document.getElementById("rationale-container");

const nextBtn =
    document.getElementById("next-btn");

const prevBtn =
    document.getElementById("prev-btn");

const backBtn =
    document.getElementById("back-btn");

const questionNav =
    document.getElementById("question-nav");

// =====================================
// CREATE DASHBOARD BUTTONS
// =====================================

quizzes.forEach((quiz, index) => {

    const btn =
        document.createElement("button");

    const start =
        index * questionsPerQuiz + 1;

    const end =
        Math.min(
            (index + 1) * questionsPerQuiz,
            quizData.length
        );

    btn.innerText =
        `Quiz ${index + 1} (${start}-${end})`;

    btn.onclick = () =>
        startQuiz(index);

    quizList.appendChild(btn);
});

// =====================================
// START QUIZ
// =====================================

function startQuiz(quizIndex) {

    currentQuiz = quizzes[quizIndex];

    currentQuestionIndex = 0;

    userAnswers = {};

    dashboard.classList.remove("active");

    quizScreen.classList.add("active");

    document.getElementById(
        "quiz-title"
    ).innerText =
        `Quiz ${quizIndex + 1}`;

    renderNavigator();

    loadQuestion();
}

// =====================================
// QUESTION NAVIGATOR
// =====================================

function renderNavigator() {

    questionNav.innerHTML = "";

    currentQuiz.forEach((q, index) => {

        const btn =
            document.createElement("button");

        btn.textContent = index + 1;

        btn.classList.add(
            "question-number"
        );

        const saved =
            userAnswers[index];

        if (saved) {

            if (
                saved.selected ===
                saved.correct
            ) {

                btn.classList.add(
                    "question-correct"
                );

            } else {

                btn.classList.add(
                    "question-wrong"
                );

            }
        }

        if (
            index ===
            currentQuestionIndex
        ) {

            btn.classList.add(
                "question-current"
            );
        }

        btn.onclick = () => {

            currentQuestionIndex =
                index;

            loadQuestion();
        };

        questionNav.appendChild(btn);
    });
}

// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {

    const q =
        currentQuiz[currentQuestionIndex];

    rationaleContainer.classList.add(
        "hidden"
    );

    optionsContainer.innerHTML = "";

    questionStem.innerText =
        `${currentQuestionIndex + 1}. ${q.stem}`;

    for (
        const [key, value]
        of Object.entries(q.options)
    ) {

        const btn =
            document.createElement(
                "button"
            );

        btn.classList.add(
            "option-btn"
        );

        btn.innerText =
            `${key}. ${value}`;

        btn.onclick = () =>
            checkAnswer(key);

        optionsContainer.appendChild(
            btn
        );
    }

    if (
        userAnswers[currentQuestionIndex]
    ) {

        restoreAnswer(
            userAnswers[
                currentQuestionIndex
            ]
        );
    }

    prevBtn.disabled =
        currentQuestionIndex === 0;

    nextBtn.disabled =
        currentQuestionIndex ===
        currentQuiz.length - 1;

    renderNavigator();
}

// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer(selectedKey) {

    const q =
        currentQuiz[currentQuestionIndex];

    const buttons =
        optionsContainer.querySelectorAll(
            "button"
        );

    buttons.forEach(btn => {

        btn.disabled = true;

        const letter =
            btn.innerText.charAt(0);

        if (
            letter === q.correct
        ) {

            btn.classList.add(
                "correct"
            );
        }

        if (
            letter === selectedKey &&
            selectedKey !== q.correct
        ) {

            btn.classList.add(
                "incorrect"
            );
        }
    });

    userAnswers[
        currentQuestionIndex
    ] = {

        selected: selectedKey,
        correct: q.correct

    };

    document.getElementById(
        "correct-answer-letter"
    ).innerText =
        q.correct;

    document.getElementById(
        "correct-rationale"
    ).innerText =
        q.correctRationale;

    document.getElementById(
        "incorrect-rationale"
    ).innerText =
        q.incorrectRationale;

    rationaleContainer.classList.remove(
        "hidden"
    );

    renderNavigator();
}

// =====================================
// RESTORE PREVIOUS ANSWERS
// =====================================

function restoreAnswer(answerData) {

    const q =
        currentQuiz[currentQuestionIndex];

    const buttons =
        optionsContainer.querySelectorAll(
            "button"
        );

    buttons.forEach(btn => {

        btn.disabled = true;

        const letter =
            btn.innerText.charAt(0);

        if (
            letter === q.correct
        ) {

            btn.classList.add(
                "correct"
            );
        }

        if (
            letter ===
                answerData.selected &&
            answerData.selected !==
                q.correct
        ) {

            btn.classList.add(
                "incorrect"
            );
        }
    });

    document.getElementById(
        "correct-answer-letter"
    ).innerText =
        q.correct;

    document.getElementById(
        "correct-rationale"
    ).innerText =
        q.correctRationale;

    document.getElementById(
        "incorrect-rationale"
    ).innerText =
        q.incorrectRationale;

    rationaleContainer.classList.remove(
        "hidden"
    );
}

// =====================================
// NEXT BUTTON
// =====================================

nextBtn.onclick = () => {

    if (
        currentQuestionIndex <
        currentQuiz.length - 1
    ) {

        currentQuestionIndex++;

        loadQuestion();

    } else {

        alert("Quiz Complete!");
    }
};

// =====================================
// PREVIOUS BUTTON
// =====================================

prevBtn.onclick = () => {

    if (
        currentQuestionIndex > 0
    ) {

        currentQuestionIndex--;

        loadQuestion();
    }
};

// =====================================
// BACK TO DASHBOARD
// =====================================

backBtn.onclick = () => {

    quizScreen.classList.remove(
        "active"
    );

    dashboard.classList.add(
        "active"
    );
};