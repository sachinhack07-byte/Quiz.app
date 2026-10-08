// ======================================================
// QUIZ QUESTIONS
// ======================================================

const questions = [

    // ================= EASY =================

    {
        difficulty: "easy",
        question: "What is the full form of HTML?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        difficulty: "easy",
        question: "Which language is used to style a web page?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "CSS"
    },

    {
        difficulty: "easy",
        question: "Which language is used to make a website interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },

    {
        difficulty: "easy",
        question: "Which tag is used to create a paragraph?",
        options: [
            "<para>",
            "<text>",
            "<p>",
            "<paragraph>"
        ],
        answer: "<p>"
    },

    {
        difficulty: "easy",
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: "#"
    },

    {
        difficulty: "easy",
        question: "Which symbol is used for a class selector in CSS?",
        options: [
            "#",
            ".",
            "*",
            "$"
        ],
        answer: "."
    },

    {
        difficulty: "easy",
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },

    {
        difficulty: "easy",
        question: "Which language is mainly used for web page structure?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "HTML"
    },

    {
        difficulty: "easy",
        question: "Which property changes text color in CSS?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },

    {
        difficulty: "easy",
        question: "Which keyword can declare a variable in JavaScript?",
        options: [
            "var",
            "int",
            "define",
            "variable"
        ],
        answer: "var"
    },


    // ================= MEDIUM =================

    {
        difficulty: "medium",
        question: "Which method adds an element to the end of an array in JavaScript?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        answer: "push()"
    },

    {
        difficulty: "medium",
        question: "Which method removes the last element from an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "slice()"
        ],
        answer: "pop()"
    },

    {
        difficulty: "medium",
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        difficulty: "medium",
        question: "Which HTML tag is used to create a table row?",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<table-row>"
        ],
        answer: "<tr>"
    },

    {
        difficulty: "medium",
        question: "Which operator is used for strict equality in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        difficulty: "medium",
        question: "Which method converts JSON text into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    },

    {
        difficulty: "medium",
        question: "Which keyword is used to create a constant in JavaScript?",
        options: [
            "let",
            "var",
            "const",
            "static"
        ],
        answer: "const"
    },

    {
        difficulty: "medium",
        question: "Which CSS property is used to change the background color?",
        options: [
            "color",
            "background-color",
            "bg-color",
            "background"
        ],
        answer: "background-color"
    },

    {
        difficulty: "medium",
        question: "Which event occurs when a user clicks an HTML element?",
        options: [
            "onchange",
            "onclick",
            "onload",
            "onhover"
        ],
        answer: "onclick"
    },

    {
        difficulty: "medium",
        question: "Which JavaScript method selects an element by its ID?",
        options: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],
        answer: "getElementById()"
    },


    // ================= HARD =================

    {
        difficulty: "hard",
        question: "What does the JavaScript event loop primarily manage?",
        options: [
            "CSS styling",
            "Asynchronous operations",
            "HTML structure",
            "Database tables"
        ],
        answer: "Asynchronous operations"
    },

    {
        difficulty: "hard",
        question: "What is the time complexity of binary search on a sorted array?",
        options: [
            "O(n)",
            "O(log n)",
            "O(n²)",
            "O(1)"
        ],
        answer: "O(log n)"
    },

    {
        difficulty: "hard",
        question: "Which data structure follows the LIFO principle?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Linked List"
        ],
        answer: "Stack"
    },

    {
        difficulty: "hard",
        question: "Which data structure follows the FIFO principle?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: "Queue"
    },

    {
        difficulty: "hard",
        question: "What is the purpose of localStorage in JavaScript?",
        options: [
            "Store data in the browser",
            "Create CSS styles",
            "Run SQL queries",
            "Create HTML tags"
        ],
        answer: "Store data in the browser"
    },

    {
        difficulty: "hard",
        question: "Which HTTP status code means 'Not Found'?",
        options: [
            "200",
            "301",
            "404",
            "500"
        ],
        answer: "404"
    },

    {
        difficulty: "hard",
        question: "Which concept allows an object to take many forms in programming?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Compilation"
        ],
        answer: "Polymorphism"
    },

    {
        difficulty: "hard",
        question: "Which algorithm is commonly used to find the shortest path in a weighted graph with non-negative edges?",
        options: [
            "Bubble Sort",
            "Dijkstra's Algorithm",
            "Binary Search",
            "Linear Search"
        ],
        answer: "Dijkstra's Algorithm"
    },

    {
        difficulty: "hard",
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Advanced Program Integration",
            "Application Process Internet",
            "Automated Programming Instruction"
        ],
        answer: "Application Programming Interface"
    },

    {
        difficulty: "hard",
        question: "Which SQL command is used to retrieve data from a database?",
        options: [
            "INSERT",
            "UPDATE",
            "SELECT",
            "DELETE"
        ],
        answer: "SELECT"
    }
];


// ======================================================
// GAME VARIABLES
// ======================================================

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer = null;

let selectedDifficulty = "easy";
let filteredQuestions = [];


// Prevent multiple answers
let answerSelected = false;


// ======================================================
// HTML ELEMENTS
// ======================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const easyBtn = document.getElementById("easy-btn");
const mediumBtn = document.getElementById("medium-btn");
const hardBtn = document.getElementById("hard-btn");

const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumberElement =
    document.getElementById("question-number");

const timerElement = document.getElementById("timer");

const scoreElement = document.getElementById("score");
const percentageElement =
    document.getElementById("percentage");

const highScoreElement =
    document.getElementById("high-score");

const resultMessageElement =
    document.getElementById("result-message");

const confettiContainer =
    document.getElementById("confetti-container");

const progressBar =
    document.getElementById("progress-bar");

const clickSound =
    document.getElementById("click-sound");


// ======================================================
// SOUND
// ======================================================

function playClickSound() {

    if (!clickSound) {
        return;
    }

    clickSound.currentTime = 0;

    const soundPromise = clickSound.play();

    if (soundPromise !== undefined) {

        soundPromise.catch(function() {
            // Ignore browser audio restrictions
        });

    }
}


// ======================================================
// DIFFICULTY BUTTONS
// ======================================================

easyBtn.addEventListener("click", function() {

    playClickSound();

    selectedDifficulty = "easy";

    startQuiz();
});


mediumBtn.addEventListener("click", function() {

    playClickSound();

    selectedDifficulty = "medium";

    startQuiz();
});


hardBtn.addEventListener("click", function() {

    playClickSound();

    selectedDifficulty = "hard";

    startQuiz();
});


// ======================================================
// START QUIZ
// ======================================================

function startQuiz() {

    // Stop previous timer
    clearInterval(timer);

    // Reset quiz
    currentQuestion = 0;
    score = 0;
    timeLeft = 15;
    answerSelected = false;

    // Filter questions
    filteredQuestions = questions.filter(function(question) {

        return question.difficulty === selectedDifficulty;

    });


    // Safety check
    if (filteredQuestions.length === 0) {

        alert(
            "No questions available for " +
            selectedDifficulty +
            " difficulty."
        );

        return;
    }


    // Hide start and result screens
    startScreen.classList.add("hide");
    resultScreen.classList.add("hide");

    // Show quiz
    quizScreen.classList.remove("hide");


    // Reset confetti
    confettiContainer.innerHTML = "";


    // Show first question
    showQuestion();
}


// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

    // Stop previous timer
    clearInterval(timer);

    answerSelected = false;


    const current =
        filteredQuestions[currentQuestion];


    // Safety check
    if (!current) {

        showResult();

        return;
    }


    // Question number
    questionNumberElement.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        filteredQuestions.length;


    // Question text
    questionElement.textContent =
        current.question;


    // Clear old options
    optionsElement.innerHTML = "";


    // Create options
    current.options.forEach(function(option) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.textContent = option;

        button.classList.add("option-btn");


        button.addEventListener("click", function() {

            playClickSound();

            selectAnswer(option);

        });


        optionsElement.appendChild(button);

    });


    // Hide next button
    nextBtn.style.display = "none";


    // Update progress
    updateProgress();


    // Start timer
    startTimer();
}


// ======================================================
// PROGRESS BAR
// ======================================================

function updateProgress() {

    if (!progressBar) {
        return;
    }


    const progress =
        ((currentQuestion + 1) /
        filteredQuestions.length) * 100;


    progressBar.style.width =
        progress + "%";
}


// ======================================================
// SELECT ANSWER
// ======================================================

function selectAnswer(selectedAnswer) {

    // Prevent selecting another answer
    if (answerSelected) {
        return;
    }

    answerSelected = true;


    const current =
        filteredQuestions[currentQuestion];


    const correctAnswer =
        current.answer;


    const buttons =
        document.querySelectorAll(".option-btn");


    buttons.forEach(function(button) {

        button.disabled = true;


        // Correct answer
        if (button.textContent === correctAnswer) {

            button.style.backgroundColor =
                "lightgreen";

        }


        // Wrong selected answer
        if (
            button.textContent === selectedAnswer &&
            selectedAnswer !== correctAnswer
        ) {

            button.style.backgroundColor =
                "salmon";

        }

    });


    // Increase score
    if (selectedAnswer === correctAnswer) {

        score++;

    }


    // Stop timer
    clearInterval(timer);


    // Show next button
    nextBtn.style.display =
        "inline-block";
}


// ======================================================
// TIMER
// ======================================================

function startTimer() {

    clearInterval(timer);


    timeLeft = 15;


    updateTimer();


    timer = setInterval(function() {

        timeLeft--;


        updateTimer();


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);
}


// ======================================================
// UPDATE TIMER
// ======================================================

function updateTimer() {

    timerElement.textContent =
        "Time: " +
        timeLeft +
        "s";
}


// ======================================================
// TIME UP
// ======================================================

function timeUp() {

    // Prevent duplicate answer
    if (answerSelected) {
        return;
    }


    answerSelected = true;


    const current =
        filteredQuestions[currentQuestion];


    const correctAnswer =
        current.answer;


    const buttons =
        document.querySelectorAll(".option-btn");


    buttons.forEach(function(button) {

        button.disabled = true;


        // Show correct answer
        if (button.textContent === correctAnswer) {

            button.style.backgroundColor =
                "lightgreen";

        }

    });


    nextBtn.style.display =
        "inline-block";
}


// ======================================================
// NEXT QUESTION
// ======================================================

nextBtn.addEventListener("click", function() {

    playClickSound();


    clearInterval(timer);


    currentQuestion++;


    if (
        currentQuestion <
        filteredQuestions.length
    ) {

        showQuestion();

    } else {

        showResult();

    }

});


// ======================================================
// SHOW RESULT
// ======================================================

function showResult() {

    clearInterval(timer);


    quizScreen.classList.add("hide");

    resultScreen.classList.remove("hide");


    const totalQuestions =
        filteredQuestions.length;


    // Score
    scoreElement.textContent =
        score +
        " / " +
        totalQuestions;


    // Percentage
    const percentage =
        totalQuestions > 0
            ? (score / totalQuestions) * 100
            : 0;


    percentageElement.textContent =
        "Percentage: " +
        percentage.toFixed(0) +
        "%";


    // ==================================================
    // DIFFICULTY-WISE HIGH SCORE
    // ==================================================

    const highScoreKey =
        "highScore_" +
        selectedDifficulty;


    let highScore =
        Number(
            localStorage.getItem(highScoreKey)
        );


    if (
        !Number.isFinite(highScore) ||
        score > highScore
    ) {

        highScore = score;


        localStorage.setItem(
            highScoreKey,
            String(highScore)
        );

    }


    highScoreElement.textContent =
        "High Score: " +
        highScore +
        " / " +
        totalQuestions;


    // ==================================================
    // RESULT MESSAGE
    // ==================================================

    confettiContainer.innerHTML = "";


    if (percentage >= 80) {

        resultMessageElement.textContent =
            "Excellent! 🎉🏆";

        createConfetti();

    }

    else if (percentage >= 60) {

        resultMessageElement.textContent =
            "Great Job! 🎊";

        createConfetti();

    }

    else if (percentage >= 40) {

        resultMessageElement.textContent =
            "Good Try! 🙂";

    }

    else {

        resultMessageElement.textContent =
            "Keep Practicing! 💪";

    }
}


// ======================================================
// RESTART
// ======================================================

restartBtn.addEventListener("click", function() {

    playClickSound();

    clearInterval(timer);

    // Restart same difficulty
    startQuiz();

});


// ======================================================
// CONFETTI
// ======================================================

function createConfetti() {

    if (!confettiContainer) {
        return;
    }


    confettiContainer.innerHTML = "";


    for (let i = 0; i < 50; i++) {

        const confetti =
            document.createElement("span");


        confetti.textContent = "🎉";


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-20px";


        confetti.style.fontSize =
            "20px";


        confetti.style.animation =
            "fall 3s linear forwards";


        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";


        confettiContainer.appendChild(
            confetti
        );

    }
}