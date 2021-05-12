let count = 0;
let counter = document.getElementById("clicks");
let score = 0;
let scoreLabel = document.getElementById("score");
let multiplier = 2;
let clicker = 1;
let autoClicker = 0;
let multiplierCost = 10;
let autoMultiplier = 2;
let autoClickerCost = 10;
let autoClickPrice = document.getElementById("autoClickPrice");
let autoClickItem = document.getElementById("autoClickItem");
let multiplyPrice = document.getElementById("multiplyPrice");
let multiplyItem = document.getElementById("multiplyItem");
let cookiesPerClick = document.getElementById("cookiesPerClick");
let cookiesPerSecond = document.getElementById("cookiesPerSecond");


cookiesPerClick.textContent = clicker;
multiplyPrice.textContent = multiplierCost;
multiplyItem.textContent = clicker * multiplier;
autoClickPrice.textContent = autoClickerCost;
autoClickItem.textContent = autoClicker + 1;

window.setInterval(function () {
    score += autoClicker; // score = score + autoClicker
    scoreLabel.textContent = score;

}, 1000);

document.getElementById("cookie").addEventListener("click", function () {

    count += 1; // count = count +1
    counter.textContent = count;

    score += clicker; // score = score +1
    scoreLabel.textContent = score;
});

document.getElementById("multiplier").addEventListener("click", function () {
    if (score >= multiplierCost) {
        score = score - multiplierCost;

        multiplierCost = multiplierCost * multiplier;

        clicker = clicker * multiplier;

        scoreLabel.textContent = score;
        cookiesPerClick.textContent = clicker;
        multiplyPrice.textContent = multiplierCost;

        multiplyItem.textContent = clicker * multiplier;

    }
});

document.getElementById("autoClick").addEventListener("click", function () {
    if(score >= autoClickerCost) {
        score = score - autoClickerCost;
        autoClicker += 1; // autoClicker = autoClicker + 1

        autoClickerCost = autoClickerCost * autoMultiplier;

        scoreLabel.textContent = score;
        cookiesPerSecond.textContent = autoClicker;
        autoClickPrice.textContent = autoClickerCost;

        autoClickItem.textContent = autoClicker + 1;

    }

});



