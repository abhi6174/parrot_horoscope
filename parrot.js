const cardContainer = document.getElementById('cardContainer');
const parrotImage = document.getElementById('parrot_img');

function rotateCards() {
    let rotationAngle = 0;
    const rotationSpeed = 12; // Degrees to rotate every interval
    const duration = 2100; // Duration of rotation in milliseconds (5 seconds)
    const intervalTime = 43; // Interval time in milliseconds (0.1 seconds)

    const totalRotations = duration / intervalTime; // Total number of rotations in given duration

    // Start rotating every interval
    const interval = setInterval(() => {
        rotationAngle += rotationSpeed; // Increase rotation angle
        cardContainer.style.transform = `rotate(${rotationAngle}deg)`; // Apply rotation to the div
    }, intervalTime);

    // Stop rotation after the specified duration
    setTimeout(() => {
        clearInterval(interval); // Clear the interval
        cardContainer.style.transform = `rotate(${rotationAngle}deg)`; // Ensure it stays at the final rotation
    }, duration);
    setTimeout(()=>{
        parrotImage.style.transform= `rotate(${30}deg)`;
    },duration);
    setTimeout(getRandomAstrologyOutput,2200);
}   
   // Array of astrology outputs
   const astrologyOutputs = [
    " You will find new opportunities today. Embrace them!",
    " It's a good day for financial decisions. Plan wisely.",
    " Communication is key today. Reach out to someone.",
    "Focus on self-care and nurturing your relationships.",
    "Your confidence will shine today. Use it to your advantage."
];

// Function to get a random astrology output
function getRandomAstrologyOutput() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * astrologyOutputs.length);
    // Return the output string at that index
    console.log(astrologyOutputs[randomIndex]);
}

