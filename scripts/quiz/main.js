const startQuizButton = document.querySelector('.start');
const progressBar = document.getElementById("questionProgress");
const scoreMeter = document.getElementById("scoreMeter");

let questions = [
  {
    name: "q1",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
  {
    name: "q2",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
  {
    name: "q3",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
  {
    name: "q4",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
  {
    name: "q5",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
  {
    name: "end",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q1-choice"]:checked');

      if (selectedAnswer.value === "binary") return "correct";
    }
  },
]

let correctQuestions = [];
let score = 0;

let currentQuestion = questions[0];

function updateBars() {
  progressBar.value = questions.indexOf(currentQuestion);
  progressBar.max = 10;

  if (questions.indexOf(currentQuestion) === 0) {
    scoreMeter.value = score;
    scoreMeter.max = 1;
  } else {
    scoreMeter.value = score;
    if (questions.indexOf(currentQuestion) === 1) {scoreMeter.max = questions.indexOf(currentQuestion)} else {scoreMeter.max = questions.indexOf(currentQuestion) - 1};
  };
}

startQuizButton.addEventListener('click', () => {
  const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);

  elementToAnimate.classList.add("active", "animation-one");

  currentQuestion = questions[questions.indexOf(currentQuestion) + 1];
  startQuizButton.classList.add('inactive');
  document.querySelector('.activity-description').classList.add('inactive');
  updateBars();
});

document.querySelectorAll('.next-question').forEach((element) => {
  element.addEventListener('click', () => {
    if (currentQuestion.name === "end") return;

    const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);
    const previousQuestionPart = document.querySelector(`.${questions[questions.indexOf(currentQuestion) - 1].name}`)
    const previousQuestion = questions[questions.indexOf(currentQuestion) - 1];

    if (previousQuestion.checkAnswer() === "correct") {
      correctQuestions.push(1);
      score += 1;
    } else {
      correctQuestions.push(0);
    };

    previousQuestionPart.classList.replace("animation-one", "animation-two");
    setTimeout(() => {
      previousQuestionPart.classList.remove("animation-two", "active");
      elementToAnimate.classList.add("active", "animation-one");
    }, 1000);

    currentQuestion = questions[questions.indexOf(currentQuestion) + 1];
    updateBars();
  });
});

updateBars();