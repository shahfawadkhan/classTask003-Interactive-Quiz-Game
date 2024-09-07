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
let resultText = document.createElement("h1");
resultText.style.color = '#16325B'
// resultText.textContent = `Your marks are ${score} out of ${questions.length}`;
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
        optionArea[i].disabled = false;
        optionArea[i].classList.remove('important1');
        optionArea[i].classList.remove('important2');
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

let correctSound = document.getElementById("correct");
let wrongSound = document.getElementById("wrong");

function optionClicked(){
    let correctAnswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;
    if(correctAnswer === selectedAnswer){
        score++;
        this.style.backgroundColor = 'green'
        this.style.color = 'white'
        this.innerHTML += ' ✔';
        this.classList.add('important1')
        // this.style.setProperty('color', 'white', 'important');
        correctSound.play()
        resultText.textContent = `Your marks are ${score} out of ${questions.length}`;
        // console.log(resultText)
        disableOptions();
        for (let i = 0; i < optionArea.length; i++) {
            optionArea[i].removeEventListener('mouseover', hoverOnbtn);
        optionArea[i].removeEventListener('mouseout', mouseOut);
        }
        
        // console.log(score)
    }  
    else{

        this.style.backgroundColor = 'red';
        this.style.color = 'white';
        this.innerHTML += ' ✖';
        this.classList.add('important2')
        wrongSound.play();

        for (let i = 0 ; i<optionArea.length;i++){
            if(optionArea[i].textContent === questions[questionIndex].answer){
                optionArea[i].style.backgroundColor = 'green';
                optionArea[i].style.color = 'white';
                optionArea[i].innerHTML += ' ✔';
                optionArea[i].classList.add('important1')
            }
        }
        disableOptions()
    }
    
}

function disableOptions() {
    for (let i = 0; i < optionArea.length; i++) {
        optionArea[i].disabled = true; 
       
        optionArea[i].style.color = 'black';
    }
}
// console.log(score)

function hoverOnbtn(){
    this.style.backgroundColor = '#16325B'
    this.style.color = 'white';
}
function mouseOut(){
    this.style.backgroundColor = '';
    this.style.color = '';
}


document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    const keyPressed = event.key;
    const optionIndex = parseInt(keyPressed) - 1;
    if (optionIndex >= 0 && optionIndex < optionArea.length) {
        optionArea[optionIndex].click();
    }}