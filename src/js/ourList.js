const list = document.querySelector(".ourServices__list");
const content = document.querySelector(".ourServices__infoBox");
const itemElements = Array.from(
  document.querySelectorAll(".ourServices__list-item")
);
import info from "./items.json";

const createHTML = ({ image, text }) => {
  return `
            <img class="ourServices__img" src="${image}">
            <p class="ourServices__text">${text}</p>
          `;
};

const oncreateHTML = ({ target, currentTarget }) => {
  if (target === currentTarget) return;
  content.innerHTML = "";
  itemElements.map((el) => el.classList.remove("active"));
  target.classList.add("active");
  const article = info.find((el) => el.title === target.textContent);
  if (article) {
    const markup = createHTML(article);
    content.insertAdjacentHTML("afterbegin", markup);
  }
};

const oncreateHTMLAfterLoaded = ({ target }) => {
  const markup = createHTML(info[0]);
  content.insertAdjacentHTML("afterbegin", markup);
  itemElements[0].classList.add("active");
};

list.addEventListener("click", oncreateHTML);
document.addEventListener("DOMContentLoaded", oncreateHTMLAfterLoaded);
