const basket = document.getElementById('basket');
const star = document.getElementById('star');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');

let basketPosition = window.innerWidth / 2 - 50;
let starPositionX = Math.random() * (window.innerWidth - 30);
let starPositionY = 0;
let score = 0;
let lives = 3;
let fallingSpeed = 5;

function moveBasket(event) {
    if (event.key === "ArrowLeft" && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === "ArrowRight" && basketPosition < window.innerWidth - 100) {
        basketPosition += 20;
    }
    basket.style.left = basketPosition + 'px';
}

function dropStar() {
    starPositionY += fallingSpeed;
    star.style.top = starPositionY + 'px';
    star.style.left = starPositionX + 'px';

    // Check if the star is caught
    if (starPositionY > window.innerHeight - 70 && starPositionX > basketPosition && starPositionX < basketPosition + 100) {
        score++;
        resetStar();
    }

    // Check if the star is missed
    if (starPositionY > window.innerHeight) {
        lives--;
        resetStar();
        if (lives === 0) {
            alert("Game Over! Your score: " + score);
            resetGame();
        }
    }

    updateScore();
    requestAnimationFrame(dropStar);
}

function resetStar() {
    starPositionX = Math.random() * (window.innerWidth - 30);
    starPositionY = 0;
    fallingSpeed += 0.2; // Increase the difficulty by speeding up the star
}

function resetGame() {
    score = 0;
    lives = 3;
    fallingSpeed = 5;
    updateScore();
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
    livesElement.textContent = `Lives: ${lives}`;
}

document.addEventListener('keydown', moveBasket);
dropStar();
