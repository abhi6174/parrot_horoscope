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
    setTimeout(getRandomAstrologyOutput, 2700);
}

const astrologyOutputs = [
    "You have a chance to win a lottery ticket.A 1/1000 chance !",
"In a future not so bright, you’ll may attempt some nonsense things!",

"In the coming days you will realize that watching reels is a waste of time. You really should’ve seen this coming.",

"A great fortune is coming! Not for you of course",

"An important mission is waiting for you in the future.prepare for it",

"Beware of distractions in the coming days; they may lead you astray from your true path. Stay focused!",

"You’ll encounter a mysterious stranger who may hold the answers to questions you didn’t even know you had."

  
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
