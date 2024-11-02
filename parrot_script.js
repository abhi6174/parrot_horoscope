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
        cardContainer.style.transform = `rotate(${rotationAngle}deg)`; }, duration);
    setTimeout(()=>{
        parrotImage.style.transform= `rotate(${30}deg)`;
    },duration);
    setTimeout(()=>{
        parrotImage.style.transform= `rotate(${-1}deg)`;
    },2500);
    setTimeout(getRandomAstrologyOutput,2600);
}   
   
   const astrologyOutputs = [
    " You will find new opportunities today. Embrace them!",
    " It's a good day for financial decisions. Plan wisely.",
    " Communication is key today. Reach out to someone.",
    "Focus on self-care and nurturing your relationships.",
    "Your confidence will shine today. Use it to your advantage."
];

function getRandomAstrologyOutput() {
    const randomIndex = Math.floor(Math.random() * astrologyOutputs.length);
    document.getElementById("disp").innerHTML=`
    <h2>${astrologyOutputs[randomIndex]}</h2>`;
    document.getElementById("content").style.display="flex";
    document.getElementById("exit_btn").style.display="flex";
    document.getElementById("check_btn").style.display="none";   
}

function exit(){
    window.location.href ="index.html";
}
