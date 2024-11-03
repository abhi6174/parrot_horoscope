const cardContainer = document.getElementById('cardContainer');
const parrotImage = document.getElementById('parrot_img');

function rotateCards() {
    let rotationAngle = 0;
    const rotationSpeed = 12;
    const duration = 2100;
    const intervalTime = 43;
    const totalRotations = duration / intervalTime;
    const interval = setInterval(() => {
        rotationAngle += rotationSpeed;
        cardContainer.style.transform = `rotate(${rotationAngle}deg)`;
    }, intervalTime);

    setTimeout(() => {
        clearInterval(interval);
        cardContainer.style.transform = `rotate(${rotationAngle}deg)`;
    }, duration);
    setTimeout(() => {
        parrotImage.style.transform = `rotate(${30}deg)`;
    }, duration);
    setTimeout(() => {
        parrotImage.style.transform = `rotate(${-1}deg)`;
    }, 2500);
    setTimeout(getRandomAstrologyOutput, 2600);
}

const astrologyOutputs = [
    " Today, you’ll feel an urge to clean your room, but don’t worry—it will pass quickly.",
    " Remember, the best things in life are free... but so are the worst things. Choose wisely!",
    "Today you’ll discover a hidden talent for procrastination. Embrace it; deadlines are just suggestions anyway.",
    " The stars say you’re destined for greatness... as soon as you finish that nap.",
    " You will cross paths with someone who finds you irresistible—likely because you’re carrying snacks."
  
];

function getRandomAstrologyOutput() {
    const randomIndex = Math.floor(Math.random() * astrologyOutputs.length);
    document.getElementById("disp").innerHTML = `
    <h2>${astrologyOutputs[randomIndex]}</h2>`;
    document.getElementById("content").style.display = "flex";
    document.getElementById("exit_btn").style.display = "flex";
    document.getElementById("check_btn").style.display = "none";
}

function exit() {
    window.location.href = "index.html";
}
