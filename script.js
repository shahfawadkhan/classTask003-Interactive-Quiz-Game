const questions = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the background color?",
        options: [
            "color",
            "background-color",
            "bgcolor",
            "background"
        ],
        answer: "background-color"
    },
    {
        question: "How do you center a block element horizontally?",
        options: [
            "text-align: center;",
            "margin: 0 auto;",
            "display: flex;",
            "padding: 0 auto;"
        ],
        answer: "margin: 0 auto;"
    },
    {
        question: "Which of the following CSS properties controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        answer: "font-size"
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        options: [
            "text-transform: capitalize;",
            "text-transform: uppercase;",
            "text-transform: lowercase;",
            "text-transform: none;"
        ],
        answer: "text-transform: capitalize;"
    }
];

let questionIndex = 0;
let marks = 0;
let questionArea = document.querySelector(".question > h2");
let optionArea = document.querySelectorAll(".btn");

function intializeQuize() {
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].style.backgroundColor = '';
        optionArea[i].style.color = '';
    }

    questionArea.textContent = questions[questionIndex].question;
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].textContent = questions[questionIndex].options[i];
    }
}
intializeQuize();


let quizGame = document.querySelector(".quiz-game");
let restartBtn = document.querySelector("#restart");
const nextBtn = document.getElementById("next-btn");

// moving to nextttt questionn

let resultSection = document.querySelector('.resultSection');
let resultText = document.querySelector('.resultSection h1')
nextBtn.addEventListener("click", moveToNextQuestion);

function moveToNextQuestion() {
    
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].addEventListener('mouseover', hoverOnbtn);
        optionArea[i].addEventListener('mouseout', mouseOut);
    }

    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].disabled = false;
        optionArea[i].classList.remove('important1');
        optionArea[i].classList.remove('important2');
    }

    
    if (questionIndex < questions.length) {
        intializeQuize();
    } else {
      
        quizGame.style.display = 'none';
        // resultText.textContent = `Your marks are ${marks} out of ${questions.length}`;
        resultSection.style.display = 'block';
        resultText.textContent = `Your marks are ${marks} / ${questions.length}`
        // restartBtn.style.display = 'block';
    }
}


// restarting quiz


restartBtn.addEventListener("click", quizRestart);

function quizRestart() {
    quizGame.style.display = 'block';
    resultSection.style.display = 'none'; 
    marks = 0; 
    questionIndex = 0; 
    intializeQuize(); 
}

for (let i = 0; i < optionArea.length; i++) {
    optionArea[i].addEventListener("click", optionClicked);
}

let correctSound = document.getElementById("correct");
let wrongSound = document.getElementById("wrong");

var obj = this;
console.log(this)
function optionClicked() {
    let correctAnswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;
    
    if (correctAnswer === selectedAnswer) {
        // questionIndex++;
        marks++; 
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
        this.innerHTML += ' ✔';
        this.classList.add('important1');
        correctSound.play();
        disableOptions();
        for (let i = 0; i < optionArea.length; i++) {
            optionArea[i].removeEventListener('mouseover', hoverOnbtn);
            optionArea[i].removeEventListener('mouseout', mouseOut);
        }
    } else {
        // questionIndex++;
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.innerHTML += ' ✖';
        this.classList.add('important2');
        wrongSound.play();

        for (let i = 0; i < optionArea.length; i++) {
            optionArea[i].removeEventListener('mouseover', hoverOnbtn);
            optionArea[i].removeEventListener('mouseout', mouseOut);

            if (optionArea[i].textContent === questions[questionIndex].answer) {
                optionArea[i].style.backgroundColor = 'green';
                optionArea[i].style.color = 'white';
                optionArea[i].innerHTML += ' ✔';
                optionArea[i].classList.add('important1');
            }
        }
        
        disableOptions();
    }
    questionIndex++;
}

function disableOptions() {
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].disabled = true;
        optionArea[i].style.color = 'black';
    }
}

for (let i = 0; i < optionArea.length; i++) {
    optionArea[i].addEventListener('mouseover', hoverOnbtn);
    optionArea[i].addEventListener('mouseout', mouseOut);
}

function hoverOnbtn() {
    this.style.backgroundColor = '#16325B';
    this.style.color = 'white';
}

function mouseOut() {
    this.style.backgroundColor = '';
    this.style.color = '';
}

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const keyPressed = event.key;
    const optionIndex = parseInt(keyPressed) - 1;
    if (optionIndex >= 0 && optionIndex < optionArea.length) {
        optionArea[optionIndex].click();
    }
}
