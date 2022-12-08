'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    // When we win change background green
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Make white winner number bigger
    document.querySelector('.number').style.width = '30rem';

    //
    if (score > highscore) {
      highscore = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {


      document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'You lost the game!'
      document.querySelector('.score').textContent = 0;
    }
  }
});



