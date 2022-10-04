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
});// checks if the currentItem isn't the last and then shitf it it by one to the right
const dotUn = document.getElementById("dot1")

dotUn.addEventListener("click", function () {
    currentItem = 0;
    slideItem();
    dotSwitch();
});//when clicking on a dot put the item shown to the right index

const dotDeux = document.getElementById("dot2")

dotDeux.addEventListener("click", function () {
    currentItem = 1;
    slideItem()
    dotSwitch();
});//when clicking on a dot put the item shown to the right index

const dotTrois = document.getElementById("dot3")

dotTrois.addEventListener("click", function () {
    currentItem = 2;
    slideItem();
    dotSwitch();
}); //when clicking on a dot put the item shown to the right index
dotSwitch(); //initialize the dots


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
const nextButton = document.getElementById('next-btn')
const button = document.querySelector('.buttons-grid')
const questionElement = document.getElementById('question')


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionElement.classList.remove('hide')
    button.classList.remove('hide')
    startQuestion()
}
function startQuestion() {
    showQuestion()
    showAnswer()
    getAnswer()
}

function showQuestion(question) {
    questionElement.innerText = questions.question
}


function getAnswer() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', function () {
            if (questions.answer[i].correct === true) {
                nextButton.classList.remove('hide')
                answerButtons[i].style.backgroundColor = 'green'
            }
            else {
                console.log("try again")
                answerButtons[i].style.backgroundColor = 'red';
            }
        });
    }
}

function showAnswer() {
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = questions.answer[i].text
    }
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

const quiz = document.querySelector(".quiz");

// ************************** Form ****************************

// let myForm = document.getElementById('myForm');

// myForm.addEventListener('submit', function (event) {
//     let myInput = document.getElementById('username');
//     let myRegex = /^[a-zA-Z-\s]+$/;

//     if (myInput.value.trim() == "") {
//         let myError = document.getElementById('error');
//         myError.innerHTML = "le champ username est requis";
//         myError.style.color = 'red';
//         event.preventDefault();

//     } else if (myRegex.test(myInput.value) == false) {
//         let myError = document.getElementById('error');
//         myError.innerHTML = 'Le champ ne doit comporter que des lettres et des tirets uniquement.';
//         myError.style.color = 'red';
//         event.preventDefault();
//     }

// });


let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('username');
    let myRegex = /^[a-zA-Z-\s]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorUsername');
        myError.innerHTML = "Le champ username est requis";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorUsername');
        myError.innerText = 'Le champ ne doit comporter que des lettres et des tirets uniquement.';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('mail');
    let myRegex = /^[@]+$/;

    if (myInput.value.trim() == "") {
        let myError = document.getElementById('errorMail');
        myError.innerHTML = "Le champ n'est pas complété";
        myError.style.color = 'red';
        event.preventDefault();

    } else if (myRegex.test(myInput.value) == false) {
        let myError = document.getElementById('errorMail');
        myError.innerText = 'Le mail doit comporter un format avec @';
        myError.style.color = 'red';
        event.preventDefault();
    }

});

myForm.addEventListener('submit', function (event) {
    let myInput = document.getElementById('number');      //Les chaînes de caractères sont définies entre guillemets ('),
    let myRegex = /^[0123456789]+$/;                      //les regex ou expressions régulières sont entre des slashs (/)

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

