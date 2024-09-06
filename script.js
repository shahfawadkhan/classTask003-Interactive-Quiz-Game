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
let score = 0;
const questionArea = document.querySelector(".question > h2");
const optionArea = document.querySelectorAll(".btn")
// console.log(questionArea)
//initialize quize

function intializeQuize(){

    for(let i = 0 ; i<optionArea.length ; i++){
        optionArea[i].style.backgroundColor = '';
        optionArea[i].style.color = '';
    }

    questionArea.textContent = questions[questionIndex].question;
    for(let i = 0 ; i<optionArea.length ; i++){
        optionArea[i].textContent = questions[questionIndex].options[i];
    }
}
intializeQuize()
//moving to next Question
let quizGame = document.querySelector(".quiz-game")
let restartBtn = document.querySelector("#restart")
const nextBtn = document.getElementById("next-btn");

let result = document.createElement("div");
let resultText = document.createElement("h1")
resultText.textContent = `Your marks are ${score} out of ${questions.length}`;
result.appendChild(resultText);
result.style.backgroundColor= 'white';
result.style.padding = '40px';
result.style.borderRadius = '40px'
result.style.display = 'none';
result.appendChild(restartBtn)
document.body.appendChild(result)

nextBtn.addEventListener("click" , moveToNextQuestion);
function moveToNextQuestion(){

    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].disabled = false; // Disable the button or option
    }

    questionIndex++;
    if(questionIndex < questions.length){
        intializeQuize();
    }
    else{
        alert('quiz Ended');
        quizGame.style.display = 'none';
        result.style.display = 'block'
        restartBtn.style.display = 'block'
    }
}

restartBtn.addEventListener("click" , quizRestart);
function quizRestart(){
    score = 0;
    questionIndex = 0;
    quizGame.style.display = 'block';
    result.style.display = 'none'
    intializeQuize()
}

for(let i=0;i<optionArea.length;i++){
    optionArea[i].addEventListener("click" , optionClicked);
}

// let correctAudio = document.getElementById("correct");
// let wrongAudio = d

function optionClicked(){
    let correctAnswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;
    if(correctAnswer === selectedAnswer){
        score++;
        this.style.backgroundColor = 'green'
        this.style.color = 'white'
        this.innerHTML += ' ✔';
        resultText.textContent = `Your marks are ${score} out of ${questions.length}`;
        // console.log(resultText)
        disableOptions()
        // console.log(score)
    }  
    else{
        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.innerHTML += ' ✖';
        for (let i = 0 ; i<optionArea.length;i++){
            if(optionArea[i].textContent === questions[questionIndex].answer){
                optionArea[i].style.backgroundColor = 'green';
                optionArea[i].style.color = 'white';
                optionArea[i].innerHTML += ' ✔';
                      }
        }
        disableOptions()
    }
    
}

function disableOptions() {
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].disabled = true; // Disable the button or option
    }
}
// console.log(score)
