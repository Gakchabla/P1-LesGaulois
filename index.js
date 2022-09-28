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


const questions = [{
    question: "Quelle est cette ville ?",
    answer: ["Lyon", "Marseille", "Paris", "Toulouse"],
    isCorrect: 0
}]

const menuAsideAppears = document.querySelector(".burgermenu");
const menuAside = document.querySelector(".left")
const main = document.querySelector("main")
const mapFrench = document.querySelector(".land")

menuAsideAppears.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")){
        menuAside.style.translate = ("-2000px");
    } else {
        menuAside.style.translate = ("2000px");
    }
event.preventDefault();
})

menuAsideAppears.addEventListener("click", () => {
    if (menuAside.style.translate == ("2000px")){
        main.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        main.style.backgroundColor = "rgba(0,0,0,0)";
    }
event.preventDefault();
})
