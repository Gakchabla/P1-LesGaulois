"use strict";
//**********************Quiz description******************************/

const answerButtons = document.querySelectorAll('.answerButton');





//**********************Tableau Images******************************
const images = [["assets/Images/Carousel/Lyon", "assets/Images/Carousel/Lyon2.jpg", "assets/Images/Carousel/Lyon3.jpg"],
["assets/Images/Carousel/bourgogne1.jpg", "assets/Images/Carousel/bourgogne2.jpg", "assets/Images/Carousel/bourgogne3.jpg"],
["assets/Images/Carousel/grandEst1.png", "assets/Images/Carousel/grandEst2.jpg", "assets/Images/Carousel/grandEst3.jpg"],
["assets/Images/Carousel/nouvelleAquitaine.png", "assets/Images/Carousel/nouvelleAquitaine2.jpg", "assets/Images/Carousel/nouvelleAquitaine3.jpg"]]

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
let question = questions[0];

//**********************Talbeau explications******************************

const explanations = [["La ville de Lyon est la meilleure ville de france en plus d'être la capitale de sa région", "La quenelle est un plat typique de Lyon, traditionellement au brochet, elle est servie avec une sauce Nantua (une autre ville de la région).", "La fête du Roi de l'Oiseau est un festival de la renaissance qui se déroule la troisième semaine du mois de septembre au Puy-en-Velay "]]
let explanation = explanations[0];


const textReponse = function () {
    const explication = document.createElement('div')
    explication.classList.add('explication')
    explication.classList.add('container')
    explication.innerHTML = explanation[currentItem];
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

const links = document.querySelectorAll(".link");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        image1.src = images[i][0];
        image2.src = images[i][1];
        image3.src = images[i][2];
        question = questions[i];
        explanation = explanations[i];
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
    resetAnswerButtons()
    textDelete();


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
    resetAnswerButtons()
    textDelete();


});// checks if the currentItem isn't the last and then shitf it it by one to the right
const dotUn = document.getElementById("dot1")

dotUn.addEventListener("click", function () {
    currentItem = 0;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    textDelete();


});//when clicking on a dot put the item shown to the right index

const dotDeux = document.getElementById("dot2")




dotDeux.addEventListener("click", function () {
    currentItem = 1;
    slideItem()
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    textDelete();


});//when clicking on a dot put the item shown to the right index

const dotTrois = document.getElementById("dot3")

dotTrois.addEventListener("click", function () {
    currentItem = 2;
    slideItem();
    dotSwitch();
    startQuestion(currentItem);
    resetAnswerButtons()
    textDelete();


}); //when clicking on a dot put the item shown to the right index
dotSwitch(); //initialize the dots


// **************************Quiz****************************




const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const button = document.querySelector('.buttons-grid');
const questionElement = document.getElementById('question');

let curentQuestionIndex = 0;

const resetAnswerButtons = function () {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('good-answer');
        answerButtons[i].classList.remove('wrong-answer');

    }
}





startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', function () {
    resetAnswerButtons()
    if (currentItem === maxItem) {
        currentItem = 0
    } //if the item is the last, goes back to the first
    else {
        currentItem++;
    };
    nextButton.classList.add('hide')


    startQuestion(currentItem);
    slideItem();
    textDelete();
    dotSwitch();

});

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    startQuestion(currentItem)
}
function startQuestion(questionIndex) {
    const questionObject = question[questionIndex]; //here question is questions[i], with the index being the index of the region clicked in links
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


const logo = document.querySelector('.logo');

logo.addEventListener('click', function () { location.reload() });
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// ************************** Form ****************************

// ******* Username**********

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('username');
    let myRegex = /^[a-zA-Z-\s]+$/;         // \s autorise les espaces, +$ pour répéter plusieurs fois

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorUsername');
        myError.innerHTML = "Le champ username est requis";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorUsername');
        myError.innerHTML = 'Le champ ne doit comporter que des lettres et des tirets uniquement.';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Mail ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('email');
    let myRegex = /^[@]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorMail');
        myError.innerHTML = "Le champ mail n'est pas complété";
        myError.style.color = 'red';
        event.preventDefault();

    }
    else if (myRegex.test(myInput.value) == true) {
        let myError = document.getElementById('errorMail');
        myError.innerText = 'Le mail nest pas au bon format';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Number ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('number');      //Les chaînes de caractères sont définies entre guillemets ('),
    let myRegex = /^[0-9]+$/;                      //les regex ou expressions régulières sont entre des slashs (/)

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorNumber');
        myError.innerHTML = "Le numéro n'est pas complété";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorNumber');
        myError.innerText = 'Le numéro est invalide';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

// ******* Message ***********

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('message');
    let myRegex = /^[a-zA-Z0-9]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorMessage');
        myError.innerHTML = "Veuillez écrire votre message";
        myError.style.color = 'red';
        event.preventDefault();
    }


});