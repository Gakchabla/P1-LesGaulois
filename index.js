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
    answer: [
        { text: 'Lyon', correct: true },
        { text: 'Marseille', correct: false },
        { text: 'Paris', correct: false },
        { text: 'Bordeaux', correct: false }]
}]

const startButton = document.getElementById('start-btn')
const button = document.querySelector('.buttons-grid')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    startQuestion()
}
function startQuestion() {
    showQuestion()
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}
// **************************Sidebar****************************


const burgermenu = document.querySelector(".burgermenu");
const menuAside = document.querySelector(".left")
const body = document.querySelector("body")
const main = document.querySelector("main")

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")){
        menuAside.style.translate = ("-2000px");
    } else {
        menuAside.style.translate = ("2000px");
    }
event.preventDefault();
})

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")){
        body.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        body.style.backgroundColor = "#B6CDE8";
    }
event.preventDefault();
})

main.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")){
        menuAside.style.translate = ("-2000px");
        body.style.backgroundColor = "#B6CDE8";
    }
})