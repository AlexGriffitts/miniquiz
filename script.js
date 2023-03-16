var startQuizbut = document.querySelector("#startQuiz");
var startButton = document.querySelector("#startbutton");
var timer = document.querySelector("#seconds");
var question = document.querySelector("#questions");
var Quizchoices = document.querySelector("#answers");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var score = document.querySelector("#score");
var isCorrect = true;
var saveScore = document.querySelector("#saveScore");
var highscores = [];  
var newForm = document.createElement("form");
var input = document.createElement("input");
var submit = document.createElement("input");

//set the score
var Userscore = 0;

//start at first question
var currentQuestion = 0;

// set timer
var time = 60;

//start timer
function startTimer() {
  time = 60;
  Userscore = 0;
  currentQuestion = 0;
  var timer = setInterval(function() {
    time--;
    timer.textContent = time;
    }, 1000);
  }

//start quiz
function startQuiz() {
  startTimer()
  startButton.innerHTML = "";
  score.innerHTML = "";
  question.innerHTML = questions[currentQuestion].title;
  

  //make buttons for choices
  for (i = 0; i < 4; i++) {
    var buttons = document.createElement("button");
    buttons.innerHTML = questions[currentQuestion].choices[i];
    Quizchoices.children[i].append(buttons);
    buttons.className = "btn btn-primary btn-lg btn-block";
  
  }
}

//check if answer is correct
choiceA.addEventListener("click", function() {
  if (questions[currentQuestion].choices[0] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
});

choiceB.addEventListener("click", function() {
  if (questions[currentQuestion].choices[1] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
}); 

choiceC.addEventListener("click", function() {  
  if (questions[currentQuestion].choices[2] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
});

choiceD.addEventListener("click", function() {
  if (questions[currentQuestion].choices[3] === questions[currentQuestion].answer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
}); 

//display result function
function displayResult() {
  if (isCorrect) {
    Userscore += 10;
    score.innerHTML = "You Are Correct!";
    increaseQuestion();
  } else {
    time -= 10;
    score.innerHTML = "You Are Wrong!";
    increaseQuestion();
  }                       
}

//increase question function
function increaseQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length && time > 0) {
    question.innerHTML = questions[currentQuestion].choices;
    var choices = questions[currentQuestion].choices;
    choiceA.innerHTML = choices[0];
    choiceB.innerHTML = choices[1];
    choiceC.innerHTML = choices[2];
    choiceD.innerHTML = choices[3];
  }else {


   question.innerHTML = "You have finished the quiz with " + Userscore + " points!";
    choiceA.innerHTML = "";
    choiceB.innerHTML = "";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";
    score.innerHTML = "";
    time.innerHTML = "";
    highscore();
  // } else {
  //   question.innerHTML = questions[currentQuestion].title;
    
  //   var choices = questions[currentQuestion].choices;
  //   var buttons = [choiceA, choiceB, choiceC, choiceD];
  //   for (i = 0; i < 4; i++) {
  //     buttons[i].innerHTML = choices[i];


  //   }
  }

  //highscore function
  function highscore() {
    score.appendChild(newForm);
    input.setAttribute("type", "text");
    input.setAttribute("name", "Enter Initials");
    input.className = "setInitials";
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.className = "submitInitials";
    newForm.appendChild(input);
    newForm.appendChild(submit);


    newForm.addEventListener("submit", function(event) {
      event.preventDefault();
     question.innerHTML= "High Scores";
      var result = {initials: input.value, score: Userscore};
    });
}
}
startQuizbut.addEventListener("click", startQuiz);



