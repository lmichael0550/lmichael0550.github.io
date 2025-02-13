// script.js
const questions = [
  {
    question: "What is Boba's favorite food",
    answers: ["Taiyaki", "Milk Tea"],
    responses: {
      correct: "mreow mreow",
      wrong: "hiss hiss"
    }
  },
  {
    question: "What is Sago talented at",
    answers: ["Rolling", "Running"],
    responses: {
      correct: "mreow meow mreow mreow",
      wrong: "hissssssssssssssssssssssssssss"
    }
  },
  {
    question: "❤️ Okay, you pass, will you be my Valentine? ❤️",
    answers: ["Yes!", "No..."],
    responses: {
      correct: "yippee!!!!!",
      wrong: "im taking the kids try again"
    }
  }
];

let currentQuestion = 0;
const responseElement = document.getElementById('response');
const questionElement = document.querySelector('h2');
const buttons = {
  yes: document.getElementById('yesButton'),
  no: document.getElementById('noButton')
};

function updateQuestion() {
  if (currentQuestion >= questions.length) return;
  
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  buttons.yes.textContent = q.answers[0];
  buttons.no.textContent = q.answers[1];
}

function handleAnswer(isCorrect) {
  const q = questions[currentQuestion];
  const isLast = currentQuestion == questions.length - 1;
  responseElement.textContent = isCorrect ? q.responses.correct : q.responses.wrong;
  questionElement.textContent = isLast ? isCorrect ? "i love you!!!" : "ok bye" : isCorrect ? "Moving on..." : "Starting over...";
  
  setTimeout(() => {
    currentQuestion = isCorrect ? currentQuestion+1 : 0;
    responseElement.textContent = '';
    if (currentQuestion < questions.length) {
      updateQuestion();
    }
  }, 2000);

  if (currentQuestion > questions.length-1 ) {
    buttons.yes.disabled = true;
    buttons.no.disabled = true;
  }
}

buttons.yes.addEventListener('click', () => {
  handleAnswer(true);
});

buttons.no.addEventListener('click', () => {
  handleAnswer(false);
});

// Start the first question
updateQuestion();