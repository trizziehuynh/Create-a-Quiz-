//To have the questions and the timer appear after clicking on the start button.

document.getElementById("start-button").addEventListener("click", (event) => {
  document.getElementById("card").classList.remove("hidden");
});




var quizList = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hot Mail",
    c: "How to Make Lasagna",
    correct: "a",
  },
  {
    question:
      "What is always a welcome page, and explains the purpose or topic of the site?",
    a: "Page 4",
    b: "Homepage",
    c: "Table of contents",
    correct: "b",
  },
  {
    question: "What should values always be enclosed in?",
    a: "Quotation marks",
    b: "Commas",
    c: "ParenthesisC.",
    correct: "a",
  },
  {
    question: "< br  / > What type of tag is this?",
    a: "Break tag",
    b: "A broken one",
    c: "An opening tag",
    correct: "a",
  },
];


var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var questionLi = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var submitBtn = document.getElementById("submit");

var currentQuiz=0;
var score=0;

loadQuiz();

function loadQuiz(){
  deselectAns();

  var currentQuizData=quizList[currentQuiz];
  questionLi.innerText=currentQuizData.question;
  a_text.innerText=currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function deselectAns(){
  answer.forEach(answer=> answer.checked = false)
}

function getSelected(){
  
}