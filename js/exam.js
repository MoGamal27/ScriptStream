const quizData = [
    {
        question: "What does HTML stands for?",
        choices: ["Hightext machine language", "Hypertext Markup Language", "Hypertext and links markup language", "Hypertext Machine language."],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "Which of the following HTML element is used for creating an unordered list?",
        choices: ["ui", "uo", "li", "i"],
        correctAnswer: "ui"
    },
    {
        question: "Which of the following HTML Elements is used for making any text bold ?",
        choices: ["b", "i", "li", "p"],
        correctAnswer: "b"
    }
];

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const choiceElement = document.createElement('label');
        choiceElement.innerHTML = `<input type="radio" name="choice" value="${choice}">${choice}<br>`;
        choicesElement.appendChild(choiceElement);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (!selectedChoice) return;
    const userAnswer = selectedChoice.value;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (userAnswer === correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = `Your score: ${score} out of ${quizData.length}`;
    submitButton.style.display = 'none';
}

displayQuestion();
submitButton.addEventListener('click', checkAnswer);