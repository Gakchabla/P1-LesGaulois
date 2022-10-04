"use strict";
//**********************Quiz description******************************/

const answerButtons = document.querySelectorAll('.answerButton');


const textReponse = function () {
    const explication = document.createElement('div')
    explication.classList.add('explication')
    explication.classList.add('container')
    explication.innerHTML = "La ville de Lyon est la meilleure ville de france en plus d'être la capitale de sa région";
    quiz.appendChild(explication);
}
const textDelete = function () {
    if (document.querySelector(".explication") != null) {
        quiz.removeChild(document.querySelector(".explication"));
    }
}

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function () {
        textDelete();
        textReponse();
    });
}


//**********************Tableau Images******************************
const images = [["assets/Lyon.jpg", "assets/Lyon2.jpg", "assets/Lyon3.jpg"],
["assets/bourgogne1.jpg", "assets/bourgogne2.jpg", "assets/bourgogne3.jpg"], ["assets/grandEst1.png", "assets/grandEst2.jpg", "assets/grandEst3.jpg"],
["assets/nouvelleAquitaine.png", "assets/nouvelleAquitaine2.jpg", "assets/nouvelleAquitaine3.jpg"]]

//**********************Talbeau questions******************************

const questions = [[{
    question: "Quelle est cette ville ?",
    answers: [
        { text: 'Lyon', correct: true },
        { text: 'Marseille', correct: false },
        { text: 'Paris', correct: false },
        { text: 'Bordeaux', correct: false }]
},
{
    question: "Laquelle de ces spécialités culinaires est originaire de cette région?",
    answers: [
        { text: 'Les galettes de froment', correct: false },
        { text: 'La bouillabaisse', correct: false },
        { text: 'Les quenelles', correct: true },
        { text: 'Les trippes', correct: false }],
},
{
    question: "Dans quelle ville d'Auvergne-Rhone-Alpes peut on célebrer la fête du roi de l'Oiseau?",
    answers: [
        { text: 'Lyon', correct: false },
        { text: 'Clermont Ferrand', correct: false },
        { text: 'Oyonnax', correct: false },
        { text: 'Le Puy en Velay', correct: true }]
}], [{
    question: "Bourgogne1 ?",
    answers: [
        { text: '1', correct: true },
        { text: '2', correct: false },
        { text: '3', correct: false },
        { text: '4', correct: false }]
}, {
    question: "Bourgogne 2?",
    answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false },
        { text: '4', correct: false }]
}, {
    question: "Bourgogne 3",
    answers: [
        { text: '1', correct: false },
        { text: '2', correct: false },
        { text: '3', correct: true },
        { text: '4', correct: false }]
}]]

const links = document.querySelectorAll(".link");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
let question = questions[0];

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        image1.src = images[i][0];
        image2.src = images[i][1];
        image3.src = images[i][2];
        question = questions[i];
    }
    )
}





//**********************Carousel******************************

const carouselItem = document.querySelectorAll(".carouselItem"); // selecting all items in the carousel into an array

carouselItem.forEach((item, indx) => {
    item.style.transform = `translateX(${indx * 100}%)`;
}); // giving every item a X value based on it's index

const nextItem = document.querySelector(".buttonNext");

let currentItem = 0; // a value that will modify the item shown by it's value
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
    textDelete();
} // a function that checks what the current item is shown and lighten the right navigation dot

const slideItem = function () {
    carouselItem.forEach((item, indx) => {
        item.style.transform = `translateX(${100 * (indx - currentItem)}%)`;
    })
}; // a function that move the item shown by the value of currentItem


nextItem.addEventListener("click", function () {
    if (currentItem === maxItem) {
        currentItem = 0
    } //if the item is the last, goes back to the first
    else {
        currentItem++;
    };
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
}); // checks if the currentItem isn't the last and then shitf it it by one to the left

const prevItem = document.querySelector(".buttonPrev");

prevItem.addEventListener("click", function () {
    if (currentItem === 0) {
        currentItem = maxItem;
    } //if the item is the first, goes to the last
    else {
        currentItem--;
    }
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
});// checks if the currentItem isn't the last and then shitf it it by one to the right
const dotUn = document.getElementById("dot1")

dotUn.addEventListener("click", function () {
    currentItem = 0;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
});//when clicking on a dot put the item shown to the right index

const dotDeux = document.getElementById("dot2")

dotDeux.addEventListener("click", function () {
    currentItem = 1;
    slideItem()
    dotSwitch();
    startQuestion(currentItem);
});//when clicking on a dot put the item shown to the right index

const dotTrois = document.getElementById("dot3")

dotTrois.addEventListener("click", function () {
    currentItem = 2;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
}); //when clicking on a dot put the item shown to the right index
dotSwitch(); //initialize the dots


// **************************Quiz****************************




const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const button = document.querySelector('.buttons-grid');
const questionElement = document.getElementById('question');

let curentQuestionIndex = 0;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', function () {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('good-answer');
        answerButtons[i].classList.remove('wrong-answer');
    }

    if (currentItem === maxItem) {
        currentItem = 0
    } //if the item is the last, goes back to the first
    else {
        currentItem++;
    };

    nextButton.classList.add('hide')


    startQuestion(currentItem);
    slideItem();
});

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    startQuestion(currentItem)
}
function startQuestion(questionIndex) {
    const questionObject = question[questionIndex];
    // showQuestion({
    //     question: "Quelle est cette ville ?",
    //     answers: [
    //         { text: 'Lyon', correct: true },
    //         { text: 'Marseille', correct: false },
    //         { text: 'Paris', correct: false },
    //         { text: 'Bordeaux', correct: false }]
    // })
    showQuestion(questionObject);
    // showAnswer([
    //     { text: 'Lyon', correct: true },
    //     { text: 'Marseille', correct: false },
    //     { text: 'Paris', correct: false },
    //     { text: 'Bordeaux', correct: false }])
    showAnswer(questionObject.answers);
    checkAnswer(questionObject.answers);
}

function showQuestion(questionObject) {
    questionElement.innerText = questionObject.question;
}


function checkAnswer(questionAnswers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function () {
            if (questionAnswers[i].correct === true) {
                nextButton.classList.remove('hide')
                answerButtons[i].classList.add('good-answer')
            }
            else if (questionAnswers[i].correct === false) {
                console.log("try again")
                answerButtons[i].classList.remove('good-answer')
                answerButtons[i].classList.add('wrong-answer')

            }
        });
    }
}

function showAnswer(questionAnswers) {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = questionAnswers[i].text;
    }
}

// **************************Sidebar****************************


const burgermenu = document.querySelector(".burgermenu");
const menuAside = document.querySelector(".left")
const body = document.querySelector("body")
const rightElements = document.querySelector(".right")
const listRegion = document.querySelectorAll(".linkQuestion")
const mapRegion = document.querySelectorAll(".mapQuestion")

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

rightElements.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")) {
        menuAside.style.translate = ("-2000px");
        body.style.backgroundColor = "#B6CDE8";
    }
})

listRegion.forEach((liste) => {
    liste.addEventListener("click", () => {
        startGame();
    })
})

const quiz = document.querySelector(".quiz");





for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        image1.src = images[i][0];
        image2.src = images[i][1];
        image3.src = images[i][2];
    }
    )
}

const logo = document.querySelector('.logo');

logo.addEventListener('click', function () { location.reload() });
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};