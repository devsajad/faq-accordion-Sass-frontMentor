const faqList = document.querySelector(".faq__list");
const faqAnswers = document.querySelectorAll(".faq__answer");
const faqHeader = document.querySelectorAll(".faq__header");

faqList.addEventListener("click", (e) => {
  const target = e.target.closest(".faq__header");
  if (!target) return;

  const answer = target.nextElementSibling;

  faqHeader.forEach((el) => {
    if (el === target) return;
    el.classList.remove("active");
  });

  faqAnswers.forEach((el) => {
    if (el === answer) return;
    el.classList.remove("open");
  });

  answer.classList.toggle("open");
  target.classList.toggle("active");
});
