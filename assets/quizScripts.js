var quizList = [
  {
    title: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

var startBtn = document.getElementById("start-button");
var questions = document.getElementById("questions");
var timeSpan = document.getElementById("timer-count");
var question = document.getElementById("question");
var choiceList = document.getElementById("options");

var currentQuest;
var timeLeft = 101;
var questionCounter = 0;

startBtn.addEventListener("click", getStarted);

function getStarted() {
  startBtn.disabled = true;
  //remove the class-hidden
  document.getElementById("card").classList.remove("hidden");

  setTime();
  getQuestions();
}

function setTime() {
  var timer = setInterval(() => {
    timeLeft--;
    timeSpan.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function getQuestions() {
  currentQuest = quizList[questionCounter];
  question.innerText = currentQuest.title;

  // to active the options when being clicked.
  for (var i = 0; i < currentQuest.options.length; i++) {
    var choice = currentQuest.options[i];

    var choiceBtn = document.createElement("button");

    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = choice;

    choiceList.appendChild(choiceBtn);
  }
}

choiceList.addEventListener("click",checkAnswer);

function checkAnswer(event) {
  var clicked=event.target;
}