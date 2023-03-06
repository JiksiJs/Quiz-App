const form = document.getElementById("quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questions = document.querySelectorAll(".question-item");
const alertItem = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  questions.forEach((question) => {
    question.classList.add("incorrect");
    question.classList.remove("correct");
  });

  const checked = answers.filter((answer) => answer.checked);

  checked.forEach((answer) => {
    const isCorrect = answer.value === "true";
    const questionItem = answer.closest(".question-item");

    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });

  const allCorrect = checked.every((answer) => answer.value === "true");
  const allAnswered = checked.length === questions.length;

  if (allCorrect && allAnswered) {
    alertItem.classList.add("active");
    setTimeout(() => {
      alertItem.classList.remove("active");
    }, 2000);
  }
});
