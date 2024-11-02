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
    setTimeout(getRandomAstrologyOutput,2200);
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
    console.log(astrologyOutputs[randomIndex]);
}

