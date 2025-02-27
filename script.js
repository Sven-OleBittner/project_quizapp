let currentQuestion = 0;
let currentRightAnswer = 0;
let audioRight = new Audio('./assets/sounds/right.mp3');
let audioWrong = new Audio('./assets/sounds/wrong.mp3');

function init() {
  document.getElementById("questionsFullNum").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    endScreen();
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    console.log(percent);
    document.getElementById("progressBar").style = `width: ${percent}%`;
    document.getElementById("progressBar").innerHTML = `${percent}%`;

    let question = questions[currentQuestion];
    document.getElementById("questionsNum").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer1").innerText = question["answer_1"];
    document.getElementById("answer2").innerText = question["answer_2"];
    document.getElementById("answer3").innerText = question["answer_3"];
    document.getElementById("answer4").innerText = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedAnswer = parseInt(selection.slice(-1));
  let rightAnswerId = `answer${question.right_answer}`;
  if (selectedAnswer === question.right_answer) {
    document.getElementById(selection).parentNode.classList.add("answer_right");
    audioRight.play();
    currentRightAnswer++;
  } else {
    document.getElementById(selection).parentNode.classList.add("answer_false");
    audioWrong.play();
    document
      .getElementById(rightAnswerId)
      .parentNode.classList.add("answer_right");
  }
  document.getElementById("nextQuestion").disabled = false;
}

function nextQuestion() {
  document.getElementById("nextQuestion").disabled = true;
  currentQuestion++;
  resetQuestion("answer1");
  resetQuestion("answer2");
  resetQuestion("answer3");
  resetQuestion("answer4");
  showQuestion();
}

function resetQuestion(answerId) {
  document.getElementById(answerId).parentNode.classList.remove("answer_false");
  document.getElementById(answerId).parentNode.classList.remove("answer_right");
}

function endScreen() {
  document.getElementById("cardImg").src = "./assets/img/brainbg.jpg";
  document.getElementById("fullNum").innerHTML = questions.length;
  document.getElementById("cardBody").classList.add("d_none");
  document.getElementById("rightAnswerNum").innerHTML = currentRightAnswer;
  document.getElementById("quizEndScreen").classList.remove("d_none");
}

function startNewQuiz() {
  document.getElementById("cardImg").src = "./assets/img/html_code.jpg";
  document.getElementById("cardBody").classList.remove("d_none");
  document.getElementById("quizEndScreen").classList.add("d_none");
  currentQuestion = 0;
  currentRightAnswer = 0;
 init();
}
