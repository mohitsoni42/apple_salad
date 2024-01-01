// your_app/static/your_app/game.js
document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
});

let gameContainer;
let gameInterval;
let timerUpdateInterval;
let score = 0;
let timer = 30;

function initializeGame() {
    gameContainer = document.getElementById('game-container');

    document.getElementById('start-btn').addEventListener('click', startGame);

    updateScore();
}

function startGame() {
    document.getElementById('start-btn').disabled = true;

    score = 0;
    updateScore();
    timer = 30;

    // Uncomment the line below to enable the interval for creating fruits
    gameInterval = setInterval(createRandomFruit, 1000);

    // Display and update the timer
    const timerContainer = document.getElementById('timer-container');
    timerContainer.innerText = `Time: ${timer}`;
    timerUpdateInterval = setInterval(() => {
        if (timer === 0) {
            stopGame();
        } else {
            timer--;
            timerContainer.innerText = `Time: ${timer}`;
        }
    }, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(timerUpdateInterval);

    const encouragementMessage = 'Well done! Your final score is';
    const finalMessage = `${encouragementMessage} ${score}. Play again to improve!`;

    document.getElementById('encouragement').innerText = finalMessage;

    // Clear the timer display
    document.getElementById('timer-container').innerText = '';

    // Clear previous fruits
    document.querySelectorAll('.fruit').forEach(fruit => gameContainer.removeChild(fruit));

    // Enable the start button after stopping the game
    document.getElementById('start-btn').disabled = false;
}

function createRandomFruit() {
    const fruit = document.createElement('div');
    fruit.classList.add('fruit');

    // Set random position at the top of the game container
    const maxX = gameContainer.clientWidth - 50;
    const randomX = Math.floor(Math.random() * maxX);

    fruit.style.left = `${randomX}px`;
    fruit.style.top = '0';

    // Set random fruit type
    const fruitType = Math.random() < 0.5 ? 'apple' : 'orange';
    fruit.classList.add(fruitType);

    // Attach hover event to the fruit
    fruit.addEventListener('mouseover', () => {
        gameContainer.removeChild(fruit);
        updateScore();
    });

    gameContainer.appendChild(fruit);

    // Animate the fruit's downward movement
    animateFruit(fruit);
}

function animateFruit(fruit) {
    let positionY = 0;
    const animationInterval = setInterval(() => {
        positionY += 5; // Adjust the speed as needed
        fruit.style.top = `${positionY}px`;

        // Stop the animation when the fruit reaches the bottom
        if (positionY >= gameContainer.clientHeight - 50) {
            clearInterval(animationInterval);
            gameContainer.removeChild(fruit);
        }
    }, 30);
}

function updateScore() {
    score++;
    document.getElementById('score-container').innerText = `Score: ${score}`;
}



// 1. heading Apple Salad should be fancy, and it should look cool and colorful for kids.
// 2. the whitespace on side of the game div should be filled be some color and gaming text.
// 3. after finishing the game, the message should be displayed inside the div where fruits were getting created.
// 4. it should encourage user to play again with random messages each time.
// 5. with each secound the speed of fruit creation should increase by 5 %
// 6. sound
// 7. easy normal hard
// 8. bomb 
// 9. light effect on slice
// 10. multiple weapon
// 11. multiple fruits
