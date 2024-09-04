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

function showQuestion(){
    let QuestionArea = document.querySelector(".question h2");
    let optionsArea = document.querySelectorAll(".btn");

    QuestionArea.textContent = questions[questionIndex].question;
    for(let i=0 ; i<optionsArea.length; i++){
        optionsArea[i].textContent = questions[questionIndex].options[i];
    }
    // questionIndex=++;
}
showQuestion();

const nextQuestion = document.getElementById("next-btn");
let restartBtn =  document.getElementById("restart");
nextQuestion.addEventListener("click" , moveToNextQuestion);
function moveToNextQuestion(){
    questionIndex++;
    if(questionIndex<questions.length){
       showQuestion();
    }
    else{
        alert('quiz completed')
       
       restartBtn.style.display = 'block';
       nextQuestion.style.display = 'none';
       
    }
}
restartBtn.addEventListener('click' , restartQuiz);
function restartQuiz(){
    questionIndex++;
    if(questionIndex<questions.length){
       showQuestion();
    }
}