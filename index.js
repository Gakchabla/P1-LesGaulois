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

const questions = [{
    question: "Quelle est cette ville ?",
    answer: ["Lyon", "Marseille", "Paris", "Toulouse"],
    isCorrect: 0
}]

