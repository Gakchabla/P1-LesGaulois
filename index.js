//**********************Carousel******************************

const carouselItem = document.querySelectorAll(".carouselItem");

carouselItem.forEach((item, indx) => {
    item.style.transform = `translateX(${indx * 100}%)`;
});

const nextItem = document.querySelector(".buttonNext");

let currentItem = 0;
let maxItem = carouselItem.length - 1
const dotSwitch = function () {
    if (currentItem === 0) {
        dotUn.style.backgroundColor = "white";
        dotDeux.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotTrois.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
    }
    else if (currentItem === 1) {
        dotUn.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotDeux.style.backgroundColor = "white";
        dotTrois.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
    }
    else if (currentItem === 2) {
        dotUn.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotDeux.style.backgroundColor = "rgba(211, 211, 211, 0.39)";
        dotTrois.style.backgroundColor = "white";
    }
}


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
    dotSwitch();
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
    dotSwitch();
});
const dotUn = document.getElementById("dot1")

dotUn.addEventListener("click", function () {
    currentItem = 0;
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
    dotSwitch();
});

const dotDeux = document.getElementById("dot2")

dotDeux.addEventListener("click", function () {
    currentItem = 1;
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
    dotSwitch();
});

const dotTrois = document.getElementById("dot3")

dotTrois.addEventListener("click", function () {
    currentItem = 2;
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    });
    dotSwitch();
});
dotSwitch();


// **************************Quiz****************************

const questions = {
    question: "Quelle est cette ville ?",
    answer: [
        { text: 'Lyon', correct: true },
        { text: 'Marseille', correct: false },
        { text: 'Paris', correct: false },
        { text: 'Bordeaux', correct: false }]
}

const startButton = document.getElementById('start-btn')
const button = document.querySelector('.buttons-grid')
const questionElement = document.getElementById('question')
const answerButtonElement1 = document.querySelector('.btn1')
const answerButtonElement2 = document.querySelector('.btn2')
const answerButtonElement3 = document.querySelector('.btn3')
const answerButtonElement4 = document.querySelector('.btn4')


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    // resetButton.classList.remove('hide')
    nextButton.classList.remove('hide')
    startQuestion()
}
function startQuestion() {
    showQuestion()
    showAnswer()
}

function showQuestion(question) {
    questionElement.innerText = questions.question
}

function showAnswer() {
    answerButtonElement1.innerText = questions.answer[0].text
    answerButtonElement2.innerText = questions.answer[1].text
    answerButtonElement3.innerText = questions.answer[2].text
    answerButtonElement4.innerText = questions.answer[3].text
}

/************************* Color & Next Quizz **********************/

// const resetButton = document.querySelector('.reset-btn')
const nextButton = document.querySelector('.next-btn')

answerButtonElement1.addEventListener('click', colorsAnswer)

function colorsAnswer() {
    answerButtonElement1.style.backgroundColor = 'green';
    answerButtonElement2.style.backgroundColor = 'red';
    answerButtonElement3.style.backgroundColor = 'red';
    answerButtonElement4.style.backgroundColor = 'red';
}



resetButton.removeEventListener('click', resetColorsAnswer)

function resetColorsAnswer() {
}


// **************************Sidebar****************************


const burgermenu = document.querySelector(".burgermenu");
const menuAside = document.querySelector(".left")
const body = document.querySelector("body")
const main = document.querySelector("main")

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        menuAside.style.translate = ("-2000px");
    } else {
        menuAside.style.translate = ("2000px");
    }
    event.preventDefault();
})

burgermenu.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        body.style.backgroundColor = "rgba(0,0,0,0.6)";
    } else {
        body.style.backgroundColor = "#B6CDE8";
    }
    event.preventDefault();
})

main.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        menuAside.style.translate = ("-2000px");
        body.style.backgroundColor = "#B6CDE8";
    }
})