
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', alertFunction);
paperBtn.addEventListener('click', alertFunction);
scissorsBtn.addEventListener('click', alertFunction);