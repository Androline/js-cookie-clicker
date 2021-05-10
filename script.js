let count = 0;
let counter = document.getElementById("counter");
let score = 0;
let scoreLabel = document.getElementById("score");
let button = document.getElementById("run");

document.getElementById("run").addEventListener("click", function () {

    count += 1; // count = count +1
    counter.innerHTML = count;

    score += 1; // score = score +1
    scoreLabel.innerHTML = "Score: " + score;
});

document.getElementById("multiplier").addEventListener("click", function () {

score *= 2;
scoreLabel.innterHTML = "Score: " + score;

});