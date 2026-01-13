const card = document.getElementById('magneticCard');

document.addEventListener('mousemove', (e) => {
    // 1. Get mouse coordinates
    const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    // 2. Apply the rotation
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset the card when the mouse leaves
document.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});