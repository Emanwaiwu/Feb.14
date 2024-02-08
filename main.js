const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
let angle = 0;

yesButton.addEventListener('click', () => {
    window.location.href = "success.html";
});

document.addEventListener('beforeunload', () => {
    window.location.href = "index.html";
});



function moveButtonRandomly() {
    const radius = Math.random() * 300 - 100; // You can adjust the radius of the circle
    const centerX = window.innerWidth / 900;
    const centerY = window.innerHeight / 900;

    // Calculate new position in circular path
    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);

    // Update the angle for the next click
    angle += 10; // You can adjust the speed of rotation

    // Apply the transformation
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}

noButton.addEventListener('click', () => {
    moveButtonRandomly();
});