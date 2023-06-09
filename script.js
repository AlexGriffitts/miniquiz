var startQuizbut = document.querySelector("#startQuiz");
var startButton = document.querySelector("#startButton");
var timer = document.querySelector("#seconds");
var quizquest = document.querySelector("#quizquests");
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
  interval = setInterval(function() {
    time--;
    timer.textContent = time;
    }, 1000);
  }

//start quiz
function startQuiz() {
  startTimer()
  startButton.innerHTML = "";
  score.innerHTML = "";
  quizquest.innerHTML = questions[currentQuestion].title;
 

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
  if (questions[currentQuestion].choices[0] === questions[currentQuestion].correctAnswer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
});

choiceB.addEventListener("click", function() {
  if (questions[currentQuestion].choices[1] === questions[currentQuestion].correctAnswer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
}); 

choiceC.addEventListener("click", function() {  
  if (questions[currentQuestion].choices[2] === questions[currentQuestion].correctAnswer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
});

choiceD.addEventListener("click", function() {
  if (questions[currentQuestion].choices[3] === questions[currentQuestion].correctAnswer) {
    isCorrect = true;
    displayResult();
  } else {
    isCorrect = false;
    displayResult();
  }
}); 

//display result function
function displayResult() {
  if (isCorrect === true) {
    Userscore = Userscore + 10;
    score.innerHTML = "You Are Correct!";
    increaseQuestion();
  } else {
    time = time - 5;
    score.innerHTML = "You Are Wrong!";
    increaseQuestion();
  }                       
}

//increase question function
function increaseQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length && time > 0) {
    quizquest.innerHTML = questions[currentQuestion].title;
    var choices = questions[currentQuestion].choices;
    choiceA.innerHTML = choices[0];
    choiceB.innerHTML = choices[1];
    choiceC.innerHTML = choices[2];
    choiceD.innerHTML = choices[3];
  }else {


   quizquest.innerHTML = "You have finished the quiz with " + Userscore + " points!";
    choiceA.innerHTML = "";
    choiceA.setAttribute("style", "display: none");
    choiceB.innerHTML = "";
    choiceB.setAttribute("style", "display: none");
    choiceC.innerHTML = "";
    choiceC.setAttribute("style", "display: none");
    choiceD.innerHTML = "";
    choiceD.setAttribute("style", "display: none");
    score.innerHTML = "";
    timer.innerHTML = "";
    highscore();
 
  }

  //highscore function
  function highscore() {
    score.appendChild(newForm);
    input.setAttribute("type", "text");
    input.setAttribute("name", "Enter Initials");
    input.setAttribute("placeholder", "Enter Initials");
    input.className = "setInitials";
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.className = "submitInitials";
    newForm.appendChild(input);
    newForm.appendChild(submit);


    newForm.addEventListener("submit", function(event) {
      event.preventDefault();
     quizquest.innerHTML= "High Scores";
      var result = {initials: input.value, score: Userscore};

      localStorage.setItem("highscores", JSON.stringify(result));

      var highscorestorage = JSON.parse(localStorage.getItem("highscores"));
      console.log(highscorestorage);

      for (var i = 0; i < highscorestorage.length; i++) {
        var scoreItem = document.createElement("li");
        scoreItem.textContent = highscorestorage[i].initials + " " + highscorestorage[i].score;
      }
    });
}
}
startQuizbut.addEventListener("click", startQuiz);



