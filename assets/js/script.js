const contentDiv  =document.querySelector(".content");

const btn = document.querySelector(".btn-container");
const contentTitleId = document.querySelector(".content-title > span");
const adviceText = document.querySelector(".advice-text");

btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice") // Random advice API
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        contentTitleId.textContent = data.slip.id;
        adviceText.textContent = data.slip.advice;
        contentDiv.firstChild(contentTitleId, adviceText);
    })
})
