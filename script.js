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

function showQuestion(){
    let questionArea = document.querySelector(".question h2");
    let optionsArea = document.querySelectorAll(".btn");

    questionArea.textContent = questions[questionIndex].question;
    for(let i=0 ; i<optionsArea.length; i++){
        optionsArea[i].textContent = questions[questionIndex].options[i];
    }
}
showQuestion();

const quizGame = document.querySelector(".quiz-game");
const nextQuestion = document.getElementById("next-btn");
let restartBtn =  document.getElementById("restart");
// Moving to next question

nextQuestion.addEventListener("click" , moveToNextQuestion);
function moveToNextQuestion(){
    for(let i = 0 ; i<optionsArea.length ; i++){
        optionsArea[i].style.backgroundColor = '';
    
    }
    questionIndex++;
    if(questionIndex<questions.length){
       showQuestion();
    }
    else{
        alert(`Quiz completed Your marks are ${marks} out of ${questions.length}`)
        document.querySelector('.answers').style.display = 'none';

        
       restartBtn.style.display = 'block';
       nextQuestion.style.display = 'none';
          
    }
}

//for quiz restarting
restartBtn.addEventListener('click' , restartQuiz);
function restartQuiz(){
    
    document.querySelector('.answers').style.display = 'block';
    marks = 0;
    alert('Quiz Restarted')
    restartBtn.style.display = 'none';
    nextQuestion.style.display = 'block';
    questionIndex = 0;
    if(questionIndex<questions.length){
       showQuestion();
    }
}
let optionsArea = document.querySelectorAll(".btn");


for (let i = 0; i < optionsArea.length; i++) {
    optionsArea[i].addEventListener('click', buttonClicked);
}


function buttonClicked(){
    let correctAnswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;
    console.log(selectedAnswer)
    if(selectedAnswer === correctAnswer){
        console.log('corrrectt')
        this.style.backgroundColor = 'green';
        marks++;
        console.log(marks)
    }
    else{
        this.style.backgroundColor = 'red';
    }
}
