let currentQuestion = 0;

function init() {
    document.getElementById("questionsFullNum").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionsNum").innerHTML = currentQuestion + 1;

    document.getElementById("questionText").innerHTML = question['question'];
    document.getElementById("answer1").innerText = question['answer_1'];
    document.getElementById("answer2").innerText = question['answer_2'];
    document.getElementById("answer3").innerText = question['answer_3'];
    document.getElementById("answer4").innerText = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let answer = document.getElementById(selection);
    let selectedAnswer = parseInt(selection.slice(-1));
    if (selectedAnswer === question.right_answer) {
        answer.style.backgroundColor = "green";
    } else {
        answer.style.backgroundColor = "red";
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}