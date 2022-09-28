const carouselItem = document.querySelectorAll(".carouselItem");

carouselItem.forEach((item, indx) => {
    item.style.transform = `translateX(${indx * 100}%)`;
});

const nextItem = document.querySelector(".buttonNext");

let currentItem = 0;
let maxItem = carouselItem.length - 1


nextItem.addEventListener("click", function () {
    if (currentItem === maxItem) {
        curentItem = 0
    }
    else {
        currentItem++;
    }
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
});
const questions = [{
    question: "Quelle est cette ville ?",
    answer: ["Lyon", "Marseille", "Paris", "Toulouse"],
    isCorrect: 0
}]

