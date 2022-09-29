//**********************Carousel******************************

const carouselItem = document.querySelectorAll(".carouselItem");

carouselItem.forEach((item, indx) => {
    item.style.transform = `translateX(${indx * 100}%)`;
});

const nextItem = document.querySelector(".buttonNext");

let currentItem = 0;
let maxItem = carouselItem.length - 1


nextItem.addEventListener("click", function () {
    if (currentItem === maxItem) {
        currentItem = 0
    }
    else {
        currentItem++;
    }
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
});

const prevItem = document.querySelector(".buttonPrev");

prevItem.addEventListener("click", function () {
    if (currentItem === 0) {
        currentItem = maxItem;
    }
    else {
        currentItem--;
    }
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
});

// **************************Quiz****************************

const questions = [{
    question: "Quelle est cette ville ?",
    answer: ["Lyon", "Marseille", "Paris", "Toulouse"],
    isCorrect: 0
}]

const startButton = document.getElementById('start-btn')
const questionText = document.getElementById('question')
const button = document.querySelector('.buttons-grid')
// const secondButton = document.querySelector('btn2')
// const thirdButton = document.querySelector('btn3')
// const forthButton = document.querySelector('btn4')


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionText.classList.remove('hide')
    button.classList.remove('hide')
    // secondButton.classList.remove('hide')
    // thirdButton.classList.remove('hide')
    // forthButton.classList.remove('hide')

}
function startQuestion() {

}

function selectAnswer() {

}
