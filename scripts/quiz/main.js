const startQuizButton = document.querySelector('.start');
const bars = document.querySelector('.bars');

const progressBar = document.getElementById("questionProgress");
const scoreMeter = document.getElementById("scoreMeter");

const progressText = document.getElementById("questionText");
const scoreText = document.getElementById("scoreText");
const finalScore = document.getElementById("finalScore");

const skipButton = document.querySelector('.skip-question');

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
      const selectedAnswer = document.querySelector('input[name="q2-choice"]:checked');

      if (selectedAnswer.value === "hex") return "correct";
    }
  },
  {
    name: "q3",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q3-choice"]:checked');

      if (selectedAnswer.value === "decimal") return "correct";
    }
  },
  {
    name: "q4",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q4-choice"]');

      if (selectedAnswer.value === "1101") return "correct";
    }
  },
  {
    name: "q5",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q5-choice"]');

      if (selectedAnswer.value === "01000111") return "correct";
    }
  },
  {
    name: "q6",
    checkAnswer() {
      const decimalAnswer = document.getElementById("q6-choice-1");
      const hexaDecimalAnswer = document.getElementById("q6-choice-2");

      if (decimalAnswer.value !== "151" && hexaDecimalAnswer.value !== "0x97") return "incorrect";
      
      if (decimalAnswer.value === "151" && hexaDecimalAnswer.value !== "0x97" || decimalAnswer.value !== "151" && hexaDecimalAnswer.value === "0x97") return "half";

      return "correct"
    }
  },
  {
    name: "q7",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q7-choice"]:checked');

      if (selectedAnswer.value === "correct") return "correct";
    }
  },
  {
    name: "q8",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q8-choice"]:checked');

      if (selectedAnswer.value === "correct") return "correct";
    }
  },
  {
    name: "q9",
    checkAnswer() {
      const selectedAnswer = document.querySelector('input[name="q9-choice"]:checked');

      if (selectedAnswer.value === "correct") return "correct";
    }
  },
  {
    name: "q10",
    checkAnswer() {
      const selectedAnswer = document.getElementById("q10-choice");

      if (selectedAnswer.value === "Hello, World!") return "correct";
    }
  },
  {
    name: "end",
    checkAnswer() {
      return 0;
    }
  },
]

let correctQuestions = [];
let score = 0;

let currentQuestion = questions[0];

function updateBars() {
  progressBar.value = questions.indexOf(currentQuestion);
  progressBar.max = 10;
  progressText.innerText = `${questions.indexOf(currentQuestion)}/10`;

  if (questions.indexOf(currentQuestion) === 0) {
    scoreMeter.value = score;
    scoreMeter.max = 1;
    scoreText.innerText = ``;
  } else {
    scoreMeter.value = score;
    if (questions.indexOf(currentQuestion) === 1) {
      scoreMeter.max = questions.indexOf(currentQuestion);
      scoreText.innerText = `${Math.round((score/questions.indexOf(currentQuestion)) * 100)}%`;
    } else {
      scoreMeter.max = questions.indexOf(currentQuestion) - 1;
      scoreText.innerText = `${Math.round((score/(questions.indexOf(currentQuestion) - 1)) * 100)}%`;
    };
  };
}

function done() {
  const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);

  document.querySelector('.activity-description').classList.add('inactive');
  bars.classList.add('inactive');

  const previousQuestionPart = document.querySelector(`.${questions[9].name}`);
  const previousQuestion = questions[9];

  if (previousQuestion.checkAnswer() === "correct") {
    correctQuestions.push(1);
    score += 1;
  } else if (previousQuestion.checkAnswer() === "half") {
    correctQuestions.push(0.5);
    score += 0.5;
  } else {
    correctQuestions.push(0);
  };

  previousQuestionPart.classList.replace("animation-one", "animation-two");
  setTimeout(() => {
    previousQuestionPart.classList.remove("animation-two", "active");
    elementToAnimate.classList.add("active", "animation-one");
  }, 1000);

  finalScore.innerText = `Your Score: ${Math.round((score/10) * 100)}%`;
}

startQuizButton.addEventListener('click', () => {
  const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);

  elementToAnimate.classList.add("active", "animation-one");

  currentQuestion = questions[questions.indexOf(currentQuestion) + 1];
  startQuizButton.classList.add('inactive');
  document.querySelector('.activity-description').classList.add('inactive');
  bars.classList.remove('inactive');
  updateBars();
});

skipButton.addEventListener('click', () => {
    const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);
    const previousQuestionPart = document.querySelector(`.${questions[questions.indexOf(currentQuestion) - 1].name}`)

    previousQuestionPart.classList.replace("animation-one", "animation-two");
    setTimeout(() => {
      previousQuestionPart.classList.remove("animation-two", "active");
      elementToAnimate.classList.add("active", "animation-one");
    }, 1000);

    currentQuestion = questions[questions.indexOf(currentQuestion) + 1];
    finalScore.innerText = `Your Score: ${Math.round((score/10) * 100)}%`;
});

document.querySelectorAll('.next-question').forEach((element) => {
  element.addEventListener('click', () => {
    if (currentQuestion.name === "end") return done();

    const elementToAnimate = document.querySelector(`.${currentQuestion.name}`);
    const previousQuestionPart = document.querySelector(`.${questions[questions.indexOf(currentQuestion) - 1].name}`)
    const previousQuestion = questions[questions.indexOf(currentQuestion) - 1];

    if (previousQuestion.checkAnswer() === "correct") {
      correctQuestions.push(1);
      score += 1;
    } else if (previousQuestion.checkAnswer() === "half") {
      correctQuestions.push(0.5);
      score += 0.5;
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