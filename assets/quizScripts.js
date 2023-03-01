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
var initials = document.getElementById("initials");

var timer;
var currentQuest;
var timeLeft = 60;
var questionCounter = 0;
var score = quizList.length;

startBtn.addEventListener("click", getStarted);

function getStarted() {
  startBtn.disabled = true;
  //remove the class-hidden
  document.getElementById("card").classList.remove("hidden");

  setTime();
  getQuestions();
}

function setTime() {
  timer = setInterval(() => {
    timeLeft--;
    timeSpan.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      score = 0;
      quizCompleted();
    }
  }, 1000);
}

function getQuestions() {
  currentQuest = quizList[questionCounter];
  question.innerText = currentQuest.title;

  //clear the previous answers
  choiceList.innerHTML = "";

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

choiceList.addEventListener("click", checkAnswer);

// check answers. If they're are wrong then points will be deducted
function checkAnswer(event) {
  var clicked = event.target;

  if (clicked.value !== quizList[questionCounter].answer) {
    timeLeft -= 10;
    score--;

    if (score < 0) {
      score = 0;
    }

    if (timeLeft < 0) {
      time = 0;
    }
    timeSpan.innerText = timeLeft;
  }

  questionCounter++;

  if (timeLeft <= 0 || questionCounter === quizList.length) {
    quizCompleted();
  } else {
    getQuestions();
  }
}

function quizCompleted() {
  clearInterval(timer);

  document.getElementById("end-quiz").classList.remove("hide");

  questions.setAttribute("class", "hide");

  var finalScore = document.getElementById("final-score");
  finalScore.textContent = score;
}

//get the intials and store in the localstorage.
// function saveInitials(){

//   var getInitials=initials.value.trim();

//   if(getInitials!==""){
//     var highScore
//   }

// }
